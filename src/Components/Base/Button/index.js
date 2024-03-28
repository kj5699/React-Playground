import React from "react";
import styles from './styles.module.scss'

const colorClass= {
    primary: 'bg-main-blue text-main-white',
    danger:'bg-main-red text-main-white'
}
function Button({ label , onClick, variant='primary', buttonClass , disabled}) {

  return (
    <button 
      disabled = {disabled} 
      className={`${styles.base__button} ${colorClass[variant]} 
      ${buttonClass} py-2 w-full rounded text-sm mb-4`} 
      onClick={onClick}>
        {label}
    </button>
  );
}
export default Button;