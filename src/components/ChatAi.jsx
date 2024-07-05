import { useState } from "react";
import GuestChat from "./GuestChat";
import LoggedChat from "./LoggedChat";

const ChatAi = () => {
  const [isLoggedin,setIsLoggedin] = useState(false)
  return(
    <>
    {isLoggedin?<LoggedChat/>:<GuestChat/>}
    </>
  );
};

export default ChatAi;
