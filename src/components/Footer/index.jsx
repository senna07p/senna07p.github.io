import styles from "./Footer.module.css"

function Footer() {
    return (
        <>
            <div className={styles.main}>
                <section>
                    <p>&copy; 2025, Todos os Direitos Reservados.<br></br>Desenvolvido por 👍 @senna07p.</p>
                </section>
                <button>
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
            </div>

        </>
    )
}

export default Footer;