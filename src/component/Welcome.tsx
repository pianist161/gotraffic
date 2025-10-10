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
    icon: 'mdi-traffic-light',
    title: 'Traffic Signal Systems',
    des: 'Comprehensive signal timing plans, optimization, and adaptive control systems for enhanced traffic flow and safety.',
  },
  {
    icon: 'mdi-car-multiple',
    title: 'ITS Project Support',
    des: 'Intelligent Transportation Systems deployment, system engineering, and advanced traffic management solutions.',
  },
  {
    icon: 'mdi-chart-line',
    title: 'Traffic Engineering Studies',
    des: 'Data-driven analysis, simulation modeling, and performance evaluation for optimal transportation solutions.',
  },
];

const WelcomeData2: welcomeType[] = [
  {
    icon: 'mdi-shield-check',
    title: 'Safety & Efficiency',
    des: 'Advanced methodologies and cutting-edge technology to enhance safety, efficiency, and mobility.',
  },
  {
    icon: 'mdi-cog',
    title: 'Innovation-Driven',
    des: 'Leveraging emerging technology and data-driven methodologies for customized traffic management strategies.',
  },
  {
    icon: 'mdi-handshake',
    title: 'Trusted Partnership',
    des: 'Dedicated to transforming transportation landscape through collaboration and community engagement.',
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
          <Row className="pt-3">
            {WelcomeData2.map((item, idx) => (
              <Col key={idx} lg={4}>
                <div className="features-box mt-4">
                  <div className="d-flex">
                    <div className="features-icon d-flex justify-content-center align-items-center text-center flex-shrink-0">
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
