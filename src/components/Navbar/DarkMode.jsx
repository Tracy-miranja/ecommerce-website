// import React from "react";
import { useEffect, useState } from "react";
import { RxSwitch } from "react-icons/rx";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.style.background = isDarkMode ? "black" : "white";
    document.body.style.color = isDarkMode ? "white" : "black";
  });

  return (
    <div
      className={`text-3xl p-4 ${isDarkMode ? " text-white" : " text-yellow-500 body-"}`}
    >
      <RxSwitch onClick={toggleMode} />
    </div>
  );
};

export default DarkMode;
