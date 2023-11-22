import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[10px]" };
const variants = {
  fill: {
    red_600: "bg-red-600 text-white-A700",
    gray_50: "bg-gray-50 shadow-bs text-gray-900",
  },
};
const sizes = { xs: "p-3", sm: "p-[17px]", md: "p-6 sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["red_600", "gray_50"]),
};

export { Button };
