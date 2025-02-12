"use client";

import React, { useState } from "react";

const ELIZA_API_URL = "http://localhost:3000";
const AGENT_ID = "b850bc30-45f8-0041-a00a-83df46d8555d";

export default function Home() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
  if (!input.trim()) return;

  // Add user's message to chat
  setMessages((prev) => [...prev, { role: "user", content: input }]);
  setInput("");
  setLoading(true);

  try {
    const response = await fetch(`${ELIZA_API_URL}/${AGENT_ID}/message`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: input.trim(),
        userId: "1",
        roomId: 1,
        userName: "User",
        unique: true,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Error communicating with Eliza.");
    }

    // FIX: Ensure we extract the correct text from the array response
    const elizaMessage = data[0]?.text || "No response from Eliza.";

    setMessages((prev) => [...prev, { role: "assistant", content: elizaMessage }]);
  } catch (error) {
    console.error("Error:", error);
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "Sorry, I encountered an error. Please try again later." },
    ]);
  } finally {
    setLoading(false);
  }
};

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('./background.jpg')" }}>
      <div className="shadow-md rounded p-8 w-full max-w-3xl bg-white">
        <div className="p-4 mb-4 bg-customGreen/80 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-teal-800">Crypto AI Chat</h2>
        </div>

        <div className="p-4 overflow-y-auto h-96 bg-customGreen/50 rounded-lg">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.role === "assistant" ? "text-left text-blue-800" : "text-right text-green-800"}`}>
              <p className={`inline-block px-4 py-2 rounded ${msg.role === "assistant" ? "bg-blue-200" : "bg-green-200"}`}>
                {msg.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-blue-300 rounded-l focus:outline-none focus:ring-0 focus:border-blue-300 text-black"
            disabled={loading}
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className={`px-4 py-2 bg-blue-600 text-white font-semibold rounded-r ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </section>
  );
}
