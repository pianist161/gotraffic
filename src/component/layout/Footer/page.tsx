import Link from 'next/link';
import React from 'react';
import { Icon } from '@iconify/react';
import { Col, Container, Row } from 'react-bootstrap';
import { currentYear } from '@/component/CurrentYear';

type FooterLinkGroup = {
  heading: string;
  links: string[];
};

const footerLinks: FooterLinkGroup[] = [
  {
    heading: 'About',
    links: ['About Us', 'Press', 'Job Opening', 'Term', 'Privacy'],
  },
  {
    heading: 'Help Center',
    links: ['Accounting', 'Billing', 'General Question'],
  },
];

const Footer = () => {
  return (
    <>
      <section className="footer bg-dark">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="footer-menu">
                <h3 className="mb-4 text-uppercase text-white">
                  <Icon icon="mdi-traffic-light" className="mb-1" /> Go Traffic
                </h3>
                <p>
                  The Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  eaque quae ab illo inventore veritatis et.
                </p>
                <div className="text-white">
                  <Link href="#facebook">
                    <div className="facebook footer_mdi">
                      <Icon icon="mdi-facebook" style={{ fontSize: '16px' }} />
                    </div>
                  </Link>
                  <Link href="#twitter">
                    <div className="twitter footer_mdi">
                      <Icon icon="mdi-twitter" style={{ fontSize: '16px' }} />
                    </div>
                  </Link>
                  <Link href="#google">
                    <div className="google footer_mdi">
                      <Icon icon="mdi-google" style={{ fontSize: '16px' }} />
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
            {footerLinks.map((group, idx) => (
              <Col lg={2} key={idx}>
                <div className="footer-menu">
                  <h5 className="mb-4 text-uppercase">{group.heading}</h5>
                  <ul className="text-muted list-unstyled">
                    {group.links.map((link, i) => (
                      <li key={i}>
                        <Link href="" className="text-muted">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
            <Col lg={4}>
              <div className="footer-menu">
                <h5 className="mb-4 text-uppercase">Contact us</h5>
                <p>The Nam eget dui Etiam rhoncus. Maecenas eget sem quam semper libero.</p>
                <span className="footer-support">Support@abc.com</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="text-center mt-5">
                <p className="mb-0">{currentYear} © Go Traffic.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
