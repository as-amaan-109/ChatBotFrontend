import React from "react";
import card2img from "../../images/card2img.png";
import card3img from "../../images/card3img.png";
import card4img from "../../images/card4img.png";
import MiniCard from "./MiniCard";
import { QrCodeIcon,RectangleGroupIcon,WrenchScrewdriverIcon } from "@heroicons/react/20/solid";
const Card2 = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto   md:flex justify-between relative">
        <div className="absolute w-64 h-64 bg-violet-600 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full -z-10"></div>
      <MiniCard
        img={card2img}
        icon={<QrCodeIcon className="size-6 inline-block"/>}
        title="Improving Accessibility"
        text="Education accessibility features include text-to-speech, translation, adaptive learning interfaces, screen readers, captioning, voice recognition, customizable text sizes, high-contrast modes, and keyboard navigation, ensuring inclusivity for all students.."

      />
      <MiniCard
        img={card3img}
        icon={<RectangleGroupIcon className="size-6 inline-block"/>}
        title="Engaging Content Creation"
        text="AI personalizes learning paths by analyzing individual student needs
            and learning styles, adapting content dynamically to optimize
            engagement and comprehension, ensuring a tailored educational
            experience for each learner."

      />
      <MiniCard
        img={card4img}
        icon={<WrenchScrewdriverIcon className="size-6 inline-block"/>}
        title="Automating Assessments"
        text="AI automates grading by analyzing student responses, providing instant feedback, and generating performance insights, saving teachers time and enabling personalized learning by identifying strengths and areas for improvement."

      />
      
    </div>
  );
};

export default Card2;
