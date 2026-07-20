import { colors } from "@/styles/colors";
import type { CSSProperties } from "react";
import { router } from "@/router";
import { auth } from "@/services/auth";
import Logo from "@/assets/logo.svg?react";
import { customStyle } from "@/styles/custom-style";


export function MainHeader() {
  function handleLogout() {
    auth.signOut();
    router.navigate("/");
  }

  const handleNavigationToHome = () => {
    router.navigate("/home");
  };



  return (
    <header style={styles.header}>
      <div style={styles.topRow}>
        <div style={{...customStyle.logo, ...styles.logo}}>MM</div>

        <Logo
          width={40}
          height={40}
          style={{...customStyle.logo}}
          onClick={handleNavigationToHome}
        />

        <button style={styles.logoutButton} onClick={handleLogout}>
          Sair
        </button>
      </div>

      {/* <div style={styles.shortcutsWrapper}>
        <div style={styles.shortcutsScroll}>
          <IconButton
            icon={<FaHome />}
            label="Página Inicial"
            onClick={handleNavigationToHome}
          />
        </div>
      </div> */}
    </header>
  );
}

const styles: Record<string, CSSProperties> = {
  header: {
    width: "100%",
    borderBottom: `1px solid ${colors.border}`,
    background: colors.cardBG,
    display: "flex",
    flexDirection: "column",
    borderRadius: "0 0 15px 15px",
  },
  topRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 20px",
  },
  logo: {
    fontSize: 20,
    fontWeight: 800,
    letterSpacing: 1,
  },

  logoutButton: {
    backgroundColor: colors.danger,
    border: "none",
    padding: "8px 14px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
  },
  shortcutsWrapper: {
    padding: "10px 0",
  },
  shortcutsScroll: {
    display: "flex",
    gap: 12,
    padding: "0 16px",
    overflowX: "auto",
    scrollBehavior: "smooth",
  },
};
