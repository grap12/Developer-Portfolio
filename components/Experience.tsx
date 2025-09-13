import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl">
        {/* Full Stack Web Developer (React & Laravel) — Freelance */}
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src="/WebHR.svg"
              height={30}
              width={30}
              alt="Full Stack Web Developer"
            />
            <p className="text-gray-300">
              <span className="font-semibold">Full Stack Web Developer (React & Laravel) /</span> Freelance
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            Jan 2023 - Present
          </p>
        </div>
        <ul className="text-gray-300 pt-3 pl-5 list-disc">
          <li>
            Developed dynamic web applications with React.js for responsive, user-friendly interfaces.
          </li>
          <li>
            Built and maintained secure backend systems using Laravel (PHP) with RESTful APIs and database integrations.
          </li>
          <li>
            Collaborated with clients to design and deliver scalable full stack solutions tailored to business needs.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="bg-transparent mt-2 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            React.js
          </div>
          <div className="bg-transparent mt-2 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Laravel
          </div>
          <div className="bg-transparent mt-2 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            PHP
          </div>
          <div className="bg-transparent mt-2 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent mt-2 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            RESTful APIs
          </div>
          <div className="bg-transparent mt-2 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Databases
          </div>
        </div>

        {/* Cyber Security Analyst — Freelance */}
        <div className="md:flex md:flex-row md:justify-between pt-10">
          <div className="flex items-center gap-3">
            <Image
              src="/security.png"
              height={30}
              width={30}
              alt="Cyber Security Analyst"
            />
            <p className="text-gray-300">
              <span className="font-semibold">Cyber Security Analyst /</span> Freelance
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            Mar 2022 - Present
          </p>
        </div>
        <ul className="text-gray-300 pt-3 pl-5 list-disc">
          <li>
            Conducted vulnerability assessments and penetration testing on web applications and networks.
          </li>
          <li>
            Implemented threat modeling and incident response procedures for simulated attack scenarios.
          </li>
          <li>
            Delivered actionable reports to clients, improving system resilience and reducing risk exposure.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="bg-transparent mt-2 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Vulnerability Assessment
          </div>
          <div className="bg-transparent mt-2 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Penetration Testing
          </div>
          <div className="bg-transparent mt-2 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Threat Modeling
          </div>
          <div className="bg-transparent mt-2 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Incident Response
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
