'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import shape from '@/assets/images/shape/shape_04.svg';
import shape_2 from '@/assets/images/shape/shape_05.svg';
import shape_3 from '@/assets/images/shape/shape_06.svg';
import screen from '@/assets/images/assets/screen_02.png';
import screen_2 from '@/assets/images/assets/screen_03.png';
import SeoshiftPartners from '../partners/seoshift-partners';

// imageStyle
const imageStyle = {
  height:'auto'
}

const HeroBannerOne = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('You have successfully joined the seoShift waitlist! 🎉');
        setEmail('');
      } else {
        setMessage(result.message || 'Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="hero-banner-two light-bg pt-200 pb-85 position-relative">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <h1 className="hero-heading text-center fw-bold wow fadeInUp mt-10">We are very proud to bring seoshift to the world
              </h1>
              <p className="text-xl text-center pt-35 pb-35 wow fadeInUp" data-wow-delay="0.1s">The world&apos;s first pay-as-you-go SEO Software</p>
              <form onSubmit={handleSubmit} className="m-auto position-relative wow fadeInUp" data-wow-delay="0.2s">
                <input
                  type="email"
                  placeholder="Your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="btn-four" type="submit">Join the waitlist</button>
              </form>
              {message && <p className="text-center mt-3">{message}</p>}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 m-auto">
              <div className="partner-logo-one pt-80 md-p-70">
                <p className="fw-500 text-dark text-center mb-40">The data you need, the insights you never knew you missed.</p>
                <p className="text-center mb-40">Level up your SEO analysis skills by using data the way it&apos;s supposed to be used.</p>
                {/* partner slider start */}
                <SeoshiftPartners />
                {/* partner slider end */}
              </div>
            </div>
          </div>
        </div>
        <Image src={shape_2} alt="shape" className="lazy-img shapes shape_01" style={imageStyle} />
        <Image src={shape_3} alt="shape" className="lazy-img shapes shape_02" style={imageStyle} />
        <Image src={screen} alt="screen" className="lazy-img shapes shape_03" style={imageStyle} />
        <Image src={screen_2} alt="screen" className="lazy-img shapes shape_04" style={imageStyle} />
      </div>
    </>
  );
};

export default HeroBannerOne;
