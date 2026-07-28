import { colors } from "@/styles/colors";
import type { CSSProperties } from "react";
import { router } from "@/router";
import { auth } from "@/services/auth";
import Logo from "@/assets/logo.svg?react";

export function MainHeader() {
  function handleLogout() {
    auth.signOut();
    router.navigate("/");
  }

  const handleNavigationToHome = () => {
    router.navigate("/home");
  };

  const handleNavigationToLaunches = () => {
    router.navigate("/event");
  }

  return (
    <div style={styles.main}>
  <header style={styles.header}>
    <div style={styles.topRow}>
      <div style={styles.brand}>
        <Logo
          width={42}
          height={42}
          style={{ cursor: "pointer" }}
          onClick={handleNavigationToHome}
        />

        <span style={styles.logo}>
          MONEY MANAGER
        </span>
      </div>

      <button style={styles.logoutButton} onClick={handleLogout}>
        Sair
      </button>
    </div>
  </header>

  <nav style={styles.subHeader}>
    <div style={styles.subContent}>
      <div style={styles.navigation}>
        <button style={styles.navButton} onClick={handleNavigationToHome}>
          Início
        </button>
        <button style={styles.navButton} onClick={handleNavigationToLaunches}>
          Lançamentos
        </button>
      </div>

      <div style={styles.total}>
        Total: <strong>R$ 0,00</strong>
      </div>
    </div>
  </nav>
</div>
  );
}

const styles: Record<string, CSSProperties> = {
  main: {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
},

header: {
  width: "100%",
  background: colors.cardBG,
  borderBottom: `1px solid ${colors.border}`,
  borderRadius: "0 0 36px 36px",
  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
},

topRow: {
  height: 90,
  padding: "0 32px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
},

brand: {
  display: "flex",
  alignItems: "center",
  gap: 14,
},

logo: {
  color: colors.mainLight,
  fontSize: 20,
  fontWeight: 800,
  letterSpacing: 1,
  cursor: "pointer",
},

subHeader: {
  width: "92%",
  marginTop: 10,
  background: colors.cardBG,
  border: `1px solid ${colors.border}`,
  borderRadius: "0 0 28px 28px",
},

subContent: {
  height: 54,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 22px",
},

navigation: {
  display: "flex",
  gap: 18,
},

navButton: {
  background: "transparent",
  border: "none",
  color: colors.text,
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
  padding: "4px 0",
},

total: {
  color: colors.text,
  fontSize: 16,
  fontWeight: 600,
},

logoutButton: {
  background: "transparent",
  color: colors.text,
  border: `1px solid ${colors.border}`,
  borderRadius: 10,
  padding: "10px 18px",
  cursor: "pointer",
  fontWeight: 600,
},
};
