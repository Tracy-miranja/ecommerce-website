// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaWindowClose } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Popup = ({ orderpopup, setOrderPopup }) => {
  const handleClose = () => {
    setOrderPopup(false);
  };

  if (!orderpopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* header section */}
      <div className="bg-white p-8 rounded-md z-10 relative">
        <button onClick={handleClose} className="absolute top-2 right-2">
          <FaWindowClose className="text-black" />
        </button>
        <p className="text-black">Order Now!</p>
        <div className="mt-3">
          <input
            type="text"
            placeholder="Enter Full name"
            border
            className="p-3 border outline-black-200"
          />
        </div>
        <div className="mt-3">
          <input
            type="text"
            placeholder="Enter location"
            border
            className="p-3 border outline-black-200"
          />
        </div>
        <div className="mt-3 ">
          <input
            type="number"
            placeholder="Enter Phone number"
            className="p-3 border outline-black-200"
          />
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
