import React from "react";
import { Spinner } from "./Spinner";
import { Link } from 'react-router-dom'

const colorClassnames = {
  primary:
    "font-display flex items-center justify-center outline-none py-2 px-5 rounded-lg font-semibold text-sm text-white bg-airhouse-500 hover:bg-airhouse-600 focus:ring-4 focus:ring-airhouse-300 transition duration-200 ease-in-out",
  secondary:
    "font-display flex items-center justify-center outline-none py-2 px-4 rounded-lg font-medium text-sm border border-gray-200 shadow-sm text-sm  focus:ring-4 focus:ring-gray-200 transition duration-200 ease-in-out",
  danger:
  "font-display flex items-center justify-center outline-none py-2 px-5 rounded-lg font-semibold text-sm text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-200 transition duration-200 ease-in-out",
};


const Button = ({
  children,
  loading,
  color = "primary",
  to,
  className,
  ...props
}) => {
  if(to) {
    return (
    <Link to={to} className={` ${colorClassnames[color]} inline-flex ${className}`} {...props}>
      <span className="flex items-center">
       {children}
      </span> 
    </Link>)
  }
  return (
    <button className={`${colorClassnames[color]} ${className}`} {...props}>
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