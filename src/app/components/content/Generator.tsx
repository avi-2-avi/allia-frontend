import React from 'react'
import Card from "@/app/components/content/Card";
import Image from "next/image";

interface GeneratorProps {
    isDemo?: boolean
}

const Generator: React.FC<GeneratorProps> = ({isDemo = false}) => {
    return (
        <div
            className={
                "grid grid-cols-1 sm:grid-cols-[repeat(2,_minmax(0,_max-content))] xl:grid-cols-[repeat(auto-fit,_minmax(0,_max-content))] justify-items-center justify-center gap-5"
            }
        >
            <Card isSelected title={"Text Content"} icon={
                <Image
                    src={"/icons/Text.svg"}
                    alt={"Text logo"}
                    width={45}
                    height={45}
                />
            }
            />
            <Card isPremium title={"Short Video"} icon={
                <Image
                    src={"/icons/Video.svg"}
                    alt={"Video logo"}
                    width={40}
                    height={40}
                />
            }
            />
            <Card isPremium title={"X Thread"} icon={
                <Image
                    src={"/icons/X.svg"}
                    alt={"X logo"}
                    width={45}
                    height={45}
                />
            }
            />
            <Card title={"Meme"} icon={
                <Image
                    src={"/icons/Ghost.svg"}
                    alt={"Ghost logo"}
                    width={45}
                    height={50}
                />
            }
            />
        </div>


    )
}
export default Generator
