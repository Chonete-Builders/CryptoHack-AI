"use client";
import { useState } from "react";
import IdeaCard from "./ToolsEditCard";
import { IDEAS, OTHER_TOOLS } from "./constants";

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState("ideas");

  return (
    <div className="min-h-screen text-gray-700 flex flex-col justify-center">
      <h1 className="text-2xl pt-5 md:pt-0 text-center ">Tools</h1>
      <div className=" flex justify-center pt-3">
        
        <nav className="space-x-4 flex justify-center items-center mx-auto">
          <button
            onClick={() => setActiveTab("ideas")}
            className={`px-3 py-1  ${activeTab === "ideas" ? "border-b border-teal-500 text-gray-500" : "text-gray-500"}`}
          >
            Ideas
          </button>
          <button
            onClick={() => setActiveTab("otherTools")}
            className={`px-3 py-1 rounded ${activeTab === "otherTools" ? "border-b border-teal-500 text-gray-500" : "text-gray-500"}`}
          >
            Other Tools
          </button>
        </nav>
      </div>
      <div className="my-6 flex justify-center items-center mx-auto">
        <button className="bg-gray-800 text-white px-4 py-2 rounded">Generate new Idea</button>   
      </div>
      <h1 className="text-2xl text-center "> {activeTab === "ideas" ? "Your Ideas" : "Other Tools"}</h1>
      <div className="p-6 ">
        <div className=" gap-4 md:mt-4 grid md:grid-cols-2 md:w-[65%] mx-auto">
          {(activeTab === "ideas" ? IDEAS : OTHER_TOOLS).map((tool) => (
            <IdeaCard key={tool.id} title={tool.title} description={tool.description} />
          ))}
        </div>
      </div>
    </div>
  );
}
