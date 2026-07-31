"use client";

import { useState } from "react";
import About from "@/app/sections/About";
import Skills from "@/app/sections/Skills";
import Experience from "@/app/sections/Experience";
import Projects from "@/app/sections/Projects";
import Education from "@/app/sections/Education";
import type { Dictionary } from "@/app/i18n/dictionaries";
import type { Locale } from "@/app/i18n/config";

type TabId = "about" | "skills" | "experience" | "projects" | "education";

type TabsProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export default function Tabs({ dictionary, locale }: TabsProps) {
  const alternateLocale = locale === "en" ? "es" : "en";
  const localeTooltip =
    alternateLocale === "es" ? "Cambiar a Español" : "Change to English";

  const tabs: Array<{ id: TabId; label: string }> = [
    { id: "about", label: dictionary.nav.about },
    { id: "skills", label: dictionary.nav.skills },
    { id: "experience", label: dictionary.nav.experience },
    { id: "projects", label: dictionary.nav.projects },
    { id: "education", label: dictionary.nav.education },
  ];

  const tabContent: Record<TabId, React.ReactNode> = {
    about: <About profile={dictionary.profile} />,
    skills: <Skills skills={dictionary.skills} />,
    experience: <Experience experience={dictionary.experience} />,
    projects: <Projects projects={dictionary.projects} />,
    education: <Education education={dictionary.education} />,
  };

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="w-full px-4 pb-12 sm:px-10 sm:pb-16">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-end justify-between gap-3">
          <div className="tab-scroll -mx-1 overflow-x-auto overflow-y-hidden px-1 sm:overflow-visible">
            <div className="flex min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative whitespace-nowrap rounded-t-lg border border-black px-3 py-2 text-xs font-medium transition-colors focus:outline-none sm:px-4 sm:text-sm ${
                    activeTab === tab.id
                      ? "z-10 -mb-px border-b-[#f7f7f7] bg-[#f7f7f7] text-black"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="group relative hidden shrink-0 sm:mb-2 sm:block">
            <a
              href={`/${alternateLocale}`}
              aria-label={localeTooltip}
              title={localeTooltip}
              className="inline-flex items-center justify-center border border-black bg-[#f7f7f7] px-3 py-1 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
            >
              {alternateLocale.toUpperCase()}
            </a>
            <span className="pointer-events-none absolute -top-10 right-0 z-20 hidden whitespace-nowrap border border-black bg-black px-2 py-1 text-[11px] text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
              {localeTooltip}
            </span>
          </div>
        </div>
        <div className="min-h-[24rem] rounded-b-lg rounded-tr-lg border border-black bg-[#f7f7f7] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:min-h-[28rem] sm:p-10 sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          {tabContent[activeTab]}
        </div>
      </div>
    </section>
  );
}
