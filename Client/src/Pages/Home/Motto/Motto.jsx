import React from "react";

const Motto = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden  text-white shadow-2xl">
        <div className="relative p-10 sm:p-12">
          <div
            className="absolute -inset-20  blur-3xl opacity-60 pointer-events-none"
            aria-hidden
          ></div>
          <div className="relative space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">
              Our Vision
            </p>
            <h1 className="text-2xl sm:text-3xl font-semibold font-secondary">
              No one should wait for hope to arrive
            </h1>
            <p className="font-secondary text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              Our vision is to build a community where every person has timely
              access to safe blood, ensuring no life is lost due to shortage. We
              strive to inspire compassion, empower donors, and create a future
              where voluntary blood donation becomes a shared responsibility and
              a symbol of humanity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motto;
