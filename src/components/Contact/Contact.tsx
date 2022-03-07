import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contato">
      <header>
        <h2>Entre en contacto conmigo</h2>
        <p>Si desea conversar conmigo no dude en dejar su mensaje.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:albertofranjul@gmail.com">
            albertofranjul@hotmail.com
          </a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+5531981213843">(1) 809-607-1504</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
