// components/common/SuccessMsg.tsx

import React from "react";

type SuccessMsgProps = {
    show: boolean;
    onClose: () => void;
    msg: string;
  };
  
  const SuccessMsg: React.FC<SuccessMsgProps> = ({ show, onClose, msg }) => {
    if (!show) return null;
  
    return (
      <div className="success-msg">
        <p>{msg}</p>
        <button onClick={onClose}>Close</button>
      </div>
    );
  };
  
  export default SuccessMsg;