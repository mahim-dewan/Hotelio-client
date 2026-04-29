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
      className={`${className} ${disabled ? "cursor-not-allowed opacity-100" : " cursor-pointer hover:opacity-90 active:opacity-90"} `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
