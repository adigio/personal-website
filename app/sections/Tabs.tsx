"use client";

import { useState } from "react";
import About from "@/app/sections/About";
import Skills from "@/app/sections/Skills";
import Experience from "@/app/sections/Experience";
import Projects from "@/app/sections/Projects";

const tabs = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const tabContent: Record<string, React.ReactNode> = {
  about: <About />,
  skills: <Skills />,
  experience: <Experience />,
  projects: <Projects />,
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="w-full px-6 pb-16 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative border border-black px-4 py-2 text-sm font-medium transition-colors focus:outline-none rounded-t-lg ${
                activeTab === tab.id
                  ? "z-10 bg-[#f7f7f7] text-black border-b-transparent -mb-px"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="min-h-[28rem] rounded-b-lg rounded-tr-lg border border-black bg-[#f7f7f7] p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] sm:p-10">
          {tabContent[activeTab]}
        </div>
      </div>
    </section>
  );
}
