import React from "react";
import myImage from "../../images/card1img.png";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
const Card1 = () => {
  return (
    <div className="my-2 w-11/12 md:w-10/12 mx-auto md:flex md:flex-row-reverse md:items-center p-2 border border-violet-800 rounded-lg bg-gray-700 bg-opacity-30 backdrop-blur-mdbackdrop-blur-md">
      <div className="relative">
        <img src={myImage} alt="img" />
      </div>
      <div className="mt-1 md:mt-0 ps-2">
        <h1 className="text-white text-2xl">
          <AcademicCapIcon className="size-8 inline-block" />
          &nbsp; Personalized Learning
        </h1>
        <p>
          AI personalizes learning paths by analyzing individual student data,
          including performance, preferences, and learning styles. It adapts
          content delivery, pacing, and difficulty, providing tailored resources
          and feedback. This dynamic approach ensures each student receives a
          customized educational experience, enhancing engagement and optimizing
          learning outcomes.
        </p>
      </div>
    </div>
  );
};

export default Card1;
