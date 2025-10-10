'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import client111 from '@/assets/images/client/111.jpg';
import client122 from '@/assets/images/client/122.jpg';
import client133 from '@/assets/images/client/133.jpg';

type clientType = {
  img: StaticImageData;
  title: string;
  name: string;
  des: string;
};

const clientData: clientType[] = [
  {
    img: client111,
    title: 'Transportation Director',
    name: 'Michael Rodriguez',
    des: `"Go Traffic's expertise in adaptive signal control has dramatically improved traffic flow throughout our city. Their team's professionalism and innovative approach to traffic management exceeded our expectations. We've seen a 30% reduction in congestion during peak hours."`,
  },
  {
    img: client122,
    title: 'City Traffic Engineer',
    name: 'Sarah Thompson',
    des: `"Working with Go Traffic on our ITS deployment project was exceptional. Their technical knowledge and attention to detail ensured a smooth implementation. The signal timing optimization they provided has significantly improved our network efficiency."`,
  },
  {
    img: client133,
    title: 'Project Manager',
    name: 'David Chen',
    des: `"Go Traffic delivered comprehensive traffic engineering studies that were instrumental in our PD&E project approval. Their data-driven approach and clear documentation made the entire process seamless. Highly recommend their services for any transportation project."`,
  },
];

const Client = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="section" id="client">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="text-center">
              <h4 className="title-heading text-uppercase">Client Testimonials</h4>
              <p className="title-desc text-muted mt-3">
                Trusted by government agencies and private clients across South Florida. 
                Our commitment to excellence and innovative solutions has earned us recognition as a leading traffic engineering firm.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col lg={8}>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              controls={true}
              indicators={true}
              interval={3000}
              pause="hover"
              touch={true}
              fade={false}
              id="owl-demo"
              className="owl-carousel owl-theme"
            >
              {clientData.map((item, idx) => (
                <Carousel.Item key={idx}>
                  <div className="testi-box text-center mt-4">
                    <div className="testi-content">
                      <p className="user-review text-center mb-0">{item.des}</p>
                    </div>
                    <div className="mt-4">
                      <Image
                        src={item.img}
                        alt={item.name}
                        className="img-fluid rounded-circle testi-user mx-auto d-block"
                      />
                    </div>
                    <div className="img-post text-center">
                      <p className="testi-patients text-muted mb-1 mt-3">{item.title}</p>
                      <h5 className="testi-client-name">{item.name}</h5>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Client;
