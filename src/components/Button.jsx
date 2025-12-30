import React from "react";

const Button = ({ children, type = "button", onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} cursor-pointer hover:opacity-80 active:opacity-80`}
    >
      {children}
    </button>
  );
};

export default Button;
