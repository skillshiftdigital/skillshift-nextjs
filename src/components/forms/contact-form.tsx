// components/ContactForm.tsx

'use client'
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../common/error-msg';
import SuccessModal from './SuccessModal'; // Import the SuccessModal component

type FormData = {
  name: string;
  email: string;
  message: string;
  honeypot?: string; // Honeypot field
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  message: yup.string().required().min(10).label("Message"),
  honeypot: yup.string().label("Honeypot"), // Honeypot field should be empty
});

const ContactForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [showModal, setShowModal] = useState(false); // State to manage the modal visibility

  const onSubmit = handleSubmit(async (data) => {
    if (data.honeypot) {
      // If honeypot field is filled, discard the submission
      alert('Spam detected!');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowModal(true); // Show the success modal
        reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  });

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <form id="contact-form" onSubmit={onSubmit}>
        <div className="messages"></div>
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                placeholder="Your Name*"
                {...register("name")} id='name'
                name='name'
              />
              <div className="help-block with-errors">
                <ErrorMsg msg={errors.name?.message || ''} />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta form-group mb-40">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                placeholder="Email Address*"
                {...register("email")} id='email'
                name="email"
              />
              <div className="help-block with-errors">
                <ErrorMsg msg={errors.email?.message || ''} />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta form-group mb-35">
              <textarea
                placeholder="Your message*"
                {...register("message")} id='message'
                name="message"
              ></textarea>
              <div className="help-block with-errors">
                <ErrorMsg msg={errors.message?.message || ''} />
              </div>
            </div>
          </div>
          <div style={{ display: 'none' }}>
            <label htmlFor="honeypot">Honeypot</label>
            <input
              type="text"
              placeholder="Leave this field empty"
              {...register("honeypot")} id='honeypot'
              name='honeypot'
            />
          </div>
          <div className="col-12">
            <button type='submit' className="btn-four tran3s w-100 d-block">
              Send Message
            </button>
          </div>
        </div>
      </form>
      <SuccessModal show={showModal} onClose={handleCloseModal} /> {/* Include the modal */}
    </div>
  );
};

export default ContactForm;
