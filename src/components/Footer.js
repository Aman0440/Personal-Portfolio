import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/portfolio-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col sm={6}>
            <img src={logo} alt="Portfolio Logo" />
          </Col>

          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/amanshaikh7864/">
                <img src={navIcon1} alt="linkedin" />
              </a>

              <a href="https://www.facebook.com/share/1Da5iAizMH/">
                <img src={navIcon2} alt="facebook" />
              </a>

              <a href="https://www.instagram.com/_amanshaikh_04/">
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>

            <p>Copyright 2026. All Rights Reserved</p>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};