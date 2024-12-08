"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatPrompt from "@/app/components/form/ChatPrompt";
import Sidebar from "@/app/components/ui/Sidebar"; 
import Header from "@/app/components/ui/Header";  

type Chat = {
  id: string;
  messages: { text: string; sender: 'user' | 'bot' }[];
  date: string;
};

const ChatPage = () => {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatsHistory, setChatsHistory] = useState<Chat[]>([]); 
  const [activeChat, setActiveChat] = useState<Chat | null>(null); 
  const [sidebarVisible, setSidebarVisible] = useState(false); 

  const handleSendMessage = (message: string) => {
    if (message.trim() === "") {
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

    const newMessage: { text: string; sender: 'user' | 'bot' } = { text: message, sender: 'user' };
    const newMessages = activeChat ? [...activeChat.messages, newMessage] : [newMessage];

    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: { text: string; sender: 'user' | 'bot' } = { text: "¡Hola! ¿En qué puedo ayudarte?", sender: 'bot' };
      const updatedMessages = [...newMessages, botMessage];
      setMessages(updatedMessages);
      setIsTyping(false);

      if (!activeChat) {
        const newChat = { id: new Date().toISOString(), messages: updatedMessages, date: new Date().toLocaleString() };
        setChatsHistory((prev) => [...prev, newChat]);
        setActiveChat(newChat);
      } else {
        const updatedChat = { ...activeChat, messages: updatedMessages };
        setChatsHistory((prev) =>
          prev.map((chat) => (chat.id === activeChat.id ? updatedChat : chat))
        );
        setActiveChat(updatedChat);
      }
    }, 1500);
  };

  const handleChatSelect = (chat: Chat) => {
    setActiveChat(chat);
    setMessages(chat.messages);
  };

  const chatHistory = [
    { id: 1, title: 'Noticias de Tecnología', date: '2024-12-08' },
    { id: 2, title: 'Últimas Noticias de Salud', date: '2024-12-07' },
  ];

  const groupedChats = chatHistory.reduce((acc: { [key: string]: typeof chatHistory }, chat) => {
    const date = chat.date;
    if (!acc[date]) acc[date] = [];
    acc[date].push(chat);
    return acc;
  }, {});

  return (
    <div className="flex flex-col gap-4 h-screen bg-background px-6 py-4 border-2 border-r-secondary">
    
      <Header setSidebarVisible={setSidebarVisible} sidebarVisible={sidebarVisible} />

      <Sidebar 
          sidebarVisible={sidebarVisible} 
          setSidebarVisible={setSidebarVisible} 
          groupedChats={groupedChats}
          setActiveChat={setActiveChat}
        />


      <div className="flex h-full">
        

        <div className="flex-grow rounded-lg flex flex-col bg-[#2E2E2E] p-4 md:ml-64">
          <ToastContainer />

          <div className="flex-grow overflow-auto space-y-4 p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-md ${
                    message.sender === 'user' ? 'bg-accent text-white' : 'bg-[#444444] text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="px-4 py-2 rounded-lg max-w-md bg-[#444444] text-white">
                  Typing...
                </div>
              </div>
            )}
          </div>

          <div className="mt-6">
            <ChatPrompt onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
