"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import CircleButton from "@/app/components/ui/CircleButton";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ChatPromptProps {
  onSendMessage: (message: string, tone: string, contentType: string) => void;
}

const ChatPrompt: React.FC<ChatPromptProps> = ({ onSendMessage }) => {
  const [prompt, setPrompt] = useState<string>("");
  const [selectedTone, setSelectedTone] = useState<string>("Professional");
  const [selectedContentType, setSelectedContentType] =
    useState<string>("Text");

  const tones = [
    { label: "Professional", value: "Professional" },
    { label: "Casual", value: "Casual" },
    { label: "Formal", value: "Formal" },
    { label: "Friendly", value: "Friendly" },
    { label: "Persuasive", value: "Persuasive" },
  ];

  const contentTypes = [
    { label: "Text", value: "Text", icon: "/icons/Text.svg" },
    { label: "X Thread", value: "X Thread", icon: "/icons/X.svg" },
    { label: "Video", value: "Video", icon: "/icons/Video.svg" },
    { label: "Meme", value: "Meme", icon: "/icons/Ghost.svg" },
  ];

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

    if (!selectedTone || !selectedContentType) {
      toast.warning("Please select a tone and content type!", {
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

    onSendMessage(prompt, selectedTone, selectedContentType);
    setPrompt("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  return (
    <div className="p-4 rounded-lg shadow-md">
      <ToastContainer />
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Tone Selector */}

        <div className="flex space-x-4">
          <span className="">
            <p className="text-foreground-secondary mb-2">Tone</p>
            <select
              className="bg-secondary py-2 px-4 border border-input-border rounded-full h-12"
              value={selectedTone}
              onChange={(e) => setSelectedTone(e.target.value)}
            >
              {tones.map((tone) => (
                <option key={tone.value} value={tone.value}>
                  {tone.label}
                </option>
              ))}
            </select>
          </span>
          {/* Content Type Selector */}
          <span className="w-full">
            <p className="text-foreground-secondary mb-2">Content Type</p>

            <div className="flex items-center w-full space-x-4">
              {contentTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  className={`flex items-center justify-center w-full h-12 rounded-xl ${
                    selectedContentType === type.value
                      ? "bg-primary"
                      : "bg-secondary"
                  }`}
                  onClick={() => setSelectedContentType(type.value)}
                >
                  <Image
                    src={type.icon}
                    alt={type.label}
                    width={24}
                    height={24}
                  />
                </button>
              ))}
            </div>
          </span>
        </div>

        {/* Prompt Input */}
        <div className="flex items-center space-x-2">
          <input
            className="flex-grow bg-secondary py-2 px-4 border border-input-border rounded-full"
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
        </div>
      </form>
    </div>
  );
};

export default ChatPrompt;
