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
                  We're Here to Streamline Your Project and Deliver Results Efficiently
                </p>
                <p className="text-muted mt-3">
                  At Go Traffic LLC, we specialize in optimizing every stage of your project to ensure it runs 
                  smoothly, efficiently, and on schedule. Our experienced team combines innovative strategies 
                  with cutting-edge technology to enhance traffic management and minimize delays.
                </p>
                <p className="text-muted">
                  We believe in clear communication and collaboration, working closely with our clients to 
                  understand their unique goals and challenges. By leveraging data-driven insights and industry 
                  best practices, we consistently deliver high-quality, cost-effective results—on time and within 
                  budget.
                </p>
                <p className="text-muted">
                  Our commitment to excellence and reliability means you can trust us to not only meet but 
                  exceed your expectations, paving the way for a successful and sustainable project outcome.
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
                      <h6 className="text-muted">Company</h6>
                      <p>Go Traffic, LLC</p>
                    </div>
                    <div className="mt-4">
                      <h6 className="text-muted">Mobile</h6>
                      <p>+1 (305) 495-6454</p>
                    </div>
                    <div className="mt-4">
                      <h6 className="text-muted">Office Address</h6>
                      <p>
                        5797 NW 48th Ct <br />
                        Coral Springs, FL 33067
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
