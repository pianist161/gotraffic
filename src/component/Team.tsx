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
    name: 'Wade G. Wilhite',
    role: 'CEO/Founder',
  },
  {
    img: team2,
    name: 'William S. Blay',
    role: 'CTO/Co-Founder',
  },
  {
    img: team3,
    name: 'Matthew B. Morales',
    role: 'Web Designer',
  },
  {
    img: team4,
    name: 'Luke L. Johnston',
    role: 'Web Developer',
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
                A Digital web studio creating stunning &amp; Engaging online Experiences
              </h2>
              <p className="text-muted pt-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5" id="counter">
          <Col lg={3} className="text-center">
            <div className="text-muted">
              <h3 className="counter-value fw-normal">
                <CountUp end={128} suffix="+" />
              </h3>
              <p>Projects</p>
            </div>
          </Col>
          <Col lg={3} className="text-center about-border-left">
            <div className="text-muted">
              <h3 className="counter-value fw-normal">
                <CountUp end={89} />
              </h3>
              <p>Clients</p>
            </div>
          </Col>
          <Col lg={3} className="text-center about-border-left">
            <div className="text-muted">
              <h3 className="counter-value fw-normal">
                <CountUp end={15842} />
              </h3>
              <p>Members</p>
            </div>
          </Col>
          <Col lg={3} className="text-center about-border-left">
            <div className="text-muted">
              <h3 className="counter-value fw-normal">
                <CountUp end={125} />
              </h3>
              <p>Employee</p>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          {teamMembers.map((member, index) => (
            <Col lg={3} key={index}>
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
