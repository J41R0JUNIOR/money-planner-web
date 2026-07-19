import { colors } from "@/styles/colors";
import type { CSSProperties } from "react";
import { Outlet } from "react-router-dom";

export default function PrivateLayout() {
  return (
    <div style={styles.app}>
      <main style={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  app: {
    height: "100dvh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    background: colors.background,
    overflow: "hidden",
    scrollbarColor: `${colors.primaryDark} ${colors.scrollbarBG}`,
  },
  content: {
    flex: 1,
    width: "100%",
    overflowY: "auto",
  },
};