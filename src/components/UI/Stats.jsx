import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                <CountUp start={0} end={384590830} duration={2} />
              </h2>
              <p class="leading-relaxed">Users</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                <CountUp start={0} end={874589399} duration={2} />
              </h2>
              <p class="leading-relaxed">Subscribes</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                <CountUp start={0} end={18979847} duration={2} />
              </h2>
              <p class="leading-relaxed">Downloads</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                <CountUp start={0} end={94385093} duration={2} />
              </h2>
              <p class="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
