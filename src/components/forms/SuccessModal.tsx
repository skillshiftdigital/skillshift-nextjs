// components/SuccessModal.tsx

import React from 'react';

type SuccessModalProps = {
  show: boolean;
  onClose: () => void;
};

const SuccessModal: React.FC<SuccessModalProps> = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Message Sent</h2>
        <p>Your message has been sent successfully!</p>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          width: 90%;
          max-width: 400px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .close-button {
          margin-top: 15px;
          padding: 10px 20px;
          background-color: #19352D;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        .close-button:hover {
          background-color: #CFFF45;
          color: #19352D;
        }
      `}</style>
    </div>
  );
};

export default SuccessModal;
