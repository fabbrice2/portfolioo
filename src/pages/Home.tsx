import React from "react";
import Header from "../components/Header";
import WorkComponent from "../components/WorkComponent";
import SelectedWork from "../components/SelectedWork";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <WorkComponent />
      <SelectedWork />
      <Footer />
    </div>
  );
};

export default Home;
