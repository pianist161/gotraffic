import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
  return (
    <>
      <section className="section bg-home bg-home-2" id="home">
        <div className="home-center">
          <div className="home-desc-center">
            <Container>
              <Row>
                <Col lg={12} className="text-center">
                  <div className="mb-4">
                    <i data-feather="layers" className="text-custom" />
                  </div>
                  <h5 className="home-small-title text-uppercase text-muted mb-4">
                    Awesome Design
                  </h5>
                  <h2 className="home-title">Starting with Go Traffic is easier than anything</h2>
                  <p className="home-desc mx-auto mt-3">
                    Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet
                    aliquam vehicula tempor auctor curabitur pede aenean ornare.
                  </p>
                  <div className="text-center subcribe-form mt-5">
                    <form action="">
                      <input type="text" placeholder="E-mail" />
                      <button type="submit" className="btn btn-custom">
                        Subcribe
                      </button>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
