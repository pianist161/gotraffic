import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import Blog1 from '@/assets/images/blog/1.jpg';
import Blog2 from '@/assets/images/blog/2.jpg';
import Blog3 from '@/assets/images/blog/3.jpg';

type BlogType = {
  image: StaticImageData;
  title: string;
  des: string;
};

const BlogData: BlogType[] = [
  {
    image: Blog1,
    title: 'Want to know how Deep Learning works?',
    des: 'fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
  },
  {
    image: Blog2,
    title: 'How to become a skilled Developer',
    des: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
  },
  {
    image: Blog3,
    title: 'The best front hacking cheatsheets',
    des: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.',
  },
];

const Blog = () => {
  return (
    <>
      <section className="section bg-light" id="blog">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center">
                <h4 className="title-heading text-uppercase">Latest News</h4>
                <p className="title-desc text-muted mt-3">
                  Huge collection of elements, rich customization options, flexible layouts,
                  stunning pages and instant results.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            {BlogData.map((item, idx) => (
              <Col key={idx} lg={4}>
                <div className="blog-menu mt-4">
                  <Image src={item.image} className="img-fluid" alt="" />
                  <div>
                    <h4>
                      <Link href="" className="blog-title">
                        {item.title}
                      </Link>
                    </h4>
                    <p className="mt-2 text-muted">
                      fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.
                    </p>
                    <div className="mt-3">
                      <Link href="" className="read-btn">
                        Read More <Icon icon="mdi-arrow-right" />
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

export default Blog;
