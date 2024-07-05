import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-20 relative">
        <div className="absolute w-80 h-80 rounded-full  bg-violet-700 -z-10 top-1/2 left-1/2 blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>

      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
          Revolutionize Learning with  Search.AI
        </h1>
        <p className="mt-6 text-lg leading-8 px-2 md:px-1">
          Harnessing AI to tailor learning experiences, create engaging content,
          and support educators
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/chatai"
            className="rounded-3xl bg-white text-violet-700 px-3.5 py-2.5 text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </Link>
          <a href="#" className="text-sm font-semibold leading-6">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
