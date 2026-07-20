import { colors } from "@/styles/colors"
import { FaSearch } from "react-icons/fa"

export function Search(title: string) {
    return (
        <section style={styles.section}>
            <h2 style={styles.sectionTitle}><FaSearch /> {title} </h2>
            <div style={styles.searchBox}>
                <input placeholder="Nome, SUS, CPF..." style={styles.input} />
                <input placeholder="Tipo de observação..." style={styles.input} />
                <button
                    style={styles.searchBtn}
                    onMouseDown={(e) => e.preventDefault()}
                    onFocus={(e) => e.currentTarget.style.outline = "none"}
                >Pesquisar</button>
            </div>
        </section>
    )
}

const styles: Record<string, React.CSSProperties> = {
    section: {
        marginBottom: 40,
    },
    sectionTitle: {
        marginBottom: 15,
        display: "flex",
        alignItems: "center",
        gap: 10,
        color: colors.primaryDark,
        fontWeight: 700,
    },
}