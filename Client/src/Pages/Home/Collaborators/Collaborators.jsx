import React from "react";

const Collaborators = () => {
  return (
    <div className="my-5 px-6">
      <h1 className="text-center py-5 text-2xl font-semibold">
        Our Collaborators
      </h1>
      <div className="carousel">
        <div className="carousel-track">
          <div className="group">
            <div className="card">1</div>
            <div className="card">2</div>
            <div className="card">3</div>
            <div className="card">4</div>
            <div className="card">5</div>
          </div>
          <div aria-hidden className="group">
            <div className="card">1</div>
            <div className="card">2</div>
            <div className="card">3</div>
            <div className="card">4</div>
            <div className="card">5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
