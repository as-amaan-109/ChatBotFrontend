import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import FeaturePage from "./components/FeaturePage";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Whyus from "./components/Whyus";
import { useAuth0 } from '@auth0/auth0-react'
const App = () => {
  const {  user, isAuthenticated,loginWithRedirect,logout }  = useAuth0();
  const [LoginStatus,setLoginStatus] = useState({
    isAuthenticated:false,
    user:null,
  })
 useEffect(()=>{
  if(isAuthenticated){
    setLoginStatus({
      isAuthenticated:isAuthenticated,
      user:user
    })
  }
  console.log("APP : isLoggedIn",isAuthenticated , user);
 },[isAuthenticated])
  return (
    <>
      <div className="relative">
        <Header loginWithRedirect={loginWithRedirect} logout={logout} isAuthenticated={isAuthenticated} user={user}/>
        <LandingPage />
        <FeaturePage/>
        <Whyus/>
        <GetStarted/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
