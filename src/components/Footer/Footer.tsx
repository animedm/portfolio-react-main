import { Container } from "./styles";

import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import discordIcon from "../../assets/discord.png";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>F</span>
        <span>Franjul</span>
      </a>
      <div>
        <p>
          Vuelva pronto a mi mundo.
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/francisco-franjul/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="https://github.com/animedm" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/albertofranjulr/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a href="" target="_blank" rel="noreferrer">
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
    </Container>
  );
}
