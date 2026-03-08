import { Row, Col } from "react-bootstrap";

export const MailchimpForm = () => {
  const mailchimpSignupUrl =
    "https://us21.list-manage.com/subscribe?u=8f4d2a1b6c7e9f0a123456789&id=4b7c8d9e10";

  return (
    <div className="newsletter-bx wow slideInUp">
      <Row className="align-items-center">
        <Col lg={12} md={6} xl={5}>
          <h3>
            Subscribe to our Newsletter
            <br />
            & Never miss latest updates
          </h3>
        </Col>

        <Col md={6} xl={7}>
          <div className="new-email-bx">
            <a href={mailchimpSignupUrl} target="_blank" rel="noreferrer">
              <button type="button">Subscribe</button>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};