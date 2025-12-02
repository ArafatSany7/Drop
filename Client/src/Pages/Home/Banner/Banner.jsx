const Banner = () => {
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="-ml-24 -mt-16 @max-xs:h-1/2">
            <svg
              className="drop-shadow-red-700"
              xmlns="http://www.w3.org/2000/svg"
              width="746"
              height="768"
              viewBox="0 0 946 968"
              fill="none"
            >
              <g filter="url(#filter0_d_93_102)">
                <path
                  d="M897 811.5C731.274 699.342 302.232 960 22.5 960C-257.232 960 -484 733.232 -484 453.5C-484 173.768 -257.232 -53 22.5 -53C302.232 -53 1144.5 979 897 811.5Z"
                  fill="url(#paint0_linear_93_102)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_93_102"
                  x="-488"
                  y="-53"
                  width="1433.96"
                  height="1021"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.647059 0 0 0 0 0.643137 0 0 0 0 0.643137 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_93_102"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_93_102"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_93_102"
                  x1="-169.5"
                  y1="26.9997"
                  x2="330.5"
                  y2="874.999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.221679" stop-color="#B32346" />
                  <stop offset="0.66922" stop-color="#6A0B37" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <h1 className="text-5xl font-bold">Save Life Donate Blood </h1>
            <p className="py-6 font-secondary">
              "Your single act of kindness can give someone another chance to
              live, recover, and reunite with their loved ones. Every drop
              counts, and your donation can be the hope someone is desperately
              waiting for. Be a hero today—give blood and make a difference that
              truly matters."
            </p>
            <button className="btn transition duration-300 ease-in-out hover:-translate-y-1 bg-black text-white border-0 hover:border-b-2 hover:border-b-red-800">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
