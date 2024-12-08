"use client";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

interface InputProps {
  type?: "text" | "number" | "password" | "email";
  id?: string;
  name?: string;
  placeholder: string;
  value?: string;
  autocomplete?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  id,
  name,
  placeholder,
  value,
  autocomplete,
}) => {
  return (
    <div>
      <p className="text-foreground-secondary mb-2">{placeholder}</p>
      <input
        className="w-full bg-secondary py-2 px-6 border border-input-border rounded-full"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value === undefined ? undefined : value}
        autoComplete={autocomplete ? "on" : "off"} // Conversión aquí
      />
    </div>
  );
};

export default Input;
