import { useState } from "react";
import { Send, Smile, Paperclip } from "lucide-react";
import ChatHeader from "../components/ChatHeader";
import profile1 from "../assets/images/profile_3.webp";


export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Merhaba, hoş geldiniz!", from: "other", time: "10:00" },
    { id: 2, text: "Merhaba, bir şey soracaktım.", from: "me", time: "10:01" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMsg = {
      id: Date.now(),
      text: input,
      from: "me",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, newMsg]);
    setInput("");
  };

  const onBack = () => {
    return window.history.back();
  }
  const user = { id: 1, name: "Ahmet", avatar: profile1, active: true }

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Üst Bar */}
      <ChatHeader 
      onBack={onBack}
      user={user}
      />

      {/* Mesajlar */}
      <div className="flex-1 overflow-y-auto px-1 py-2 space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`sm:max-w-lg max-w-xs px-4 py-2 rounded-xl text-sm relative ${
              msg.from === "me"
                ? "bg-green-600 text-white ml-auto"
                : "bg-gray-700 text-gray-100 mr-auto"
            }`}
          >
            {msg.text}
            <div className="text-[10px] text-gray-300 text-right mt-1">{msg.time}</div>
          </div>
        ))}
      </div>

      {/* Yazma Alanı */}
      <div className="bg-gray-800 p-3 flex items-center gap-2">
        <button className="text-gray-400 hover:text-white">
          <Smile size={22} />
        </button>
        <button className="text-gray-400 hover:text-white">
          <Paperclip size={22} />
        </button>
        <input
          type="text"
          className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-full outline-none"
          placeholder="Mesaj yaz..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="text-green-500 hover:text-green-400 transition"
        >
          <Send size={22} />
        </button>
      </div>
    </div>
  );
}
