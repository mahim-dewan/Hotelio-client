import Link from "next/link";
import React from "react";

const Logo = ({ className }) => {
  return (
    <Link
      href="/"
      className={`${className} text-3xl lg:text-4xl xl:text-5xl font-luxury text-light`}
    >
      Hotelio
    </Link>
  );
};

export default Logo;
