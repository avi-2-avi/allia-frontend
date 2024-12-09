"use client";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "@/app/components/ui/Sidebar";
import Header from "@/app/components/ui/Header";
import Generator from "../components/content/Generator";

type Chat = {
  id: string;
  messages: { text: string; sender: "user" | "bot" }[];
  date: string;
};

const ChatPage = () => {
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const chatHistory = [
    { id: 1, title: "Noticias de Tecnología", date: "2024-12-08" },
    { id: 2, title: "Últimas Noticias de Salud", date: "2024-12-07" },
  ];

  const groupedChats = chatHistory.reduce(
    (acc: { [key: string]: typeof chatHistory }, chat) => {
      const date = chat.date;
      if (!acc[date]) acc[date] = [];
      acc[date].push(chat);
      return acc;
    },
    {}
  );

  return (
    <div className="flex flex-col gap-4 h-screen bg-background px-6 py-4 ">
      <Header
        setSidebarVisible={setSidebarVisible}
        sidebarVisible={sidebarVisible}
      />
      <Sidebar
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
        handleChatSelect={setActiveChat}
      />
      <div className="flex h-full">
        <div className="flex-grow rounded-lg flex flex-col p-4 md:ml-64">
          <h1>Hi there, !</h1>
          <p className="text-foreground-secondary text-xl text-center">
            Let’s transform today’s top stories into engaging content.
          </p>
          <div className="mt-6">
            <Generator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
