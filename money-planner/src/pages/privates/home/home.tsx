

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8">
        <span className="mb-3 text-sm font-medium text-emerald-400">
          Personal Finance Planner
        </span>

        <h1 className="max-w-4xl text-6xl font-bold leading-tight">
          Planeje seu dinheiro.
          <br />
          <span className="text-zinc-400">
            Simule o seu futuro financeiro.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-zinc-500">
          Organize contas, receitas, despesas e investimentos em um único lugar.
          Faça projeções para qualquer data e descubra quanto você terá no
          futuro.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200">
            Começar
          </button>

          <button className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold transition hover:border-zinc-500">
            Saiba mais
          </button>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-2 text-lg font-semibold">
              📅 Planner
            </h3>

            <p className="text-sm text-zinc-500">
              Cadastre salários, assinaturas, financiamentos e qualquer evento
              financeiro recorrente.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-2 text-lg font-semibold">
              📖 Ledger
            </h3>

            <p className="text-sm text-zinc-500">
              Acompanhe o histórico de transações e compare o planejado com o
              realizado.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-2 text-lg font-semibold">
              📈 Forecast
            </h3>

            <p className="text-sm text-zinc-500">
              Simule diferentes cenários e veja quanto dinheiro terá nos
              próximos meses ou anos.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}