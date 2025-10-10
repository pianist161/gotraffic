import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Cta = () => {
  return (
    <>
      <section className="section bg-cta">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h3 className="text-center">Ready to enhance your transportation system?</h3>
              <p className="cta-desc text-center mt-3">
                We're here to streamline your project and deliver results efficiently. Our experienced 
                team employs innovative strategies and cutting-edge technologies to enhance traffic 
                management and minimize delays.
              </p>
              <div className="text-center mt-4">
                <Link href="#contact" className="btn btn-custom">
                  Get Started
                </Link>
                <Link href="#services" className="btn btn-custom-white ms-3">
                  Our Services
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cta;
