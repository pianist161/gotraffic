import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="bg-home-half" id="home">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-background"
        >
          <source src="/videos/city video.mp4" type="video/mp4" />
        </video>
        <div className="home-center">
          <div className="home-desc-center">
            <div style={{
              textAlign: 'center',
              position: 'relative',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%',
              maxWidth: '1200px',
              background: 'rgba(128, 128, 128, 0)',
              padding: '50px 40px',
              borderRadius: '15px',
              backdropFilter: 'blur(3px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              <h2 
                className="home-title mb-4" 
                style={{
                  textAlign: 'center',
                  margin: '0 auto 30px',
                  display: 'block',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                  fontFamily: "'Rubik', sans-serif"
                }}
              >
                Transportation Systems Technology
              </h2>
              <p 
                className="home-desc" 
                style={{
                  textAlign: 'center',
                  margin: '0 auto',
                  display: 'block',
                  maxWidth: '800px',
                  padding: '0 20px',
                  fontSize: '18px',
                  lineHeight: '1.8',
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
                  fontFamily: "'Rubik', sans-serif"
                }}
              >
                Delivering advanced traffic signal systems and intelligent transportation solutions to enhance safety, efficiency, and mobility across South Florida.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
