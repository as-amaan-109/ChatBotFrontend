import React from 'react'
import myImage from "../../images/card5img.png";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
const Card3 = () => {
  return (
    <div className="my-2 w-11/12 md:w-10/12 mx-auto md:flex  md:items-center p-2 border border-violet-800 rounded-lg bg-gray-700 bg-opacity-30 backdrop-blur-mdbackdrop-blur-md">
    <div className="relative md:w-2/5">
      <img src={myImage} alt="img" className='aspect-square md:w-1/2 md:mx-auto'/>
    </div>
    <div className="mt-1 md:mt-0 ps-2 md:w-3/5">
      <h1 className="text-white text-2xl">
        <ChatBubbleOvalLeftIcon className="size-8 inline-block" />
        &nbsp; Supporting Teachers
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
  )
}

export default Card3