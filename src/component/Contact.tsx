import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <>
      <section className="section" id="contact">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="contact-head text-center">
                <h4 className="title-heading text-uppercase">Contact us</h4>
                <p className="title-desc text-muted mt-3">
                  Find the perfect business template for any type of business size. Browse be
                  websites created for small businesses, such as online service providers.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-4 vertical-content">
            <Col lg={12}>
              <Row className="mt-5">
                <Col lg={4}>
                  <div className="contact-info">
                    <div className="mt-3">
                      <h6 className="text-muted">Email Address</h6>
                      <p>Example@abc.com</p>
                    </div>
                    <div className="mt-4">
                      <h6 className="text-muted">Phone number</h6>
                      <p>+1-903-929-5705 , +1-631-705-0194</p>
                    </div>
                    <div className="mt-4">
                      <h6 className="text-muted">Office Address</h6>
                      <p>
                        3961 Melville Street <br />
                        Bruceton, TN 38317
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={8}>
                  <div className="custom-form">
                    <form method="post" className="contact-form" name="myForm" id="myForm">
                      <span id="error-msg" />
                      <Row className="g-3">
                        <Col lg={6}>
                          <div className="form-group">
                            <input
                              name="name"
                              id="name"
                              type="text"
                              className="form-control"
                              placeholder="Your name..."
                            />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="form-group">
                            <input
                              name="email"
                              id="email"
                              type="email"
                              className="form-control"
                              placeholder="Your email..."
                            />
                          </div>
                        </Col>
                        <Col lg={12}>
                          <div className="form-group">
                            <input
                              name="text"
                              id="sub"
                              type="text"
                              className="form-control"
                              placeholder="Your subject..."
                            />
                          </div>
                        </Col>
                        <Col lg={12}>
                          <div className="form-group">
                            <textarea
                              name="comments"
                              id="comments"
                              rows={4}
                              className="form-control"
                              placeholder="Your message..."
                              defaultValue={''}
                            />
                          </div>
                        </Col>
                        <Col lg={12}>
                          <input
                            type="submit"
                            id="submit"
                            name="send"
                            className="submitBnt btn btn-custom"
                            defaultValue="Send Message"
                          />
                          <div id="simple-msg" />
                        </Col>
                      </Row>
                    </form>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
