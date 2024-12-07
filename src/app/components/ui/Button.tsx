import React from "react";

const ButtonStyles = {
  PRIMARY:
    "bg-primary border-2 hover:bg-transparent hover:text-primary border border-primary",
  SECONDARY:
    "bg-transparent border-2 border-foreground-muted hover:bg-primary hover:text-foreground hover:border-primary",
};

interface ButtonProps {
  text: string;
  style: keyof typeof ButtonStyles;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  style,
  onClick,
  disabled,
  className,
}) => {
  return (
    <button
      className={`rounded-xl transition duration-300 p-3 w-40 ${
        ButtonStyles[style]
      } ${className}  ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
