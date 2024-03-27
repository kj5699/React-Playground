import React from "react";

const colorClass= {
    primary: 'bg-main-blue text-main-white',
    danger:'bg-main-red text-main-white'
}
function Button({ label , onClick, variant='primary', buttonClass}) {

  return (
    <button className={`${colorClass[variant]} ${buttonClass} py-2 w-full rounded text-sm mb-4`} onClick={onClick}>{label}</button>
  );
}
export default Button;