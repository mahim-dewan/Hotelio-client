import React from "react";
import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

const LineSpinnerLoader = ({
  size = "40",
  stroke = "3",
  speed = "1",
  color = "white",
  className,
}) => {
  return (
    <div className={`${className}`}>
      <LineSpinner size={size} stroke={stroke} speed={speed} color={color} />
    </div>
  );
};

export default LineSpinnerLoader;
