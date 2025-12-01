import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Motto from "../Motto/Motto";
import Collaborators from "../../Collaborators/Collaborators";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Drop | Home</title>
      </Helmet>
      <Banner></Banner>
      <Motto></Motto>
      <Collaborators></Collaborators>
    </div>
  );
};

export default Home;
