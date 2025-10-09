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
    title: 'Founder',
    name: 'Willimore Wilson',
    des: `"Their separate existence is a myth. For science music sport etc Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language"`,
  },
  {
    img: client122,
    title: 'Ceo',
    name: 'Charley Brown',
    des: `"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a normal of letters, as opposed to using making it look like readable English."`,
  },
  {
    img: client133,
    title: 'Manager',
    name: 'Norden Sophie',
    des: `"Looking for an event WordPress theme? Look no further—we’ve got pre-built websites for over 20 different types of events: birthday party, wedding, course launch, marketing event, conference, seasonal event."`,
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
              <h4 className="title-heading text-uppercase">Testimonial</h4>
              <p className="title-desc text-muted mt-3">
                We craft digital, graphic and dimensional thinking, to create category leading brand
                experiences that have meaning and add a value.
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
