import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Icon } from '@iconify/react';

const Hero = () => {
  return (
    <>
      <section className="section bg-home" id="home">
        <div className="home-center">
          <div className="home-desc-center">
            <Container>
              <Row className="vertical-content">
                <Col lg={7} className="mt-3">
                  <h5 className="home-small-title text-uppercase text-muted mb-4">
                    Awesome Design
                  </h5>
                  <h2 className="home-title mb-4">
                    Digital solutions that engage, inspire and make you think
                  </h2>
                  <p className="home-desc mb-50">
                    Our users are impatient. They're probably distracted too. Keep it simple and
                    beautiful, fun and functional. Clean aesthetics supported by a strong concept is
                    what we stand for.
                  </p>
                  <div className="pt-4">
                    <Link href="" className="btn btn-custom me-2">
                      Get Started
                    </Link>
                    <Link href="" className="btn btn-custom-white">
                      View More <Icon icon="mdi-arrow-right" className="ms-2" />
                    </Link>
                  </div>
                </Col>
                <Col lg={5} className="mt-3">
                  <div className="home-registration-form bg-white p-5">
                    <h5 className="form-title mb-4 text-center fw-bold">
                      We are offering 14 days free trial
                    </h5>
                    <form className="registration-form">
                      <label className="text-muted mb-2">First Name</label>
                      <input
                        type="text"
                        id="exampleInputName1"
                        className="form-control mb-4 registration-input-box"
                      />
                      <label className="text-muted mb-2">Last Name</label>
                      <input
                        type="text"
                        id="exampleInputName2"
                        className="form-control mb-4 registration-input-box"
                      />
                      <label className="text-muted mb-2">Email</label>
                      <input
                        type="email"
                        id="exampleInputEmail1"
                        className="form-control mb-4 registration-input-box"
                      />
                      <button className="btn btn-custom w-100">Free Trial</button>
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
