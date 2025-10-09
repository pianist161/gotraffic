import Link from 'next/link';
import React from 'react';
import { Icon } from '@iconify/react';
import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
  return (
    <>
      <section className="bg-home-half" id="home">
        <div className="home-center">
          <div className="home-desc-center">
            <Container>
              <Row>
                <Col lg={9}>
                  <h5 className="home-small-title text-uppercase mb-4">We create the web</h5>
                  <h2 className="home-title mb-4">Create amazing designs with Larix template</h2>
                  <p className="home-desc">
                    Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet
                    aliquam vehicula tempor auctor curabitur pede aenean ornare.
                  </p>
                  <div className="pt-4">
                    <Link href="" className="btn btn-custom">
                      View More <Icon icon="mdi-arrow-right" className="ms-2" />
                    </Link>
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
