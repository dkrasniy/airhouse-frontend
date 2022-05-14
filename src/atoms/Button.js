import React from "react";
import { Spinner } from "./Spinner";

const primaryButtonStyles = 'font-display flex items-center justify-center outline-none py-2 px-5 rounded-lg font-semibold text-sm md:text-base text-white bg-airhouse-500 hover:bg-airhouse-600 focus:ring-4 focus:ring-airhouse-300 transition duration-200 ease-in-out'
const dangerButtonStyles = "text-white bg-red-500 hover:bg-red-600 disabled:text-red-600 disabled:bg-red-600 focus:ring-4 focus:ring-red-300"

const Button = ({
  children,
  loading,
  to,
  className,
  ...props
}) => {
  return (
    <button className={`${primaryButtonStyles}`} {...props}>
      <span className={loading ? "opacity-0" : `flex items-center`}>
        {children}
      </span>
      {loading ? (
        <span className={`absolute`}>
          <Spinner />
        </span>
      ) : null}
    </button>
  )
};

export default Button