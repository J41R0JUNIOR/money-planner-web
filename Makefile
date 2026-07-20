.PHONY: init plan apply destroy fmt validate build deploy clean

AWS_REGION ?= us-east-1
INFRA_DIR := infra


init:
	cd $(INFRA_DIR) && terraform init


plan:
	cd $(INFRA_DIR) && terraform plan


apply:
	cd $(INFRA_DIR) && terraform apply


destroy:
	cd $(INFRA_DIR) && terraform destroy


fmt:
	cd $(INFRA_DIR) && terraform fmt -recursive


validate:
	cd $(INFRA_DIR) && terraform validate


build:
	npm ci
	npm run build


deploy:
	@echo "Building frontend..."
	npm run build

	@echo "Uploading files to S3..."

	aws s3 sync dist/ \
		s3://$$(terraform -chdir=$(INFRA_DIR) output -raw bucket_name) \
		--delete \
		--region $(AWS_REGION)

	@echo "Invalidating CloudFront cache..."

	aws cloudfront create-invalidation \
		--distribution-id $$(terraform -chdir=$(INFRA_DIR) output -raw cloudfront_distribution_id) \
		--paths "/*"


url:
	@terraform -chdir=$(INFRA_DIR) output cloudfront_url


clean:
	rm -rf dist