import { ReactComponent as GitHubIcons } from "assets/img/github.svg";
import "./styles.css";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="rtamovie-nav-content">
          <h1>RTAmovie</h1>
          <a href="https://github.com/RTAcps">
            <div className="rtamovie-contact-container">
              <GitHubIcons />
              <p className="rtamovie-contact-link">/RTAcps</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
