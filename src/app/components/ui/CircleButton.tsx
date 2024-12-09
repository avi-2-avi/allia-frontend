import React from 'react'

interface CircleButtonProps {
    image: React.ReactNode,
    className?: string,
    onClick?: () => void
    type?: "button" | "submit" | "reset"
}

const CircleButton: React.FC<CircleButtonProps>= ({image, className, onClick, type}) => {
    return (
        <button onClick={onClick} type={type} className={`flex bg-primary w-12 h-12 items-center justify-center rounded-full ${className}`}>
            {image}
        </button>
    )
}
export default CircleButton
