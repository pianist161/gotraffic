import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Icon } from '@iconify/react';

type welcomeType = {
  icon: string;
  title: string;
  des: string;
};


const WelcomeData: welcomeType[] = [
  {
    icon: 'mdi-target',
    title: 'Mission',
    des: 'At Go Traffic LLC, our mission is to enhance transportation systems through innovative, data-driven engineering solutions that prioritize safety, efficiency, and mobility. By leveraging advanced technology and fostering collaboration with clients and communities, we deliver customized traffic management strategies that create smarter, safer, and more sustainable transportation networks across South Florida and beyond.',
  },
  {
    icon: 'mdi-eye',
    title: 'Vision',
    des: 'Our vision is to be a recognized leader in intelligent transportation engineering, driving the evolution of safe, efficient, and connected mobility systems. We aspire to shape the future of transportation by integrating innovation, sustainability, and community partnership, setting new standards for how people and goods move through growing urban environments.',
  },
  {
    icon: 'mdi-bullseye-arrow',
    title: 'Goal',
    des: 'The goal of Go Traffic LLC is to advance transportation infrastructure by applying cutting-edge technology and innovative methodologies to deliver exceptional traffic management solutions tailored to each project\'s unique needs. We strive to optimize mobility, reduce congestion, and enhance roadway safety, transforming the transportation landscape of South Florida and beyond through engineering excellence and forward-thinking design.',
  },
];

const Welcome = () => {
  return (
    <>
      <section className="section mt-2" id="service">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center">
                <h4 className="title-heading">About Go Traffic LLC</h4>
                <p className="title-desc text-muted mt-3">
                  An innovation-driven traffic engineering company based in South Florida. We leverage 
                  emerging technology and advanced methodologies to provide exceptional traffic management 
                  solutions that enhance safety, efficiency, and mobility.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="pt-5">
            {WelcomeData.map((item, idx) => (
              <Col key={idx} lg={4}>
                <div className="features-box mt-4">
                  <div className="d-flex">
                    <div className="features-icon d-flex justify-content-center align-items-center text-center flex-shrink-0 ">
                      <Icon icon={item.icon} />
                    </div>
                    <div className="flex-grow-1 ms-4">
                      <h5 className="mt-0 f-19">{item.title}</h5>
                      <p className="text-muted">{item.des}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Welcome;
