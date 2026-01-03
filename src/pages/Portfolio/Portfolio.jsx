import styles from "./Portfolio.module.css"
import banner from "./grey.png"

export default function Resumo() {
  return (
    <>
      <div className={styles.containerMain}>
        <article>
          <h1>My Most Recent Projects</h1>
          <p>
            <strong>Main projects developed integrating</strong> artificial intelligence, digital marketing, or programming.
          </p>
        </article>
        <section>
          <a href="URL_PROJETO_1" target="_blank">
            <div>
              <img src={banner} alt="Project 1" />
              <h2>Project 1</h2>
              <p>Full-stack software developer and digital marketing technician.</p>
            </div>
          </a>
          <a href="URL_PROJETO_2" target="_blank">
            <div>
              <img src={banner} alt="Project 2" />
              <h2>Project 2</h2>
              <p>Full-stack software developer and digital marketing technician.</p>
            </div>
          </a>

          <a href="URL_PROJETO_3" target="_blank">
            <div>
              <img src={banner} alt="Project 3" />
              <h2>Project 3</h2>
              <p>Full-stack software developer and digital marketing technician.</p>
            </div>
          </a>
          <a href="URL_PROJETO_1" target="_blank">
            <div className={styles.ocult}>
              <img src={banner} alt="Project 1" />
              <h2>Project 1</h2>
              <p>Full-stack software developer and digital marketing technician.</p>
            </div>
          </a>
        </section>
      </div>
    </>
  );
};
