import React from "react";

function Mainmenu() {
  const nameofUser = "Benny";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div class="bg-orange-300 w-full h-full">
        <div class="text-center w-full">
          <h2 class="text-3xl font-extrabold text-black dark:text-white">
            <span class="block my-10 font-mono">Welcome back {nameofUser}</span>
            <span class="block font-mono text-green-500">
              You have 6 sessions remaining.
            </span>
          </h2>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-5 inline-flex rounded-md shadow">
              <a
                href="/test"
                class="font-mono py-4 px-6 bg-blue-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                View Session
              </a>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 mb-5">
          <span class=" text-left block mt-40 ml-40 font-mono font-bold">
            Code of Conduct:
          </span>
          <span class="text-left  ml-40 font-mono flex flex-wrap w-1/2">
            Cameras have to be turned on and participants need to be fully
            visible at all times. Participants must also be in proper workout
            attire, including sports shoes
          </span>
        </div>
      </div>
    </div>
  );
}

export default Mainmenu;
