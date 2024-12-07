"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import CircleButton from "@/app/components/ui/CircleButton";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChatPrompt: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (prompt.trim() === "") {
      toast.warning("Please enter a prompt before submitting!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    console.log("Do something:", prompt);
    setPrompt("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  return (
    <div>
      <ToastContainer />
      <form className="flex space-x-2.5 w-full" onSubmit={handleSubmit}>
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
            <Image
              src="/icons/Send.svg"
              width={20}
              height={20}
              alt="Send icon"
            />
          }
        />
      </form>
    </div>
  );
};

export default ChatPrompt;
