'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const VideoSection = () => {
  return (
    <section className="section bg-light" id="video">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-5">
              <h4 className="title-heading text-uppercase">Our Work In Action</h4>
              <p className="title-desc text-muted mt-3">
                Watch how we transform transportation infrastructure with cutting-edge technology 
                and innovative solutions.
              </p>
            </div>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={10}>
            <div 
              className="video-container"
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '56.25%', // 16:9 aspect ratio
                backgroundColor: '#000',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              >
                <source src="/videos/video_2.MOV" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VideoSection;

