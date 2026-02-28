import React from "react";

const Button = ({
  children,
  type = "button",
  onClick,
  className,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${disabled ? "cursor-not-allowed opacity-50" : " cursor-pointer hover:opacity-80 active:opacity-80"} `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
