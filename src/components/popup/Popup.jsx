import React from "react";
import { FaWindowClose } from "react-icons/fa";

const Popup = ({ orderpopup, setOrderPopup }) => {
  const handleClose = () => {
    setOrderPopup(false);
  };

  if (!orderpopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* header section */}
      <div className="bg-white p-4 rounded-md z-10 relative">
        <button onClick={handleClose} className="absolute top-2 right-2">
          <FaWindowClose className="text-black" />
        </button>
        <p className="text-black">Order Now!</p>
        <div className="mt-3">
          <input type="text" placeholder="Enter Full name" border />
        </div>
        <div className="mt-3">
          <input type="text" placeholder="Enter location" border />
        </div>
        <div className="mt-3">
          <input type="number" placeholder="Enter Phone number" border />
        </div>
        <button
          className="bg-orange-400 p-2 mt-2 rounded-full font-bold"
          type="button"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Popup;
