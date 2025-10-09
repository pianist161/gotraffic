'use client';

import { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import img1 from '@/assets/images/portfolio/work-1.jpg';
import img2 from '@/assets/images/portfolio/work-8.jpg';
import img3 from '@/assets/images/portfolio/work-3.jpg';
import img4 from '@/assets/images/portfolio/work-2.jpg';
import img5 from '@/assets/images/portfolio/work-6.jpg';
import img6 from '@/assets/images/portfolio/work-5.jpg';
import img7 from '@/assets/images/portfolio/work-7.jpg';
import img8 from '@/assets/images/portfolio/work-4.jpg';

type PortfolioItem = {
  id: number;
  img: StaticImageData;
  alt: string;
  categories: string[];
  title: string;
  client: string;
};

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    img: img1,
    alt: '1',
    categories: ['profile', 'business'],
    title: 'Centerd Gallary',
    client: 'Kay Garland',
  },
  {
    id: 2,
    img: img2,
    alt: '2',
    categories: ['business', 'finance'],
    title: 'Sidebar Stack',
    client: 'Kay Garland',
  },
  {
    id: 3,
    img: img3,
    alt: '3',
    categories: ['profile', 'business'],
    title: 'Grid – Overlay',
    client: 'Kay Garland',
  },
  {
    id: 4,
    img: img4,
    alt: '4',
    categories: ['marketing'],
    title: 'Distinctive',
    client: 'Kay Garland',
  },
  {
    id: 5,
    img: img5,
    alt: '5',
    categories: ['finance', 'marketing'],
    title: 'Sustainable',
    client: 'Kay Garland',
  },
  {
    id: 6,
    img: img6,
    alt: '6',
    categories: ['profile', 'marketing'],
    title: 'Popup Hover',
    client: 'Kay Garland',
  },
  { id: 7, img: img7, alt: '7', categories: ['business'], title: 'Vendor', client: 'Kay Garland' },
  {
    id: 8,
    img: img8,
    alt: '8',
    categories: ['marketing'],
    title: 'Slider Cover',
    client: 'Kay Garland',
  },
];

const filters = ['*', 'profile', 'business', 'finance', 'marketing'];

const Portfolio = () => {
  const [filterKey, setFilterKey] = useState('*');
  const gridRef = useRef<HTMLDivElement | null>(null);
  const isotopeInstance = useRef<any>(null);

  useEffect(() => {
    let iso: any;
    const initIsotope = async () => {
      const Isotope = (await import('isotope-layout')).default;

      if (gridRef.current) {
        iso = new Isotope(gridRef.current, {
          itemSelector: '.portfolio-item',
          layoutMode: 'masonry',
        });
        isotopeInstance.current = iso;
      }
    };

    initIsotope();

    return () => {
      if (iso) iso.destroy();
    };
  }, []);

  useEffect(() => {
    if (filterKey === '*') {
      isotopeInstance.current?.arrange({ filter: '*' });
    } else {
      isotopeInstance.current?.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  return (
    <section className="section bg-white pb-0" id="portfolio">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <div className="text-center">
              <h4 className="title-heading text-uppercase">Our Portfolio</h4>
              <p className="title-desc text-muted mt-3">
                Huge collection of elements, rich customization options, flexible layouts, stunning
                pages and instant results!
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={12}>
            <div className="text-center">
              <ul className="col container-filter categories-filter list-unstyled mb-0" id="filter">
                {filters.map(filter => (
                  <li key={filter}>
                    <a
                      className={`categories ${filterKey === filter ? 'active' : ''}`}
                      onClick={() => setFilterKey(filter)}
                      style={{ cursor: 'pointer' }}
                    >
                      {filter === '*' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row ref={gridRef} className="row-cols-lg-4 row-cols-1 mt-5 g-0 projects-wrapper">
          {portfolioData.map(item => (
            <Col key={item.id} className={`portfolio-item ${item.categories.join(' ')}`}>
              <div className="item-box">
                <Link className="cbox-gallary1 mfp-image" href={item.img.src}>
                  <Image className="item-container img-fluid" src={item.img} alt={item.alt} />
                  <div className="item-mask">
                    <div className="item-caption">
                      <h5 className="text-dark">{item.title}</h5>
                      <p className="text-muted">client: {item.client}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
