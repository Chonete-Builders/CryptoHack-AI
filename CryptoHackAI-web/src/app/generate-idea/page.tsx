"use client"
import React, { useState } from 'react';

const GenerateIdea = () => {
  const [concept, setConcept] = useState('');
  const [technologies, setTechnologies] = useState('');

  return (
    <div className="min-h-screen bg-[#B4AB9A] flex flex-col items-center pt-12 px-4">
      <h1 className="text-2xl font-medium text-[#1E1E1E] mb-8">
        Generate a new Idea
      </h1>

      <div className="w-full max-w-lg space-y-6">
        <div className="space-y-2">
          <label 
            htmlFor="concept"
            className="block text-sm text-[#1E1E1E]"
          >
            Describe the concept you are thinking
          </label>
          <textarea
            id="concept"
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            className="w-full max-w-[545px] h-20 min-h-[80px] min-w-[240px] rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
            placeholder="Value"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="technologies"
            className="block text-sm text-[#1E1E1E]"
          >
            Technologies you are comfortable
          </label>
          <textarea
            id="technologies"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            className="w-full max-w-[545px] h-20 min-h-[80px] min-w-[240px] rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
            placeholder="Value"
          />
        </div>

        <button
          className="px-4 py-2 bg-[#2C2C2C] text-[#F5F5F5] rounded-md hover:bg-gray-700 transition-colors"
        >
          Generate new Idea
        </button>
      </div>
    </div>
  );
};

export default GenerateIdea;