'use client'
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeBg from '@/assets/images/home/home-bg.jpg';
import HomeBg2 from '@/assets/images/home/home-bg-2.jpg';
import { StaticImageData } from 'next/image';
import useBootstrap from '@/hooks/useBootstrap';

type HeroBgImage = StaticImageData;

const heroBgImages: HeroBgImage[] = [HomeBg2, HomeBg];

const Hero = () => {
  useBootstrap();
  return (
    <section className="home-slider" id="home">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {heroBgImages.map((bg, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
              style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="home-center">
                <div className="home-desc-center">
                  <Container>
                    <Row>
                      <Col lg={12}>
                        <div className="text-center">
                          <h5 className="home-small-title text-uppercase text-muted mb-4">
                            Awesome Design
                          </h5>
                          <h2 className="home-title mb-4">
                            We love make things amazing and simple
                          </h2>
                          <p className="home-desc text-muted mx-auto">
                            Maecenas class semper sollicitudin lectus lorem iaculis imperdiet
                            aliquam vehicula tempor auctor curabitur pede aenean ornare.
                          </p>
                          <div className="text-center pt-4">
                            <Link href="#contact" className="btn btn-custom me-2">
                              Contact Us
                            </Link>
                            <Link href="#get-started" className="btn btn-custom-white">
                              Get Started
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </Link>
        <Link
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
