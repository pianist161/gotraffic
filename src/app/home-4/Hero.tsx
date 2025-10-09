import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import macbook from '@/assets/images/home/macbook.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <section className="home-prestion" id="home">
        <div className="home-center">
          <div className="home-desc-center">
            <Container>
              <Row className="justify-content-center">
                <Col lg={8} className="text-center">
                  <h4 className="mt-5 pt-5 home-title">
                    Get things done with this beautiful SaaS app
                  </h4>
                  <div>
                    <Image src={macbook} alt="" className="img-fluid center-block home-dashboard" />
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
