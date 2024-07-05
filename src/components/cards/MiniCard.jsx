import React from "react";

const MiniCard = (props) => {
  return (
    <div className="md:w-1/3 m-1 p-2 py-1 mt-1 md:mt-0 border border-violet-800 rounded-lg bg-gray-700 bg-opacity-30 backdrop-blur-mdbackdrop-blur-md">
      <div>
        <img src={props.img} alt="img" className="aspect-square" />
      </div>
      <div className="mt-1 p-2">
        <h1 className="text-white text-lg">
          {props.icon}&nbsp;
          {props.title}
        </h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default MiniCard;
