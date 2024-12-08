"use client";
import React, { useState } from "react";
import Card from "@/app/components/content/Card";
import Image from "next/image";
import Input from "@/app/components/ui/Input";
import SelectInput from "@/app/components/ui/SelectInput";
import CircleButton from "../ui/CircleButton";
import Button from "../ui/Button";

interface GeneratorProps {
  isDemo?: boolean;
}

const Generator: React.FC<GeneratorProps> = ({ isDemo = false }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  // Card data
  const cards = [
    {
      title: "Text Content",
      icon: (
        <Image
          src={"/icons/Text.svg"}
          alt={"Text logo"}
          width={45}
          height={45}
        />
      ),
      isPremium: false,
    },
    {
      title: "X Thread",
      icon: (
        <Image src={"/icons/X.svg"} alt={"X logo"} width={45} height={45} />
      ),
      isPremium: false,
    },
    {
      title: "Short Video",
      icon: (
        <Image
          src={"/icons/Video.svg"}
          alt={"Video logo"}
          width={40}
          height={40}
        />
      ),
      isPremium: true,
    },
    {
      title: "Meme",
      icon: (
        <Image
          src={"/icons/Ghost.svg"}
          alt={"Ghost logo"}
          width={45}
          height={50}
        />
      ),
      isPremium: true,
    },
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
    <div className={"mx-auto space-y-10 px-4"}>
      {/* Cards Section */}
      <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"}>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            icon={card.icon}
            isPremium={card.isPremium}
            isSelected={selectedCard === card.title}
            onClick={() => setSelectedCard(card.title)}
          />
        ))}
      </div>

      {/* Inputs Section */}
      <div className={"space-y-10 w-full"}>
        <div
          className={"flex flex-col md:flex-row gap-6 items-baseline w-full"} // Alineación al baseline
        >
          {/* Prompt Input */}
          <div className="flex-grow w-full">
            <p className="text-foreground-secondary mb-2">Enter your prompt</p>
            <textarea
              className="w-full bg-secondary py-2 px-6 border border-input-border rounded-full appearance-none h-[42px]"
              placeholder="Prompt"
            />
          </div>

          {/* Tone Selector */}
          <div className="min-w-[200px] w-full flex items-baseline">
            <SelectInput
              options={toneOptions}
              label={"Tone"}
              placeholder={"Professional"}
            />
          </div>

          {/* Generate Button (visible in small screens) */}
          <div className="block md:hidden w-full">
            <Button text={"Generate"} style={"PRIMARY"} className="w-full" />
          </div>

          {/* Submit Button (hidden in small screens) */}
          <div className="hidden md:flex">
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
        </div>
      </div>
    </div>
  );
};
export default Generator;
