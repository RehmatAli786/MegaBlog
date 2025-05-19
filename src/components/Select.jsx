import React, { useId } from 'react'

function Select({
  label,
  className = "",
  options,
  ...props
}, ref) {
  const id = useId();
  return (
    <div className='w-full'>
      {label && <label
        htmlFor={id}
        className='d-inline-block mb-1 pl-1'>
        {label}</label>}
      <select
        id={id}
        {...props}
        className={`form-select bg-white text-dark border rounded w-100 shadow-none ${className}`}
      >
        {options?.map((option) => (
          <options key={option} value={option}>
            {option}
          </options>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
