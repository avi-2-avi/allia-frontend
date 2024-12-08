import React from "react";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import Button from "@/app/components/ui/Button";
import Image from "next/image";

interface SidebarProps {
    sidebarVisible: boolean;
    setSidebarVisible: (visible: boolean) => void;
    groupedChats: { [key: string]: { id: number, title: string, date: string }[] };
    setActiveChat: (chat: any) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarVisible, setSidebarVisible, groupedChats, setActiveChat }) => {
    return (
        <div
            className={`flex flex-col w-64 gap-4 border-2 bg-tertiary rounded-lg text-white p-4 h-full fixed top-0 left-0 transition-all duration-300 ease-in-out transform ${sidebarVisible || window.innerWidth >= 1024 ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <Button text="+ New Chat" className="w-full py-1 rounded-lg" onClick={() => setActiveChat(null)} style={"SECONDARY"} />

            <div className="flex flex-col overflow-y-auto gap-1 flex-grow">
                {Object.keys(groupedChats).map((date) => (
                    <div key={date} className="flex flex-col gap-1">
                        <div className="text-sm text-foreground-muted font-semibold">{date}</div> {/* Fecha */}
                        <div className="flex flex-col">
                            {groupedChats[date].map((chat) => (
                                <div
                                    key={chat.id}
                                    className="flex gap-2 text-sm p-1 rounded-md hover:bg-[#737373]/20 transition-all duration-200 ease-in-out"
                                >
                                    <Image
                                        src="/icons/ChatDots.svg"
                                        width={20}
                                        height={20}
                                        alt="Chat icon"
                                    />
                                    <div className="truncate">
                                        {chat.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col border border-foreground-muted bg-[#737373]/20 p-4 rounded-xl gap-4 transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-[#737373]/30 backdrop-blur-lg backdrop-opacity-60 hover:backdrop-opacity-100">
                <div className="flex items-center justify-center">
                    <Image src="/icons/BigLogo.svg" alt="Logo" width={80} height={80} />
                </div>
                <Button text="Premium" className="w-full py-1 rounded-lg" style={"PRIMARY"} />
            </div>
        </div>
    );
};

export default Sidebar;
