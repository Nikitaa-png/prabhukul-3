import React from 'react';
import { processSteps } from '../../data/homeData';

const stepIcons = ['🌿', '⚙️', '🔬', '📦'];

export default function ManufacturingProcess() {
  return (
    <section className="w-full py-14" id="manufacturing-process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8922A] font-medium mb-2">From Resin to Table</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C]">Our Manufacturing Process</h2>
          <div className="mt-3 w-12 h-[2px]  mx-auto" />
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:flex items-start gap-0">
          {processSteps.map((step, i) => (
            <div key={step.step} className="flex-1 flex flex-col items-center text-center relative">
              {/* Connector line */}
              {i < processSteps.length - 1 && (
                <div className="absolute top-[22px] left-1/2 w-full h-[1px] bg-[#D4A64A]/40" />
              )}

              {/* Circle */}
              <div className="relative z-10 w-11 h-11 rounded-full  border-2 border-[#E6B747] flex items-center justify-center text-lg mb-4 shadow">
                <span>{stepIcons[i]}</span>
              </div>

              <span className="text-[10px] font-bold text-[#E6B747] uppercase tracking-wider mb-1">Step {step.step}</span>
              <h3 className="font-serif text-[15px] font-bold text-[#2D0B0C] mb-2 leading-tight px-2">{step.title}</h3>
              <p className="font-sans text-[11px] text-[#5C534E] leading-relaxed px-3">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="flex flex-col gap-6 md:hidden">
          {processSteps.map((step, i) => (
            <div key={step.step} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full  border-2 border-[#E6B747] flex items-center justify-center text-base shrink-0">
                  <span>{stepIcons[i]}</span>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="flex-1 w-[1px] bg-[#D4A64A]/40 my-1" />
                )}
              </div>
              <div className="pb-4">
                <span className="text-[10px] font-bold text-[#C8922A] uppercase tracking-wider">Step {step.step}</span>
                <h3 className="font-serif text-[15px] font-bold text-[#2D0B0C] mt-0.5 mb-1">{step.title}</h3>
                <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



