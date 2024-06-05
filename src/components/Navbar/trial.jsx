// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";

const Trial = () => {
  const [para, setPara] = useState("");
  const [comments, setComments] = useState([]);
  const setItem = (e) => {
    setPara(() => e.target.value);
  };

  const BlogShow = () => {
    setComments((prevComments) => [...(prevComments + para)]);
    setPara("");
  };
  const ClearData = () => {
    setComments("");
  };
  return (
    <div>
      <div className="w-80 bg-orange-500 py-8 ml-10">
        <p className="text-white flex justify-center">`Hello {para}`</p>
        <input
          type="text"
          value={para}
          placeholder="type name"
          onChange={setItem}
        />
        <button type="button" onClick={BlogShow}>
          click me
        </button>
      </div>
      <div className="w-150 bg-slate-400">
        <h1>Comments</h1>
        <p>{comments}</p>
        <button type="button" onClick={ClearData}>
          clear
        </button>
      </div>
    </div>
  );
};

export default Trial;
