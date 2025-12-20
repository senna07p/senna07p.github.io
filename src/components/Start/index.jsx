import styles from "./Start.module.css"
import banner from "./banner.png"

function Start() {
    return (
        <>
            <div className={styles.main}>
                <div>
                    <section>
                        <article>
                            <span>Olá, eu me chamo <strong>Matheus Sena</strong>!</span>
                            <h1>Desenvolvedor de Software Full-Stack</h1>
                            <p>Sou <strong>desenvolvedor de software</strong> com foco no <strong>back-end</strong>, dedicado ao desenvolvimento de <strong>aplicações modernas</strong>, integrando, de forma harmônica e estratégica, <strong>tecnologias contemporâneas</strong> e <strong>marketing digital</strong>.</p>
                            <button>
                                <a href="/download-cv">
                                    Download CV
                                </a>
                            </button>
                        </article>
                        <ul>
                            <li>
                                <a href="https://github.com/senna07p" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/senna07p" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:matheusynw3@gmail.com">
                                    <i class="fa-solid fa-envelope"></i>
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <img src={banner}></img>
                    </section>
                </div>

            </div>
        </>
    )
}

export default Start;