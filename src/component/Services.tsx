import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Icon } from '@iconify/react';

type ServiceType = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};

const ServicesData: ServiceType[] = [
  {
    icon: 'mdi-traffic-light',
    title: 'Traffic Signal Systems & Operations',
    description: 'Go Traffic LLC specializes in the design, analysis, and optimization of modern traffic signal systems to improve safety and mobility.',
    features: [
      'Traffic signal retiming and optimization',
      'Signal timing plans for intersections, corridors, diversion routes, and non-recurrent events',
      'Multimodal signal timing (pedestrian, bicycle, and transit integration)',
      'Adaptive Signal Control and ATSPM data analysis',
      'Transit Signal Priority (TSP) and queue-jumper strategies',
      'Railroad and emergency preemption plans',
      'Signal system mode-of-operation assessments',
      'Adaptive signal feasibility studies'
    ]
  },
  {
    icon: 'mdi-cog',
    title: 'Signal Controller Engineering',
    description: 'Our engineers develop, test, and integrate advanced signal controller databases and central systems.',
    features: [
      'Signal controller database development and migration between vendors',
      'Automation tools for migration and QA/QC',
      'Bench testing, verification and validation of signal controllers',
      'Sign-and-seal controller database packages',
      'Local-to-central system integration',
      'Adaptive signal database design and deployment support',
      'Signal controller installation assistance'
    ]
  },
  {
    icon: 'mdi-chart-line',
    title: 'Transportation Systems Management & Operations (TSM&O)',
    description: 'We deliver data-driven analyses and simulation studies that enhance mobility, safety, and reliability.',
    features: [
      'Macro, meso, and micro simulation modeling',
      'Intersection, arterial, and network operational analyses',
      'Controller performance and safety evaluations',
      'Benefit–cost studies and performance assessments',
      'Concept of Operations (ConOps) development',
      'Corridor mobility and sustainability studies'
    ]
  },
  {
    icon: 'mdi-car-multiple',
    title: 'Intelligent Transportation Systems (ITS)',
    description: 'Go Traffic LLC provides full-lifecycle ITS support—from planning and system engineering to deployment and performance evaluation.',
    features: [
      'ITS project planning, system architecture, and design reviews',
      'ITS communication system and software design',
      'ITS deployment system engineering and plans review',
      'Adaptive signal design and ITS device monitoring and control',
      'ITS benefit–cost analyses and performance reporting'
    ]
  },
  {
    icon: 'mdi-road',
    title: 'Traffic Engineering Studies',
    description: 'Our team supports public agencies and private clients with comprehensive traffic engineering services that ensure safe, efficient, and sustainable transportation networks.',
    features: [
      'Traffic impact and access management studies',
      'Interchange access requests and innovative intersection/interchange evaluations',
      'Traffic engineering support for PD&E and design projects',
      'Turning movement and origin–destination (OD) studies',
      'Mobility and safety performance measure calculations',
      'Data visualization and GIS analytics'
    ]
  }
];

const Services = () => {
  return (
    <>
      <section className="section" id="services">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center">
                <h4 className="title-heading">Our Services</h4>
                <p className="title-desc text-muted mt-3">
                  Comprehensive traffic engineering solutions including signal systems, ITS deployment, and advanced traffic management technologies for South Florida and beyond.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="pt-5">
            {ServicesData.map((service, idx) => (
              <Col key={idx} lg={12} className="mb-5">
                <div className="services-box">
                  <Row className="align-items-center">
                    <Col lg={2} className="text-center">
                      <div className="services-icon d-flex justify-content-center align-items-center">
                        <Icon icon={service.icon} />
                      </div>
                    </Col>
                    <Col lg={10}>
                      <div className="services-content">
                        <h5 className="services-title">{service.title}</h5>
                        <p className="services-description text-muted mb-3">
                          {service.description}
                        </p>
                        <div className="services-features">
                          <h6 className="mb-3">Our expertise includes:</h6>
                          <ul className="list-unstyled">
                            {service.features.map((feature, featureIdx) => (
                              <li key={featureIdx} className="mb-2">
                                <Icon icon="mdi-check-circle" className="text-success me-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
