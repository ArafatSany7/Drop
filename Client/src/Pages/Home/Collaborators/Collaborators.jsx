import c1 from "../../../../assets/Collaborators/image_2025-12-07_23-06-05.jpg";
import c2 from "../../../../assets/Collaborators/503357216_17907220254168435_6520471445662570210_n.jpg";
import c3 from "../../../../assets/Collaborators/504089633_17907220263168435_3195396035158842671_n.jpg";
import c4 from "../../../../assets/Collaborators/573592431_17869166190466737_2379739817289963225_n.jpg";
import c5 from "../../../../assets/Collaborators/575938624_17869166205466737_4957473734069459122_n.jpg";

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
