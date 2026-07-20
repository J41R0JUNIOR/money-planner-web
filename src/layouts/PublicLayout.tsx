import { colors } from "@/styles/colors";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div style={styles.app}>
      <Outlet />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  app: {
    height: "100dvh",
    width: "100vw",
    background: colors.background,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};