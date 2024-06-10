import React, { useState } from "react";

const NewsletterBanner = ({ style_2 = false }: { style_2?: boolean }) => {
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
        setMessage('You have successfully subscribed to our newsletter');
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
    <div className="newsletter-banner">
      <div className="container">
        <div className={`main-wrapper ${style_2 ? "" : "top-border"} bottom-border`}>
          <div className="row">
            <div className="col-lg-6">
              <h2 className={`${style_2 ? "" : "text-dark"} fw-bold`}>
                Newsletters.
              </h2>
              <p className="text-lg md-pb-20">
{/*               Archives.
 */}              </p>
            </div>
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className="btn" type="submit" title="Subscribe">
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </form>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner;
