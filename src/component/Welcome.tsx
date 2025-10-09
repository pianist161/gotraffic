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
    icon: 'uil-water',
    title: 'Natural Flow',
    des: 'Holuptate velit esse moleiae quam nihil consequatur voluptas nulla every pariatur?',
  },
  {
    icon: 'uil-dropbox',
    title: 'Awesome Design',
    des: 'Vestibulum mollis nibh interdum aculis proin auctor vulputate facilisis Etiam convallis posuere.',
  },
  {
    icon: 'uil-focus-target',
    title: 'Easy to customize',
    des: 'Proin quis elit vitae nisi interdum ullamcorper sit amet eget diam sed non ornare libero.',
  },
];

const WelcomeData2: welcomeType[] = [
  {
    icon: 'uil-fire',
    title: 'Hot Looks',
    des: 'Consec tetureu suscipit metorbi dictum nec risus venenatis dictum duty vulputate.',
  },
  {
    icon: 'uil-game-structure',
    title: 'Unrivaled Quality',
    des: 'Maenas sagittis placerat scele risque tempor Aliquam placerat neque scelerisque consectetur.',
  },
  {
    icon: 'uil-flower',
    title: 'Clean Design',
    des: 'Aliquam dicadtunc senulla congue posuere bibendum erat sit amet tortor finibus.',
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
                <h4 className="title-heading">Our solution for your business</h4>
                <p className="title-desc text-muted mt-3">
                  We craft digital, graphic and dimensional thinking, to create category leading
                  brand experiences that have meaning and add a value.
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
