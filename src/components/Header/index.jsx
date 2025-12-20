import styles from "./Header.module.css"

function Header() {
    return (
        <>
            <header className={styles.header}>
                <div>
                    <button>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <span>@senna07p</span>
                    <hr></hr>
                    <nav>
                        <ul>
                            <li><a href="/">Início</a></li>
                            <li><a href="/">Sobre</a></li>
                            <li><a href="/">Projetos</a></li>
                            <li><a href="/">Contatos</a></li>
                        </ul>
                    </nav>
                </div>
                <section>
                    <a href="https://github.com/senna07p" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </section>
            </header>
        </>

    )
}

export default Header;