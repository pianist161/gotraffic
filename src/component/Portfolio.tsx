'use client';

import { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import img1 from '@/assets/images/portfolio/pic_1.png';
import img2 from '@/assets/images/portfolio/pic_2.png';
import img3 from '@/assets/images/portfolio/pic_3.png';
import img4 from '@/assets/images/portfolio/pic_4.png';
import img5 from '@/assets/images/portfolio/pic_5.png';
import img6 from '@/assets/images/portfolio/pic_6.png';
import img7 from '@/assets/images/portfolio/pic_7.png';
import img8 from '@/assets/images/portfolio/pic_8.png';

type PortfolioItem = {
  id: number;
  img: StaticImageData;
  alt: string;
  categories: string[];
  title: string;
  
};

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    img: img1,
    alt: '1',
    categories: ['signals', 'systems'],
    title: 'Traffic Signal Systems',
  
  },
  {
    id: 2,
    img: img2,
    alt: '2',
    categories: ['its', 'technology'],
    title: 'ITS Project Support',
    
  },
  {
    id: 3,
    img: img3,
    alt: '3',
    categories: ['studies', 'analysis'],
    title: 'Traffic Engineering Studies',
   
  },
  {
    id: 4,
    img: img4,
    alt: '4',
    categories: ['safety', 'optimization'],
    title: 'TSM&O & Safety Studies',
    
  },
  {
    id: 5,
    img: img5,
    alt: '5',
    categories: ['adaptive', 'control'],
    title: 'Adaptive Signal Control',
   
  },
  {
    id: 6,
    img: img6,
    alt: '6',
    categories: ['database', 'migration'],
    title: 'Signal Controller Database',

  },
  { 
    id: 7, 
    img: img7, 
    alt: '7', 
    categories: ['simulation'], 
    title: 'Traffic Simulation', 
 
  },
  {
    id: 8,
    img: img8,
    alt: '8',
    categories: ['planning', 'design'],
    title: 'Traffic Engineering Support for PD&E & Design Projects',
    
  },
];

const filters = ['*', 'signals', 'its', 'studies', 'safety', 'adaptive', 'database', 'simulation', 'planning'];

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
              <h4 className="title-heading text-uppercase">Our Services</h4>
              <p className="title-desc text-muted mt-3">
                Comprehensive traffic engineering solutions including signal systems, ITS deployment, 
                and advanced traffic management technologies for South Florida and beyond.
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
