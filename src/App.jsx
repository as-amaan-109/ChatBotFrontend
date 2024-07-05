import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import FeaturePage from "./components/FeaturePage";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Whyus from "./components/Whyus";

const App = () => {
  return (
    <>
      <div className="relative">
        <Header />
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
