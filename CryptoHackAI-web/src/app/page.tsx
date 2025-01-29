'use client';

import React, { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: 'user', content: input }]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error communicating with the API.');
      }

      // Add the assistant's response to the chat
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.response },
      ]);
    } catch (error) {
      console.error('Error during prediction:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again later.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: { key: string; preventDefault: () => void }) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('./background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className=" shadow-md rounded p-8 w-full max-w-3xl">
        <div className="p-4 mb-4 overflow-y-auto relative bg-customGreen/80 bg-opacity-100 rounded-lg item flex items-center justify-center">
          <h2 className="text-3xl font-bold  text-teal-800 text-center ">
           Crypto AI Chat 
          </h2>
        </div>
        <div className="p-4 overflow-y-auto relative h-96 bg-customGreen/50 bg-opacity-40 rounded-lg">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.role === 'assistant'
                  ? 'text-left text-blue-800'
                  : 'text-right text-green-800'
              }`}
            >
              <p
                className={`inline-block px-4 py-2 rounded ${
                  msg.role === 'assistant' ? 'bg-blue-200' : 'bg-green-200'
                }`}
              >
                {msg.content}
              </p>
            </div>
          ))}
          {/* </div> */}
        </div>
        <div className="mt-4 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-blue-300 rounded-l focus:outline-none focus:ring-0 focus:border-blue-300 text-black"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className={`px-4 py-2 bg-blue-600 text-white font-semibold rounded-r ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </section>

    // <section className="min-h-screen flex items-center justify-center bg-teal-50 p-4">
    //   <div className="bg-white shadow-md rounded p-8 w-full max-w-3xl">
    //     <h2 className="text-3xl font-bold mb-4 text-teal-800">Chat Dashboard</h2>
    //     <div className="border border-teal-300 rounded p-4 h-96 overflow-y-auto bg-teal-100">
    //       {messages.map((msg, index) => (
    //         <div
    //           key={index}
    //           className={`mb-2 ${
    //             msg.role === "assistant" ? "text-left text-teal-800" : "text-right text-teal-600"
    //           }`}
    //         >
    //           <p
    //             className={`inline-block px-4 py-2 rounded ${
    //               msg.role === "assistant" ? "bg-teal-200" : "bg-teal-300"
    //             }`}
    //           >
    //             {msg.content}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="mt-4 flex">
    //       <input
    //         type="text"
    //         value={input}
    //         onChange={(e) => setInput(e.target.value)}
    //         onKeyDown={handleKeyDown}
    //         placeholder="Type your message..."
    //         className="flex-1 px-4 py-2 border border-teal-300 rounded-l focus:outline-none focus:ring-0 focus:border-teal-300 text-black"
    //       />
    //       <button
    //         onClick={handleSend}
    //         disabled={loading}
    //         className={`px-4 py-2 bg-teal-600 text-white font-semibold rounded-r ${
    //           loading ? "opacity-50 cursor-not-allowed" : "hover:bg-teal-700"
    //         }`}
    //       >
    //         {loading ? "Sending..." : "Send"}
    //       </button>
    //     </div>
    //   </div>
    // </section>
  );
}
