import styles from "./Contact.module.css"
import linkedin from "./linkedin.svg"
import github from "./github.svg"
import email from "./email.svg"

export default function Contact() {
  return (
    <div className={styles.container}>
      <article>
        <h1>Contact Me</h1>
        <p>
          Below are some social networks and ways to get in touch with me:
        </p>
      </article>
      <ul>
        <li>
          <a href="">
            <img src={linkedin} alt="" />
            <span>@senna07p</span>
          </a>
        </li>
        <hr />
        <li>
          <a href="">
            <img src={github} alt="" />
            <span>@senna07p</span>
          </a>
        </li>
        <hr />
        <li>
          <a href="">
            <img src={email} alt="" />
            <span>matheusynw3@gmail.com</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
