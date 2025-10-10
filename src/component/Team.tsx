'use client';

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import team1 from '@/assets/images/team/1.jpg';
import team2 from '@/assets/images/team/2.jpg';
import team3 from '@/assets/images/team/3.jpg';
import team4 from '@/assets/images/team/4.jpg';
import Image, { StaticImageData } from 'next/image';

interface TeamMember {
  img: StaticImageData;
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  {
    img: team1,
    name: 'Dr. Enock',
    role: 'Managing Partner/President',
  },
  {
    img: team2,
    name: 'Dr. Aidin',
    role: 'Managing Partner/President',
  },
];

const Team = () => {
  return (
    <section className="section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            <div className="about-title mx-auto text-center">
              <h2 className="fw-normal">
                Meet Our Expert Team
              </h2>
              <p className="text-muted pt-4">
                Our highly skilled professionals bring extensive experience in traffic engineering, 
                signal optimization, and intelligent transportation systems. We are committed to 
                transforming the transportation landscape through innovative solutions and advanced technology.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5" id="counter">
          <Col lg={3} className="text-center">
            <div className="text-muted">
              <h3 className="counter-value fw-normal">
                <CountUp end={50} suffix="+" />
              </h3>
              <p>Traffic Projects</p>
            </div>
          </Col>
          <Col lg={3} className="text-center about-border-left">
            <div className="text-muted">
              <h3 className="counter-value fw-normal">
                <CountUp end={25} />
              </h3>
              <p>Signal Systems</p>
            </div>
          </Col>
          <Col lg={3} className="text-center about-border-left">
            <div className="text-muted">
              <h3 className="counter-value fw-normal">
                <CountUp end={15} />
              </h3>
              <p>ITS Deployments</p>
            </div>
          </Col>
          <Col lg={3} className="text-center about-border-left">
            <div className="text-muted">
              <h3 className="counter-value fw-normal">
                <CountUp end={100} suffix="%" />
              </h3>
              <p>Client Satisfaction</p>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 justify-content-center">
          {teamMembers.map((member, index) => (
            <Col lg={4} key={index}>
              <div className="mt-3 text-center">
                <Image
                  src={member.img}
                  alt={member.name}
                  className="img-fluid team-member mx-auto d-block rounded-circle img-thumbnail"
                />
                <div className="text-center mt-3">
                  <p className="fw-medium mb-0">{member.name}</p>
                  <p className="text-muted mb-0">{member.role}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
