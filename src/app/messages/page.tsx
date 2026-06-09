"use client";

import { useState } from "react";

// Mock dataset for structured conversation threads
const MOCK_CONVERSATIONS = [
  {
    id: 1,
    name: "Sarah",
    title: "Interior Designer",
    location: "Dubai",
    verified: true,
    unread: true,
    messages: [
      { id: 101, sender: "them", text: "Hello! I looked through your background and saw your focus on scaling regional development projects.", time: "10:24 AM" },
      { id: 102, sender: "me", text: "Hi Sarah, absolutely. I specialize in high-performance, cinematic layouts that prioritize speed and pristine aesthetics.", time: "10:31 AM" },
      { id: 103, sender: "them", text: "That perfectly matches what I am looking for. Are you open to reviewing a design alignment brief later this week?", time: "10:34 AM" },
    ]
  },
  {
    id: 2,
    name: "Elena",
    title: "Gallery Curator",
    location: "New York",
    verified: true,
    unread: false,
    messages: [
      { id: 201, sender: "them", text: "Your perspective on digital authority and low-friction automation is highly interesting.", time: "Yesterday" },
      { id: 202, sender: "me", text: "Thank you, Elena. I believe business operations should feel as premium and streamlined as the product itself.", time: "Yesterday" },
    ]
  }
];

