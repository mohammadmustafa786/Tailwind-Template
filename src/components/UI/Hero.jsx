import React from "react";
import { Bounce, Fade, LightSpeed } from "react-reveal";

const Hero = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <Fade top cascade>
                Understand User Flow.
              </Fade>
              <strong className="font-extrabold text-blue-700 sm:block">
                <Fade top cascade>
                  Increase Conversion.
                </Fade>
              </strong>
            </h1>
            <Bounce bottom>
              <p className="mt-4 sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
            </Bounce>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <LightSpeed left>
                <a
                  className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  href="/get-started"
                >
                  Get Started
                </a>
              </LightSpeed>
              <LightSpeed right>
                <a
                  className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                  href="/about"
                >
                  Learn More
                </a>
              </LightSpeed>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
