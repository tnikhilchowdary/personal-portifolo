import React from "react";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-w-5xl px-4 pt-10 pb-20">
      {/* About Me Section */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-heading dark:text-light-heading mb-4">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl">
          {personalDetails.about}
        </p>
      </section>

      {/* Achievements Section */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-dark-heading dark:text-light-heading mb-6">
          Achievements & Honors
        </h1>

        <div className="mb-8 p-6 border border-yellow-400 rounded-lg bg-gray-900 shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-white">
            Honors Degree in Computer Science
          </h2>
          <p className="text-gray-300 mt-2 text-base">
            Awarded an Honors Degree in Computer Science for exceptional academic performance and consistent excellence in coursework.
          </p>
          <a
            href="https://www.csu.edu/honorsconvocation/arts_sciences_awards.htm"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 text-blue-400 hover:text-blue-300 underline text-sm"
          >
            🔗 View Official Link
          </a>
        </div>
      </section>


      {/* Education Section */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-dark-heading dark:text-light-heading mb-6">
          Education
        </h1>
        {eduDetails.map((edu, index) => (
          <div
            key={index}
            className="mb-8 p-6 border border-gray-700 rounded-lg bg-gray-900 shadow hover:shadow-lg transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">{edu.Position}</h2>
                <p className="text-gray-400 text-md">
                  {edu.Company} · {edu.Location}
                </p>
              </div>
              <span className="text-sm bg-blue-200 text-blue-900 px-3 py-1 rounded-full mt-3 md:mt-0 inline-block">
                {edu.Type}
              </span>
            </div>
            <p className="text-gray-300 mt-3 text-base">{edu.Duration}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default About;
