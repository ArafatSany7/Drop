import React from "react";
import { Helmet } from "react-helmet-async";
import DonorRegistration from "../Donor/DonorRegistration";

const Registration = () => {
  return (
    <div className="registration-container pt-28 pb-16 px-4 lg:px-8 min-h-screen bg-base-100">
      <Helmet>
        <title> Drop | Registration</title>
      </Helmet>
      <DonorRegistration></DonorRegistration>
    </div>
  );
};

export default Registration;
