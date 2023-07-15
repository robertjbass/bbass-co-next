"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";

export default function Home() {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    if (animationStage === 6) return;
    const timeout = setTimeout(() => {
      setAnimationStage((old) => old + 1);
    }, 1050);

    return () => clearTimeout(timeout);
  }, [animationStage]);

  return (
    <Layout>
      <div>
        <div className="text-5xl mb-2">Bob Bass</div>
        <div className="flex">
          <div className="mr-2">
            <div
              style={{
                height: `${animationStage * 25}%`,
                opacity: animationStage === 5 ? "0" : "auto",
              }}
              className="flex transition-all animate-labels"
            >
              <div className="mt-auto h-6 animate-opacity animate-delay-1000">
                I'm a
              </div>
            </div>
          </div>

          <div
            className={[
              "transition-all",
              animationStage < 5 ? "translate-x-0" : "-translate-x-10",
            ].join(" ")}
          >
            <div className="animate-labels flex-grow">
              <div className="animate-opacity animate-delay-1000">
                Software Engineer
              </div>
              <div className="animate-opacity animate-delay-2000">
                Rapid Prototyper
              </div>
              <div className="animate-opacity animate-delay-3000">
                Startup Founder
              </div>
              <div className="animate-opacity animate-delay-4000">
                Full-Stack Dev
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-0 md:ml-8 mt-8 md:mt-0 z-50 transition-all flex">
        <img src="headshot.jpg" className="h-36 w-36 rounded-full m-auto" />
      </div>
    </Layout>
  );
}
