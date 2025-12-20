import styles from "./About.module.css"
import banner from "./banner.jpg"

function About() {
    return (
        <>
            <div className={styles.main}>
                <div>
                    <hr></hr>
                    <p>Minhas especializações</p>
                </div>
                <section>
                    <article>
                        <h1>Marketing Digital</h1>
                        <p>Possuo <strong>formação técnica em Marketing Digital</strong>, com duração de <strong>três anos</strong>, realizada de forma integrada ao <strong>Ensino Médio</strong> pela <strong>SEDUC-PI</strong>.</p>
                    </article>
                    <article>
                        <div>
                            <h1>Gestão Empresarial</h1>
                            <p>Realizei <strong>curso presencial de Gestão Empresarial</strong>, no qual desenvolvi competências em <strong>administração</strong>, <strong>marketing digital aplicado a empresas</strong>, <strong>finanças</strong> e <strong>recursos humanos</strong>, adquirindo <strong>habilidades valiosas em gestão empresarial</strong>.</p>
                        </div>
                    </article>
                </section>
            </div>
        </>
    )
}

export default About;