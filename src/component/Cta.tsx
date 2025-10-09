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
              <h3 className="text-center">Ready to start your next web project now?</h3>
              <p className="cta-desc text-center mt-3">
                When a good idea comes, you know, part of my job is to move it around, just see what
                people think, get people talking about it.
              </p>
              <div className="text-center mt-4">
                <Link href="" className="btn btn-custom">
                  Get Started
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
