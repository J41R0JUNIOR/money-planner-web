import React from "react";
import { router } from "@/router";
import { signUpAction } from "./signup.action";
import { customStyle } from "@/styles/custom-style";
import Logo from "@/assets/logo.svg?react";
import { handleLoading } from "@/util/handleLoading";
import { Card } from "@/components/card";

export default function SignUpPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  async function handleSignUp() {
    handleLoading(setError, setLoading, () => signUpAction(email, password, confirmPassword, name));
  }

  function handleSignIn() {
    router.navigate("/");
  }

  return (
    <Card style={customStyle.authContainer}>
      <form
        style={customStyle.form}
        onSubmit={(e) => e.preventDefault()}
        autoComplete="on"
      >
        <Logo
          width={100}
          height={100}
          style={customStyle.logo}
        />

        <label style={customStyle.label}>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            style={customStyle.input}
            placeholder="Digite seu email"
            autoComplete="email"
          />
        </label>

        <label style={customStyle.label}>
          Nome
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            style={customStyle.input}
            placeholder="Digite seu nome"
            autoComplete="name"
          />
        </label>

        <label style={customStyle.label}>
          Senha
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            style={customStyle.input}
            placeholder="Digite sua senha"
            autoComplete="new-password"
          />
        </label>

        <label style={customStyle.label}>
          Confirmar senha
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
            style={customStyle.input}
            placeholder="Confirme sua senha"
            autoComplete="new-password"
          />
        </label>

        {error && <div style={customStyle.error}>{error}</div>}

        <button
          type="button"
          style={{ ...customStyle.button, opacity: loading ? 0.7 : 1 }}
          onClick={handleSignUp}
          disabled={loading}
        >
          {loading ? "Criando conta..." : "Cadastrar"}
        </button>

        <div style={customStyle.footer}>
          <span>Já tem uma conta?</span>
          <button
            type="button"
            style={customStyle.primaryButton}
            onClick={handleSignIn}
          >
            Entrar
          </button>
        </div>
      </form>
    </Card>
  );
}