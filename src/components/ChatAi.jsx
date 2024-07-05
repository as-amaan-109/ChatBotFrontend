import React, { useState, useRef, useEffect } from "react";
import {
  ArrowUpCircleIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import "./chatai.css";
import botimg from "../images/chatai.png";
import Markdown from "markdown-to-jsx";

const ChatAi = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [chat, setChat] = useState([
    {
      response: "Hello How can I help you?",
    },
  ]);
  const textareaRef = useRef(null);
  const chatContainerRef = useRef(null);

  async function generateResponse(text) {
    try {
      setIsGenerating(true);
      const response = await fetch(process.env.REACT_APP_BOT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: text }),
      });
      const data = await response.json();
      console.log(data);
      setChat((prevData) => [...prevData, data]);
      setIsGenerating(false);
    } catch (err) {
      alert(err);
      setIsGenerating(false);
    }
  }

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const adjustHeight = () => {
        textarea.style.height = "auto"; // Reset the height
        if (textarea.scrollHeight <= 500) {
          textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scroll height if less than 500px
          textarea.style.overflowY = "hidden"; // Hide the scrollbar
        } else {
          textarea.style.height = "500px"; // Set the height to 500px
          textarea.style.overflowY = "scroll"; // Show the scrollbar
        }
      };

      // Adjust height on input
      textarea.addEventListener("input", adjustHeight);

      // Initial adjustment
      adjustHeight();

      // Cleanup event listener on component unmount
      return () => {
        textarea.removeEventListener("input", adjustHeight);
      };
    }
  }, []);

  useEffect(() => {
    scrollDown();
  }, [chat]);

  const scrollDown = () => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  return (
    <div className="relative h-screen w-full ">
      <div
          className={`absolute z-40 w-full top-0 py-2 px-4 bg-violet-500 ${
            isGenerating ? "block" : "hidden"
          }`}
        >
          <Cog6ToothIcon className="size-6 inline-block animate-spin" />
          Generating Response
        </div>
      <div
        ref={chatContainerRef}
        className="relative my-1 w-full md:w-10/12 mx-auto p-4 scrollbar chatbox rounded-lg max-h-[85vh] h-[85vh] bg-gray-800 overflow-hidden overflow-y-scroll"
        id="style-1"
      >
        
        {chat.map((val, ind) =>
          val.request ? (
            <div className=" my-2 block" key={ind}>
              <UserCircleIcon className="size-6 my-2" />
              <span className="bg-violet-500 p-2 rounded-md inline-block">{val.request}</span>
            </div>
          ) : (
            <div className=" my-2 w-full" key={ind}>
              <img src={botimg} alt="ai" className="w-5 h-5 m-1" />
              <div className="bg-slate-500 p-2 rounded-md ">
                <Markdown>{val.response}</Markdown>
              </div>
            </div>
          )
        )}
      </div>
      <div className="prompt-area my-2 relative bottom-1 left-1/2 -translate-x-1/2 w-11/12 md:w-8/12 flex items-end max-h-[500px] rounded-lg pt-2 bg-gray-900">
        <textarea
          ref={textareaRef}
          type="text"
          className="w-10/12 md:w-11/12 text-white bg-transparent rounded-xl border mx-1 p-2"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          cols={"auto"}
        />
        <button
          className="bg-violet-500 rounded-full hover:bg-violet-800"
          onClick={() => {
            setChat((prevData) => [...prevData, { request: prompt }]);
            generateResponse(prompt);
            setPrompt("")
          }}
        >
          <ArrowUpCircleIcon className="size-8 m-2" />
        </button>
      </div>
    </div>
  );
};

export default ChatAi;
