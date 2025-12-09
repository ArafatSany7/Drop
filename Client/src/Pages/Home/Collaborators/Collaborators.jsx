import c1 from "../../../../assets/Collaborators/image_2025-12-07_23-06-05.jpg";
import c2 from "../../../../assets/Collaborators/bangladesh-bank.jpg";
import c3 from "../../../../assets/Collaborators/Dutch-Bangla-Bank.jpg";
import c4 from "../../../../assets/Collaborators//image_2025-12-07_23-06-05.jpg";
import c5 from "../../../../assets/Collaborators/istockphoto-458679355-612x612.jpg";

const Collaborators = () => {
  return (
    <div className="my-5 px-6">
      <h1 className="text-center py-2 text-2xl font-semibold">
        Our Collaborators
      </h1>
      <div className="carousel">
        <div className="carousel-track">
          <div className="group">
            <div
              style={{ backgroundImage: `url(${c1})` }}
              className="card w-full"
            ></div>
            <div
              style={{ backgroundImage: `url(${c2})` }}
              className="card w-full"
            ></div>
            <div
              style={{ backgroundImage: `url(${c3})` }}
              className="card w-full"
            ></div>
            <div
              style={{ backgroundImage: `url(${c4})` }}
              className="card w-full"
            ></div>
            <div
              style={{ backgroundImage: `url(${c5})` }}
              className="card w-full"
            ></div>
          </div>
          <div aria-hidden className="group">
            <div
              style={{ backgroundImage: `url(${c1})` }}
              className="card w-full"
            ></div>
            <div
              style={{ backgroundImage: `url(${c2})` }}
              className="card w-full"
            ></div>
            <div
              style={{ backgroundImage: `url(${c3})` }}
              className="card w-full"
            ></div>
            <div
              style={{ backgroundImage: `url(${c4})` }}
              className="card w-full"
            ></div>
            <div
              style={{ backgroundImage: `url(${c5})` }}
              className="card w-full"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
