// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Popup = ({ orderpopup, setOrderPopup, setCount, count }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const handleClose = () => {
    setOrderPopup(false);
  };

  if (!orderpopup) return null;

  const handleCount = () => {
    setCount(count + 1);
    setOrderPopup(false);

    // Reset input fields
    setName("");
    setLocation("");
    setPhone("");
    alert("Order successful");
  };

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
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Full name"
            border
            className="p-3 border outline-black-200"
          />
        </div>
        <div className="mt-3">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Enter location"
            border
            className="p-3 border outline-black-200"
          />
        </div>
        <div className="mt-3 ">
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="Enter Phone number"
            className="p-3 border outline-black-200"
          />
        </div>
        <button
          onClick={handleCount}
          className="bg-orange-400 p-2 mt-2 rounded-full font-bold hover:bg-slate-300"
          type="button"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Popup;
