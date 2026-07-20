import type { CSSProperties } from "react";
import { colors } from "@/styles/colors";


interface Props {
    title:string;
    value:string;
}


export function SummaryCard({title,value}:Props){

    return (
        <div style={styles.card}>
            <span style={styles.title}>
                {title}
            </span>

            <strong style={styles.value}>
                {value}
            </strong>
        </div>
    );
}


const styles:Record<string,CSSProperties> = {

    card:{
        background: colors.cardBG,
        border:`1px solid ${colors.border}`,
        borderRadius:16,
        padding:20,
        display:"flex",
        flexDirection:"column",
        gap:8
    },


    title:{
        color:colors.textLight,
        fontSize:14
    },


    value:{
        color:colors.text,
        fontSize:24
    }

}