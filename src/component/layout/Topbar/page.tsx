'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container, NavbarCollapse } from 'react-bootstrap';
import useScrollEvent from '@/hooks/useScrollEvent';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'service', label: 'Services' },
  { id: 'portfolio', label: 'Works' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const Topbar = () => {
  const [open, setOpen] = useState(false);

  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScrollEvent();

  useEffect(() => {
    for (let sec of sections) {
      const el = document.getElementById(sec.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
          setActiveSection(sec.id);
          break;
        }
      }
    }
  }, [scrollY]);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top navbar-custom sticky ${scrollY > 100 ? 'nav-sticky' : ''}`}
      >
        <Container>
          <Link className="navbar-brand logo" href="/">
            Go Traffic
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setOpen(!open)}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Icon icon="mdi-menu" />
          </button>
          <NavbarCollapse id="navbarSupportedContent" in={open}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {sections.map(sec => (
                <li className="nav-item" key={sec.id}>
                  <Link
                    className={`nav-link ${activeSection === sec.id ? 'active' : ''}`}
                    href={`#${sec.id}`}
                  >
                    {sec.label}
                  </Link>
                </li>
              ))}
            </ul>
          </NavbarCollapse>
        </Container>
      </nav>
    </>
  );
};

export default Topbar;
