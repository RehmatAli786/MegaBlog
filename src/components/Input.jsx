import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    className = "",
    type = "text",
    ...props
}, ref) {
    const id = useId();
    return (
        <div className='w-auto'>
            {label && <label
                className='d-inline-block mb-1 pl-1'
                htmlFor={id}
            >
                {label}
            </label>
            }
            <input type={`${type}`}
                className={`form-control px-3 py-2 rounded bg-white text-dark border border-secondary w-100 ${className}`}
                {...props}
                ref={ref}
                id={`${id}`}
            />
        </div>
    )
})

export default Input;
