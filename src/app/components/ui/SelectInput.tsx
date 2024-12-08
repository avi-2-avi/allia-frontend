"use client";
import React, { forwardRef } from "react";
import Image from "next/image";

interface SelectInputProps {
    id?: string;
    name?: string;
    label?: string;
    options: { value: string; label: string }[];
    placeholder: string;
}

const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
    ({ id, name, label, options, placeholder }, ref) => {
        return (
            <div className="w-full">
                <p className="text-foreground-secondary mb-2">{label ? label : placeholder}</p>
                <div className="relative w-full">
                    <select
                        id={id}
                        name={name}
                        ref={ref}
                        className="w-full bg-secondary py-2 px-6 border border-input-border rounded-full appearance-none cursor-pointer pr-12"
                    >
                        <option value="" disabled hidden>
                            {placeholder}
                        </option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <Image
                        src={"/icons/Arrowdown.svg"}
                        alt={"Arrow down"}
                        height={16}
                        width={16}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none"
                    />
                </div>
            </div>
        );
    }
);

SelectInput.displayName = "SelectInput";
export default SelectInput;
