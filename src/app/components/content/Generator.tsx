"use client";
import React, {useState} from 'react'
import Card from "@/app/components/content/Card";
import Image from "next/image";
import Input from "@/app/components/ui/Input";

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

    return (
        <div className={"mx-auto"}>
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
            <div className={"flex flex-row w-full"}>
                <Input placeholder={"Enter your text here"} />
                <Input placeholder={"Enter your text here"} />
                <Input placeholder={"Enter your text here"} />
            </div>
        </div>
    )
}
export default Generator
