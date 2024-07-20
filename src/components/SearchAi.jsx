import { useState } from "react";
import GuestChat from "./GuestChat";
import LoggedChat from "./LoggedChat";
import { useAuth0 } from "@auth0/auth0-react";
const SearchAi = (props) => {
  const {isAuthenticated,user,loginWithRedirect,logout} = useAuth0();
  const [isLoggedin,setIsLoggedin] = useState(isAuthenticated)
  console.log("Chat ai ", isAuthenticated,user);
  return(
    <>
    {isLoggedin?<LoggedChat logout={logout} user={user}/>:<GuestChat loginWithRedirect={loginWithRedirect}/>}
    </>
  );
};

export default SearchAi;
