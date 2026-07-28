import { MainHeader } from "@/components/main-header/main-header";
import { colors } from "@/styles/colors";
import type { CSSProperties } from "react";
import { Outlet } from "react-router-dom";

export default function PrivateLayout() {
  return (
    <div style={styles.app}>
      <MainHeader />
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
    scrollbarColor: `${colors.cardBG} ${colors.scrollbarBG}`,
  },
  content: {    
    padding: 20,
    flex: 1,
    overflowY: "auto",
  },
};