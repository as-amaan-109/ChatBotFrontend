import React from "react";

const GetStarted = () => {
  return (
    <div className="px-2 py-20 relative overflow-hidden">
        <div className="absolute -bottom-40 md:bottom-2/3 left-1/2 -z-10 w-[300px] h-[300px] bg-violet-600 rounded-full -translate-x-1/2 blur-[90px]"></div>
        <div className="absolute -bottom-40 md:-bottom-2/3 left-1/2 -z-10 w-[300px] h-[300px] bg-violet-600 rounded-full -translate-x-1/2 blur-[90px]"></div>
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight sm:text-6xl text-white">
          Take Control of Your Learning
        </h1>
        <p className="mt-6 text-lg leading-8 px-2 md:px-1">
          AI automates grading and provides instant feedback, saving time for
          teachers and offering insights into student performance. This
          efficiency enhances learning experiences and helps educators focus on
          personalized instruction.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-3xl bg-white text-violet-700 px-3.5 py-2.5 text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
