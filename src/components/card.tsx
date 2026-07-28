import React from "react";
import { colors } from "@/styles/colors";

export function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{...styles.card, ...style}}>{children}</div>;
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: colors.cardBG,
    border: `1px solid ${colors.border}`,
    borderRadius: 16,
    padding: 20,
    display: "flex",
    flexDirection: "column",
  },
};