export default function MessagesPage() {
  // Startup Tier Strategy: Toggle this to easily test both states in development
  const [isPremiumUser, setIsPremiumUser] = useState(false); 
  
  const [conversations, setConversations] = useState(MOCK_CONVERSATIONS);
  const [activeChatId, setActiveChatId] = useState(1);
  const [typedMessage, setTypedMessage] = useState("");

  const activeChat = conversations.find(c => c.id === activeChatId) || conversations[0];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedMessage.trim() || !isPremiumUser) return;

    // Append new message to active thread state
    const updatedConversations = conversations.map(chat => {
      if (chat.id === activeChatId) {
        return {
          ...chat,
          messages: [
            ...chat.messages,
            {
              id: Date.now(),
              sender: "me",
              text: typedMessage,
              time: "12:53 PM"
            }
          ]
        };
      }
      return chat;
    });

    setConversations(updatedConversations);
    setTypedMessage("");
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] py-12 px-6 lg:px-16">
      <div className="max-w-[85%] mx-auto bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 h-[75vh]">
        
        {/* LEFT COLUMN: CONVERSATION LEDGER (4 Columns) */}
        <aside className="md:col-span-4 border-r border-stone-200 flex flex-col bg-[#fdfcfb]">
          <div className="p-5 border-b border-stone-200 bg-white flex items-center justify-between">
            <div>
              <h1 className="font-serif text-[20px] text-stone-900 font-bold tracking-tight">Inbox</h1>
              <p className="text-stone-400 text-xs mt-0.5">High-intent client dialogs</p>
            </div>
            {/* Quick Developer Tier Status Toggle Badge */}
            <button 
              onClick={() => setIsPremiumUser(!isPremiumUser)}
              className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider transition-colors shadow-sm ${
                isPremiumUser ? "bg-[#801429] text-white" : "bg-stone-200 text-stone-600"
              }`}
            >
              {isPremiumUser ? "Premium Tier" : "Free Tier"}
            </button>
          </div>

          <div className="flex-grow overflow-y-auto divide-y divide-stone-100">
            {conversations.map((chat) => {
              const lastMsg = chat.messages[chat.messages.length - 1];
              const isActive = chat.id === activeChatId;
              
              return (
                <div
                  key={chat.id}
                  onClick={() => setActiveChatId(chat.id)}
                  className={`p-4 flex items-start space-x-3.5 cursor-pointer transition-colors relative ${
                    isActive ? "bg-white border-l-4 border-[#801429]" : "hover:bg-stone-50/60"
                  }`}
                >
                  <div className="w-11 h-11 rounded-full bg-stone-200 flex-shrink-0 relative flex items-center justify-center text-stone-400 font-bold text-xs uppercase">
                    {chat.name[0]}
                    {chat.unread && (
                      <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#801429] rounded-full ring-2 ring-white animate-pulse" />
                    )}
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-baseline justify-between">
                      <h3 className={`text-[14px] truncate ${chat.unread ? "font-bold text-stone-950" : "font-semibold text-stone-800"}`}>
                        {chat.name}
                      </h3>
                      <span className="text-[10px] text-stone-400 font-medium flex-shrink-0">{lastMsg?.time}</span>
                    </div>
                    <p className="text-stone-400 text-[11px] truncate mt-0.5">{chat.title} • {chat.location}</p>
                    <p className={`text-[12px] truncate mt-1.5 ${chat.unread ? "text-stone-900 font-medium" : "text-stone-500"}`}>
                      {lastMsg?.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* RIGHT COLUMN: CORE MESSAGING THREAD (8 Columns) */}
        <main className="md:col-span-8 flex flex-col h-full bg-[#FAFAF9]">
          
          {/* Active Chat Target Header */}
          <div className="p-4 bg-white border-b border-stone-200 flex items-center justify-between px-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 font-bold uppercase text-xs">
                {activeChat.name[0]}
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <h2 className="text-[15px] font-bold text-stone-900">{activeChat.name}</h2>
                  {activeChat.verified && <span className="text-emerald-600 text-xs font-bold" title="Verified Identity">✔</span>}
                </div>
                <p className="text-stone-400 text-[11px] font-medium">{activeChat.title} ({activeChat.location})</p>
              </div>
            </div>
          </div>

          {/* Dynamic Message Bubbles Stream */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4">
            {activeChat.messages.map((msg) => {
              const isMe = msg.sender === "me";
              return (
                <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[70%] rounded-2xl p-3.5 text-[13px] shadow-sm leading-relaxed ${
                    isMe 
                      ? "bg-[#801429] text-white rounded-br-none" 
                      : "bg-white text-stone-800 border border-stone-200/60 rounded-bl-none"
                  }`}>
                    <p>{msg.text}</p>
                    <span className={`block text-[9px] mt-1.5 text-right font-medium ${isMe ? "text-stone-200/80" : "text-stone-400"}`}>
                      {msg.time} {isMe && "• Delivered"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* INPUT CONTROL CONTROLLER / STARTUP TIER ENFORCEMENT */}
          <div className="p-4 bg-white border-t border-stone-200">
            {isPremiumUser ? (
              // Premium Messaging Access Panel
              <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={typedMessage}
                  onChange={(e) => setTypedMessage(e.target.value)}
                  placeholder={`Send a direct message to ${activeChat.name}...`}
                  className="flex-grow bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-[13.5px] text-stone-800 focus:outline-none focus:border-[#801429] focus:bg-white transition-all"
                />
                <button
                  type="submit"
                  disabled={!typedMessage.trim()}
                  className="bg-[#801429] text-white px-5 py-3 rounded-xl font-bold text-[13px] uppercase tracking-wide transition-colors hover:bg-[#6b1022] disabled:opacity-40 disabled:pointer-events-none shadow-sm"
                >
                  Send
                </button>
              </form>
            ) : (
              // High-Conversion Free Tier Paywall Banner Element
              <div className="bg-[#801429]/5 border-2 border-dashed border-[#801429]/20 rounded-xl p-4 text-center flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300">
                <div className="text-left sm:max-w-[70%]">
                  <h4 className="text-[#801429] font-bold text-[13.5px] uppercase tracking-wider">Premium Access Required</h4>
                  <p className="text-stone-500 text-xs mt-0.5 leading-relaxed">
                    You have unlocked high-intent alignment synergy with {activeChat.name}. Upgrade to a verified tier plan to exchange media and custom project specifications.
                  </p>
                </div>
                <button 
                  type="button"
                  onClick={() => setIsPremiumUser(true)}
                  className="bg-[#801429] text-white px-4 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider shadow-md hover:bg-[#6b1022] whitespace-nowrap transition-all transform hover:scale-[1.02]"
                >
                  Unlock Conversation
                </button>
              </div>
            )}
          </div>

        </main>
      </div>
    </div>
  );
}