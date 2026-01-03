import styles from "./Resumo.module.css"

export default function Resumo() {
    return (
      <>
        <div className={styles.containerDetails}>
          <article>
            <h1>Hi, I'm Matheus Sena.</h1>
            <p>
              <strong>Full-stack software developer</strong> and{" "}
              <strong>digital marketing technician</strong>.
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/seuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/seuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </article>
          <section>
            <hr></hr>
            <div>
              <h2>Software Developer</h2>
              <p>
                I am a <strong>full-stack software developer</strong>,
                specialized in creating{" "}
                <strong>innovative technological applications</strong>,
                combining <strong>advanced digital marketing strategies</strong>{" "}
                with <strong>artificial intelligence solutions</strong> to
                optimize performance, user experience, and business results.
              </p>
              <h2>Digital Marketing</h2>
              <p>
                My high school, offered by SEDUC-PI, included a{" "}
                <strong>Digital Marketing technical course</strong>, which
                prepared me for the market with skills in <strong>SEO</strong>,{" "}
                <strong>data analysis</strong>,{" "}
                <strong>content creation</strong>,{" "}
                <strong>consumer behavior</strong>, and other essential
                competencies.
              </p>
            </div>
          </section>
          <ul>
            <li>
              <a href="">
                <button>Download CV</button>
              </a>
            </li>
            <li>
              <a href="">
                <button>About More</button>
              </a>
            </li>
          </ul>
        </div>
      </>
    );
};
