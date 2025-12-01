import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Drop | Home</title>
      </Helmet>
      <div>
        <p className="text-9xl font-poppins">This is a Home</p>
      </div>
    </div>
  );
};

export default Home;
