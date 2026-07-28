import type { CSSProperties } from "react";
import { colors } from "./colors";

export const customStyle: Record<string, CSSProperties> = {
  authContainer: {
    padding: "5%",
    minWidth: "300px",
    border: `1px solid ${colors.border}`,
    borderRadius: 16,

  },
  page: {
    width: "100%",
    height: "100%",
    padding: 20,
    boxSizing: "border-box",
    background: colors.background,
    overflow: "hidden",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    width: "100%",
  },
  logo: {
    color: colors.mainLight,
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
    color: colors.text,
  },
  subtitle: {
    marginBottom: "20px",
    color: colors.textLight,
    fontSize: "14px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    fontSize: "14px",
    fontWeight: 500,
    color: colors.text,
  },
  input: {
    width: "100%",
    marginTop: "6px",
    padding: "10px 12px",
    borderRadius: "8px",
    border: `1px solid ${colors.border}`,
    color: colors.text,
    background: colors.inputBG,
    fontSize: "14px",
    boxSizing: "border-box",
  },
  button: {
    marginTop: "12px",
    padding: "12px",
    background: colors.primary,
    color: colors.textButton,
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
    width: "100%",
  },
  error: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    background: "#FDECEA",
    color: "#B42318",
    fontSize: "14px",
    textAlign: "center",

    wordBreak: "break-word",
    overflowWrap: "anywhere",
  },

  footer: {
    display: "flex",
    gap: "4px",
    fontSize: "14px",
    alignItems: "center",
    color: colors.text,
  },
  primaryButton: {
    background: "none",
    border: "none",
    color: colors.primary,
    cursor: "pointer",
    padding: 0,
    fontSize: "14px",
    fontWeight: 500,
  },
};
