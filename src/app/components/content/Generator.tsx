"use client";
import React, {useState} from 'react'
import Card from "@/app/components/content/Card";
import Image from "next/image";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import SelectInput from "@/app/components/ui/SelectInput";

interface GeneratorProps {
    isDemo?: boolean
}

const Generator: React.FC<GeneratorProps> = ({isDemo = false}) => {
    const [selectedCard, setSelectedCard] = useState<string | null>(null);

    // Card data
    const cards = [
        {
            title: "Text Content",
            icon: <Image src={"/icons/Text.svg"} alt={"Text logo"} width={45} height={45} />,
            isPremium: false,
        },
        {
            title: "Short Video",
            icon: <Image src={"/icons/Video.svg"} alt={"Video logo"} width={40} height={40} />,
            isPremium: true,
        },
        {
            title: "X Thread",
            icon: <Image src={"/icons/X.svg"} alt={"X logo"} width={45} height={45} />,
            isPremium: false,
        },
        {
            title: "Meme",
            icon: <Image src={"/icons/Ghost.svg"} alt={"Ghost logo"} width={45} height={50} />,
            isPremium: true,
        },
    ];

    const toneOptions = [
        {value: "professional", label: "Professional"},
        {value: "casual", label: "Casual"},
        {value: "formal", label: "Formal"},
        {value: "friendly", label: "Friendly"},
        {value: "informative", label: "Informative"},
        {value: "persuasive", label: "Persuasive"},
    ]

    return (
        <div className={"mx-auto space-y-10"}>
            <div
                className={
                    "grid grid-cols-1 sm:grid-cols-[repeat(2,_minmax(0,_max-content))] xl:grid-cols-[repeat(auto-fit,_minmax(0,_max-content))] justify-items-center justify-center gap-5"
                }
            >
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        icon={card.icon}
                        isPremium={card.isPremium}
                        isSelected={selectedCard === card.title}
                        onClick={() => setSelectedCard(card.title)} // Update selected card on click
                    />
                ))}
            </div>
            <div className={"space-y-10 max-w-generator mx-auto px-4 xl:mx-0 xl:px-0 xl:max-w-full"}>
                <div
                    className={"grid grid-cols-1 xl:grid-cols-3 gap-5"}>
                    <Input label={"Domain or Industry"} placeholder={"Technology, Health, Finance..."}/>
                    <Input label={"Topic or News"} placeholder={"Enter a topic or paste a news article"}/>
                    <SelectInput options={toneOptions} label={"Tone"} placeholder={"Professional"}/>
                </div>
                <Button className={"w-full"} text={"Generate content"} style={"PRIMARY"}/>
            </div>
        </div>
    )
}
export default Generator
