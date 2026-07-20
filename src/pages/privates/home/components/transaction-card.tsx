import { SummaryCard } from "./summary-card";
import { colors } from "@/styles/colors";
import type { CSSProperties } from "react";


export default function Home(){

    return (
        <main style={styles.page}>

            <h1>
                Planejamento financeiro
            </h1>


            <p style={styles.subtitle}>
                Controle seu dinheiro e projete seu futuro.
            </p>


            <section style={styles.cards}>

                <SummaryCard
                    title="Saldo atual"
                    value="R$ 5.000,00"
                />

                <SummaryCard
                    title="Receitas"
                    value="R$ 7.500,00"
                />


                <SummaryCard
                    title="Despesas"
                    value="R$ 2.500,00"
                />

            </section>



            <section style={styles.planner}>

                <div>
                    <h2>
                        Próximos eventos
                    </h2>

                    <span>
                        Nenhum evento cadastrado
                    </span>
                </div>


                <button>
                    + Adicionar evento
                </button>


            </section>


        </main>
    )
}



const styles:Record<string,CSSProperties>={

    page:{
        padding:30,
        background:colors.background,
        minHeight:"100vh"
    },


    subtitle:{
        color:colors.textLight
    },


    cards:{
        marginTop:30,
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
        gap:20
    },


    planner:{
        marginTop:40,
        background:colors.cardBG,
        border:`1px solid ${colors.border}`,
        borderRadius:16,
        padding:24,
        display:"flex",
        justifyContent:"space-between"
    }

}