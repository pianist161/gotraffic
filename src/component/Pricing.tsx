import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

type PricingPlan = {
  title: string;
  price: string;
  duration: string;
  features: string[];
  isHighlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    title: 'Regular',
    price: '10.99$',
    duration: 'Per Month',
    features: [
      'Bandwidth: 1GB',
      'Onlinespace: 500MB',
      'Support: No',
      'Domain: 1',
      '50 Projects per month',
      '-',
    ],
  },
  {
    title: 'Startup',
    price: '30.99$',
    duration: 'Per Month',
    features: [
      'Bandwidth: 2GB',
      'Onlinespace: 1GB',
      'Support: No',
      'Domain: 3',
      '200 Projects per month',
      'Hidden Fees: No',
    ],
    isHighlighted: true,
  },
  {
    title: 'Business',
    price: '80.99$',
    duration: 'Per Month',
    features: [
      'Bandwidth: 4GB',
      'Onlinespace: 2GB',
      'Support: No',
      'Domain: Unlimited',
      'Unlimited Projects per month',
      'Hidden Fees: No',
    ],
  },
];

const Pricing = () => {
  return (
    <>
      <section className="section bg-light" id="price">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center">
                <h4 className="title-heading text-uppercase">Our Pricing</h4>
                <p className="title-desc text-muted mt-3">
                  Tools are beyond the one-click install, async tech merges with ultimate
                  flexibility experiences that have meaning and add a value.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            {pricingPlans.map((plan, idx) => (
              <Col lg={4} key={idx}>
                <div className={`price mt-4 p-5 ${plan.isHighlighted ? 'bg-white' : ''}`}>
                  <div className="item text-center">
                    <div className="type pb-3">
                      <h4>{plan.title}</h4>
                    </div>
                    <div className="value">
                      <h3>
                        {plan.price.split('.')[0]}.<span>{plan.price.split('.')[1]}</span>
                      </h3>
                      <span className="per text-muted">{plan.duration}</span>
                    </div>
                    <div className="feature">
                      <ul className="list-unstyled text-muted">
                        {plan.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <Link href="" className="btn btn-custom">
                        Order Now
                      </Link>
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

export default Pricing;
