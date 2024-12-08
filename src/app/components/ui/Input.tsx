"use client";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

interface InputProps {
  type?: "text" | "number" | "password" | "email";
  id?: string;
  name?: string;
  placeholder: string;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  id,
  name,
  placeholder,
  value,
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
      />
    </div>
  );
};

export default Input;
