import React from 'react'

const Button = ({ disabled = false, label, iconURL, textColor, backgroundColor, borderColor, fullWidth, }) => {
  return (
    <button className={`flex justify-center items-center 
        gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${backgroundColor && !disabled ? `${backgroundColor} ${borderColor} ${textColor}` :
        "bg-coral-red text-white border-coral-red"} 
        ${disabled === true && "bg-slate-gray text-white border-slate-gray"}
        rounded-full ${fullWidth && "w-full"}
        ${disabled === true && "cursor-not-allowed"}
      `} disabled={disabled}>
      {label}

      {iconURL && <img src={iconURL} alt='arrow right icon'
        className='ml-2 rounded-full w-5 h-5' />}
    </button>
  )
}

export default Button