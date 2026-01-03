import Resumo from "./pages/Resumo/Resumo.jsx"
import Portfolio from "./pages/Portfolio/Portfolio.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import "./App.css"

function App() {
  return (
    <>
      <header>
        <nav className="container-links">
          <ul className="list-links">
            <li>
              <a href="/resumo">Resumo</a>
            </li>
            <li>
              <a href="/portfolio">Portfólio</a>
            </li>
            <li>
              <a href="/contatos">Contatos</a>
            </li>
          </ul>
        </nav>
      </header>
      <Resumo />
      <Portfolio />
      <Contact />
      <footer>
        <div className="container-bottom">
          <span className="copyright-text">
            &copy; No Copyright | Developed<br></br>by 🤘 Matheus Sena, 2025.
          </span>
          <ul className="list-links">
            <li>
              <a href="/termos">Terms</a>
            </li>
            <li>
              <a href="/privacidade">Privacy</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
