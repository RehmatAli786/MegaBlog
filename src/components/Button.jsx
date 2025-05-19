import React from 'react'

function Button({
    childern,
    type = "button",
    textColor = "text-white",
    bgColor = "primary",
    className = "",
    ...props
}) {
    return <button className={`btn btn-${bgColor} ${textColor} ${className}`}
        type={`${type}`} {...props}>
        {childern}
    </button>;
}

export default Button
