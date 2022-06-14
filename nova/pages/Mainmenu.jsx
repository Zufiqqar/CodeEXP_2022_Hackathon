import React from "react";

function Mainmenu() {
  const nameofUser = "Benny";

  return (
    <div class="bg-indigo-900 relative overflow-hidden h-screen ">
      <img
        src="https://novabackend.skylivingston.website/uploads/cheerful_stretching_male_fitness_instructor_260nw_1789789676_52400219ef.png"
        class="absolute h-full w-full object-cover"
      />
      <div class="inset-0 bg-black opacity-50 absolute"> </div>

      <div class="rounded-lg mx-auto w-full relative flex items-center py-20  pb-10  justify-center">
        <p class="flex flex-col items-center font-extrabold  text-center md:text-4xl text-white">
          Welcome here Benny!
        </p>
      </div>

      <div class="mt-1 container border-4 border-white rounded-lg mx-auto w-4/5 relative flex items-center py-10  my-32">
        <div class="w-full flex flex-col items-center justify-between relative z-10 ">
          <p class="items-center font-extrabold  text-center md:text-4xl text-white my-12">
            You have 6 sessions remaining.
          </p>
          <p class="max-w-lg text-center items-center font-extrabold text-lg text-white my-12">
            Note: Cameras have to be turned on and participants need to be fully
            visible at all times. Participants must also be in proper workout
            attire, including sports shoes
          </p>

          <a
            href="test"
            class="block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold uppercase mt-1 my-30"
          >
            Start Session
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mainmenu;
