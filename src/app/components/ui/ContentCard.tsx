import React from 'react'
import Button from "@/app/components/ui/Button";

interface ContentCardProps {
    title: string
    icon: React.ReactNode
    isPremium?: boolean
    isSelected?: boolean
}

const ContentCard: React.FC<ContentCardProps> = ({title, icon, isPremium = false, isSelected = false}) => {
    return (
        <div
            className={`relative rounded-3xl ${isSelected ? "bg-primary" : "bg-tertiary"} w-[300px] h-[214px] flex flex-col justify-center items-center`}>
            {icon}
            <p className={"text-xl font-bold mt-5 w-52 text-center"}>{title}</p>
            {
                (isPremium &&
                    <Button className={"absolute top-3 h-[30px] py-0 text-sm w-[173px]"} text={"Premium Feature"} style={"PREMIUM"}/>
                )
            }
        </div>
    )
}
export default ContentCard
