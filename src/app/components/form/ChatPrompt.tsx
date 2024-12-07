"use client";
import React, { useState, FormEvent, ChangeEvent } from 'react';
import CircleButton from "@/app/components/ui/CircleButton";
import Image from "next/image";

const ChatPrompt: React.FC = () => {
    const [prompt, setPrompt] = useState<string>(''); // State for input value

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (prompt.trim() === '') {
            alert('Please enter a prompt before submitting!');
            return;
        }

        console.log('Do something:', prompt);
        setPrompt('');
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPrompt(event.target.value);
    };

    return (
        <form
            className="flex space-x-2.5 w-full"
            onSubmit={handleSubmit} // Attach the onSubmit handler
        >
            <Image src="/icons/Plus.svg" alt="Plus icon" width={20} height={20} />
            <input
                className="flex-grow bg-secondary py-2 px-6 border border-input-border rounded-full"
                type="text"
                id="prompt"
                name="prompt"
                placeholder="Enter your prompt"
                value={prompt}
                onChange={handleChange}
            />
            <CircleButton
                type="submit"
                image={
                    <Image src="/icons/Send.svg" width={20} height={20} alt="Send icon" />
                }
            />
        </form>
    );
};

export default ChatPrompt;
