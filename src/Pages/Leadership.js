import React from "react";

export const leadershipRoles = [
  {
    title: "Founder",
    organization: "IEEE, Chicago State University",
    location: "Chicago",
    period: "Nov 2024 – May 2025",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7337328800176685057/",
    description: "Started IEEE to foster innovation and leadership among tech students. Organized events, built teams, and promoted technical excellence through peer-led learning."
  },
  {
    title: "Founder & President",
    organization: "Happy Motivato Foundation",
    location: "India",
    period: "Mar 2020 – Mar 2023",
    link: "https://happymotivato.netlify.app/",
    description:
      "Led an NGO focused on leadership, motivation, and bridging educational gaps. Delivered motivational talks, donated educational materials, and empowered underprivileged school students."
  },
  {
    title: "Senior Project Leader",
    organization: "We Are With You Charitable Trust",
    location: "India",
    period: "Oct 2021 – May 2022",
    description:
      "Joined as a volunteer and quickly promoted to Senior Project Leader. Organized blood donation drives, led motivational workshops, and became a core contributor to the team."
  },
  {
    title: "Alumni Head",
    organization: "Veltech University",
    location: "India",
    period: "Mar 2021 – Mar 2022",
    description:
      "Acted as the bridge between alumni and current students. Managed alumni relations, coordinated guest speaker sessions, and facilitated career guidance events."
  },
  {
    title: "Assistant School Pupil Leader",
    organization: "Sri Siddhartha Elite Techno School",
    location: "India",
    period: "Jun 2015 – 2016",
    description:
      "Began leadership journey by winning student elections with the highest vote count. Organized assemblies, managed school-wide events, and supervised extracurricular activities."
  }
];


export default function Leadership() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-heading dark:text-light-heading mb-4">
          Leadership Journey
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl">
          Started my leadership journey as <strong>Assistant School Pupil Leader</strong> with record-breaking student votes. Over the years, I took on multiple impactful roles that strengthened my communication and organizational skills—culminating in <strong>founding the IEEE branch at Chicago State University</strong> to empower fellow students.
        </p>
      </div>

      {leadershipRoles.map((role, index) => (
        <div key={index} className="mb-10 p-6 border border-gray-700 rounded-lg bg-gray-900 shadow hover:shadow-lg transition">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">{role.title}</h2>
              <p className="text-gray-400 text-md">
                {role.organization} · {role.location}
              </p>
            </div>
            <span className="text-sm bg-green-300 text-green-900 px-3 py-1 rounded-full mt-3 md:mt-0 inline-block">
              {role.period}
            </span>
          </div>
          <p className="text-gray-300 mt-3 text-base">{role.description}</p>
          {role.link && (
            <a
              href={role.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 text-blue-400 hover:text-blue-300 underline text-sm"
            >
              🔗 View More
            </a>
          )}
        </div>
      ))}
    </section>
  );
}
