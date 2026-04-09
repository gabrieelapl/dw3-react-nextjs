// importando o css modules (css externo)
import styles from "@/components/Semaforo/Semaforo.module.css"

const Semaforo = () => {
    return(
        <>
            {/* Container */}
            {/* CSS Inline */}
            <div style={
                {
                    height: "100vh",
                    display: "flex",
                    // flex-direction
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#f0f0f0",
                    marginTop: "30px"
                }
            }>
                <h3 style={{marginTop: "30px"}}>
                    Semáforo em React
                </h3>
                <br />
                {/* Luzes do semáforo */}
                <div className={styles.luz}></div>
                <div className={styles.luz}></div>
                <div className={styles.luz}></div>
            </div>
        </>
    )
}
export default Semaforo;