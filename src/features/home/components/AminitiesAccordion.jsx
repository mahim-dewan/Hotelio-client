"use client";
import { aminitiesFAQ } from "@/data/faqs";
import { useState } from "react";

const AmenitiesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFeature = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-primary text-light">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-light mb-12 text-center">
          Modern Convenience
        </h2>
        <div className="space-y-4">
          {aminitiesFAQ.map((f, i) => {
            const isActive = activeIndex === i;

            return (
              <div
                key={i}
                onClick={() => toggleFeature(i)}
                className="border-b border-light pb-6 cursor-pointer"
              >
                <div className="flex justify-between items-center py-4">
                  <h3
                    className={`text-xl transition-colors ${
                      isActive ? "text-highlight" : ""
                    }`}
                  >
                    {f.title}
                  </h3>

                  <span
                    className={`text-2xl font-light transition-transform duration-300 ${
                      isActive ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>

                <p
                  className={`overflow-hidden transition-all duration-500 text-light/80 leading-relaxed ${
                    isActive ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesAccordion;
