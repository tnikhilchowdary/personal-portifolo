import React from "react";

const leadershipRoles = [
  {
    title: "Founder",
    organization: "IEEE, Chicago State University",
    location: "Chicago",
    period: "Nov 2024 – May 2025",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7337328800176685057/",
    description: "Started IEEE to foster innovation and leadership among tech students."
  },
  {
    title: "Founder & President",
    organization: "Happy Motivato Foundation",
    location: "India",
    period: "Mar 2020 – Mar 2023",
    link: "https://happymotivato.netlify.app/",
    description:
      "Led an NGO focused on leadership, motivation, and bridging educational gaps. Delivered motivational talks and donated books to underprivileged students."
  },
  {
    title: "Senior Project Leader",
    organization: "We Are With You Charitable Trust",
    location: "India",
    period: "Oct 2021 – May 2022",
    description:
      "Organized blood donation camps, led motivational school sessions, and served as a core team leader."
  },
  {
    title: "Alumni Head",
    organization: "Veltech University",
    location: "India",
    period: "Mar 2021 – Mar 2022",
    description:
      "Coordinated communication between students and the university, managing events and alumni engagement."
  },
  {
    title: "Assistant School Pupil Leader",
    organization: "Sri Siddhartha Elite Techno School",
    location: "India",
    period: "Jun 2015 – 2016",
    description:
      "Led school assemblies, managed events and discipline, and supervised all sports and extracurricular activities."
  }
];

export default function Leadership() {
  return (
    <section className="container mx-auto max-width py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-dark-heading dark:text-light-heading pb-8">
        Leadership
      </h1>

      {leadershipRoles.map((role, index) => (
        <div key={index} className="mb-10 border-b border-gray-700 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                {role.title}
              </h2>
              <p className="text-lg text-gray-400">
                {role.organization} · {role.location}
              </p>
            </div>
            <span className="text-sm bg-green-200 text-green-900 px-3 py-1 rounded-full mt-3 md:mt-0">
              {role.period}
            </span>
          </div>
          <p className="text-base md:text-lg text-gray-300 mt-3">
            {role.description}
          </p>
          {role.link && (
            <a
              href={role.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 text-sm underline mt-2 inline-block"
            >
              View More
            </a>
          )}
        </div>
      ))}
    </section>
  );
}
