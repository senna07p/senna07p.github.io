import styles from "./Contact.module.css"
import banner from "./banner.jpg"

function Contact() {
    return (
        <>
            <div className={styles.main}>
                <section>
                    <img src={banner}></img>
                    <span>&copy; Foto de Darina Belonogova - Pexels</span>
                </section>
                <div>
                    <h1>Contate-me</h1>
                    <p><strong>Todas as mensagens</strong> serão respondidas.<br></br>Não se preocupe com <strong>spam</strong>.</p>
                    <form action="">
                        <input type="email" id="" placeholder="E-mail" />
                        <input type="text" placeholder="Mensagem" />
                        <button type="submite">Enviar mensagem</button>
                    </form>
                    <ul>
                        <h3>E-mail</h3>
                        <li>matheusynw3@gmail.com</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Contact;