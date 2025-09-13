import Image from "next/image";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE NOW
      </p>

      <div className="container mx-auto">
        {/* Grid for layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-3 mt-7">
          {/* Card 1 */}
          <div className="flex items-center gap-4">
            <Image
              src="/FirstProject.png"
              width={150}
              height={150}
              alt="OMAR ECH CHENYGRY - UX Design Project"
              className="object-contain w-[150px] h-[150px] shrink-0"
            />
            <div className="p-3 pl-0">
              <p className="text-white font-semibold text-xl">Movie Web App</p>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                A comprehensive movie discovery platform with search, ratings,
                reviews, and personalized recommendations built with React.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4">
            <Image
              src="/SecondProject.png"
              width={150}
              height={150}
              alt="OMAR ECH CHENYGRY - UX Design Project"
              className="object-contain w-[150px] h-[150px] shrink-0"
            />
            <div className="p-3 pl-0">
              <p className="text-white font-semibold text-xl">Calorie Tracker</p>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                A nutrition tracking application that helps users monitor their
                daily calorie intake, set goals, and track progress with detailed
                analytics.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4">
            <Image
              src="/ThirdProject.png"
              width={150}
              height={150}
              alt="OMAR ECH CHENYGRY - UX Design Project"
              className="object-contain w-[150px] h-[150px] shrink-0"
            />
            <div className="p-3 pl-0">
              <p className="text-white font-semibold text-xl">
                Money Management
              </p>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                A comprehensive personal finance application for budgeting,
                expense tracking, and financial goal management with data
                visualization.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center gap-4">
            <Image
              src="/FourProject.png"
              width={150}
              height={150}
              alt="OMAR ECH CHENYGRY - UX Design Project"
              className="object-contain w-[150px] h-[150px] shrink-0"
            />
            <div className="p-3 pl-0">
              <p className="text-white font-semibold text-xl">Video Downloader</p>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                A desktop application for downloading YouTube videos and audio
                in various formats with quality selection and batch processing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
