"use client";
import React, { useState } from "react";
import Card from "@/app/components/content/Card";
import Image from "next/image";
import SelectInput from "@/app/components/ui/SelectInput";
import CircleButton from "../ui/CircleButton";
import Button from "../ui/Button";
import { useGenerateContent } from "@/app/chat/hooks/useGenerateContent.hook";

const Generator: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedTone, setSelectedTone] = useState<string | null>(null);

  const { promptRef, isGenerating, onSubmit } = useGenerateContent();

  const cards = [
    { title: "Text Content", icon: "/icons/Text.svg" },
    { title: "X Thread", icon: "/icons/X.svg" },
    { title: "Short Video", icon: "/icons/Video.svg" },
    { title: "Meme", icon: "/icons/Ghost.svg" },
  ];

  const toneOptions = [
    { value: "professional", label: "Professional" },
    { value: "casual", label: "Casual" },
    { value: "formal", label: "Formal" },
    { value: "friendly", label: "Friendly" },
    { value: "informative", label: "Informative" },
    { value: "persuasive", label: "Persuasive" },
  ];

  return (
    <form
      onSubmit={(e) => onSubmit(e, selectedTone, selectedCard)}
      className="mx-auto space-y-10 px-4"
    >
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            icon={
              <Image src={card.icon} alt={card.title} width={45} height={45} />
            }
            isSelected={selectedCard === card.title}
            onClick={() => setSelectedCard(card.title)}
          />
        ))}
      </div>

      {/* Inputs Section */}
      <div className="space-y-10 w-full">
        <div className="flex flex-col md:flex-row gap-6 items-start w-full">
          <span className="flex items-baseline gap-6 w-full">
            {/* Prompt Input */}
            <div className="flex-grow w-full">
              <p className="text-foreground-secondary mb-2">
                Enter your prompt
              </p>
              <textarea
                ref={promptRef}
                className="w-full bg-secondary py-2 px-6 border border-input-border rounded-2xl appearance-none h-[42px]"
                placeholder="Prompt"
              />
            </div>

            {/* Tone Selector */}
            <div className="min-w-[200px] w-full flex items-baseline">
              <SelectInput
                options={toneOptions}
                label={"Tone"}
                placeholder={"Professional"}
                onChange={(option) => setSelectedTone(option.value)}
              />
            </div>
          </span>
          {/* Generate Button (visible in small screens) */}
          <div className="block md:hidden w-full">
            <Button text="Generate" style="PRIMARY" disabled={isGenerating} />
          </div>

          {/* Submit Button (hidden in small screens) */}
          <div className="hidden md:flex">
            <CircleButton
              type="submit"
              disabled={isGenerating}
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
        </div>
      </div>
    </form>
  );
};

export default Generator;
