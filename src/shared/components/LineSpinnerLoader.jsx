import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

const LineSpinnerLoader = ({
  size = "20",
  speed = "1",
  color = "white",
  className = "",
}) => {
  return (
    <div className={`${className} -mb-1.5`}>
      <LineSpinner size={size} stroke="3" speed={speed} color={color} />
    </div>
  );
};

export default LineSpinnerLoader;
