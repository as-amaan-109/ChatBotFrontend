import React, { useState, useRef, useEffect } from "react";
import {
  ArrowUpCircleIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./chatai.css";
import botimg from "../images/chatai.png";
import AiResponse from "./AiResponse";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import LoggedChatAside from "./LoggedChatAside";
import AiResponse from "./AiResponse";

const LoggedChat = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [chat, setChat] = useState([]);
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
    //   generateResponse("Hello");
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
    <>
      <div className="navbar px-3 md:px-8 py-2 bg-violet-500 flex items-center justify-between">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Link to="/">
          <img src={Logo} alt="" className="w-24" />
        </Link>
        <div className="mr-2">
          <button className="px-6 py-2 bg-white text-violet-700 rounded-full">
            Logout
          </button>
        </div>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700">
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-700">
                <LoggedChatAside />
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
      {/* <div className="relative  w-full ">
          
          <div
            ref={chatContainerRef}
            className="relative my-1 w-full md:w-10/12 mx-auto p-4 scrollbar chatbox rounded-lg min-h-[30rem] max-h-[40rem] md:max-h-[30rem] h-auto bg-gray-800 overflow-hidden overflow-y-scroll pb-20"
            id="style-1"
          >
            {chat.map((val, ind) =>
              val.request ? (
                <div className=" my-2 block" key={ind}>
                  <UserCircleIcon className="size-6 my-2" />
                  <span className="bg-violet-500 p-2 rounded-md inline-block">
                    {val.request}
                  </span>
                </div>
              ) : (
                <div className=" my-2 w-full" key={ind}>
                  <img src={botimg} alt="ai" className="w-5 h-5 m-1" />
                  <div className="bg-slate-700 p-2 rounded-md ">
                    <AiResponse>{val.response}</AiResponse>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="prompt-area fixed bottom-1 left-1/2 -translate-x-1/2 w-full md:w-8/12 flex items-end max-h-[500px] rounded-lg py-2 px-4 bg-gray-900 ">
          <div
            className={`fixed z-40 w-11/12 md:w-full -top-10 md:-top-10 left-1/2 -translate-x-1/2 rounded-full py-2 px-4 bg-violet-500 ${
              isGenerating ? "block" : "hidden"
            }`}
          >
            <Cog6ToothIcon className="size-6 inline-block animate-spin" />
            Generating Response
          </div>
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
                setPrompt("");
              }}
            >
              <ArrowUpCircleIcon className="size-8 m-2" />
            </button>
          </div>
        </div> */}
      <div className=" border min-h-[90vh] md:h-[90vh] md:flex justify-center items-stretch">
        <div className="border bg-black h-full w-3/12 py-5 hidden md:block">
        <LoggedChatAside/>
        </div>
        <div className="border h-[90vh] md:w-9/12 relative">
          {/* <div className="relative  w-full "> */}
          <div
            ref={chatContainerRef}
            className="relative my-1 w-full md:w-10/12 mx-auto p-4 scrollbar chatbox rounded-lg min-h-9/12 h-5/6 md:max-h-[30rem]  bg-gray-800 overflow-hidden overflow-y-scroll pb-20"
            id="style-1"
          >
            {chat.map((val, ind) =>
              val.request ? (
                <div className=" my-2 block" key={ind}>
                  <UserCircleIcon className="size-6 my-2" />
                  <span className="bg-violet-500 p-2 rounded-md inline-block">
                    {val.request}
                  </span>
                </div>
              ) : (
                <div className=" my-2 w-full" key={ind}>
                  <img src={botimg} alt="ai" className="w-5 h-5 m-1" />
                  <div className="bg-slate-700 p-2 rounded-md ">
                    <AiResponse>{val.response}</AiResponse>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="prompt-area absolute bottom-1 left-1/2 -translate-x-1/2 w-full md:w-8/12 flex items-end max-h-[500px] rounded-lg py-2 px-4 bg-gray-900 ">
            <div
              className={`fixed z-40 w-11/12 md:w-full -top-10 md:-top-10 left-1/2 -translate-x-1/2 rounded-full py-2 px-4 bg-violet-500 ${
                isGenerating ? "block" : "hidden"
              }`}
            >
              <Cog6ToothIcon className="size-6 inline-block animate-spin" />
              Generating Response
            </div>
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
                setPrompt("");
              }}
            >
              <ArrowUpCircleIcon className="size-8 m-2" />
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default LoggedChat;
