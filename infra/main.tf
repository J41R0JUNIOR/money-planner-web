locals {
  origin_id = "frontend-s3"
}

resource "aws_s3_bucket" "frontend" {
  bucket = "${var.app_name}-frontend-${var.environment}"

  lifecycle {
    prevent_destroy = true
  }

  tags = {
    Project     = var.app_name
    Environment = var.environment
    ManagedBy   = "Terraform"
  }
}


resource "aws_s3_bucket_public_access_block" "frontend" {
  bucket                  = aws_s3_bucket.frontend.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}


resource "aws_cloudfront_origin_access_control" "frontend" {
  name                              = "${var.app_name}-frontend-oac-${var.environment}"
  description                       = "Access control for frontend S3 bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}


resource "aws_cloudfront_distribution" "frontend" {
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }

  }
  enabled             = true
  default_root_object = "index.html"
  http_version        = "http2and3"


  origin {
    domain_name              = aws_s3_bucket.frontend.bucket_regional_domain_name
    origin_id                = local.origin_id
    origin_access_control_id = aws_cloudfront_origin_access_control.frontend.id
  }


 default_cache_behavior {

  target_origin_id = local.origin_id

  viewer_protocol_policy = "redirect-to-https"


  allowed_methods = [
    "GET",
    "HEAD"
  ]


  cached_methods = [
    "GET",
    "HEAD"
  ]


  compress = true


  cache_policy_id = aws_cloudfront_cache_policy.frontend.id
}

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  tags = {
    Project     = var.app_name
    Environment = var.environment
    ManagedBy   = "Terraform"
  }
}

resource "aws_cloudfront_cache_policy" "frontend" {

  name = "${var.app_name}-frontend-cache-${var.environment}"

  default_ttl = 86400
  max_ttl     = 31536000
  min_ttl     = 0


  parameters_in_cache_key_and_forwarded_to_origin {

    enable_accept_encoding_gzip = true

    enable_accept_encoding_brotli = true


    cookies_config {

      cookie_behavior = "none"

    }


    headers_config {

      header_behavior = "none"

    }


    query_strings_config {

      query_string_behavior = "none"

    }

  }
}

resource "aws_s3_bucket_policy" "frontend" {
  bucket = aws_s3_bucket.frontend.id

  depends_on = [
    aws_cloudfront_distribution.frontend
  ]

  policy = jsonencode({

    Version = "2012-10-17"

    Statement = [

      {

        Sid = "AllowCloudFrontAccess"

        Effect = "Allow"


        Principal = {
          Service = "cloudfront.amazonaws.com"
        }

        Action = [
          "s3:GetObject"
        ]

        Resource = [
          "${aws_s3_bucket.frontend.arn}/*"
        ]

        Condition = {

          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.frontend.arn
          }
        }
      }
    ]
  })
}