import { Button } from "semantic-ui-react";
import useSWR from "swr";
import React, { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

function test() {
  const [state, setState] = useState("/EasyExercises");
  const [exercises, setExercises] = useState([]);

  function SelectMode(item) {
    setExercises(item.exercises);
    switch(item.Difficulty_Name){
      case "Easy":
        setState("/EasyExercises");
        break; 
      case "Medium":
        setState("/MediumExercises");
        break;
      case "Hard":
        setState("/HardExercises");
        break;
    }
  }

  const { data, error } = useSWR(
    `https://novabackend.skylivingston.website/difficulties`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;


  const difficultList = data.map((props) => (
    <DifficultOption
      key={props.id}
      text={props.Difficulty_Name}
      link="\#"
    ></DifficultOption>
  ));

  return (
    <div class="w-full h-full">
      <div class="flex justify-center px-8 py-4 text-2xl ">
        <p class="w-2/5  ">Session 6 Exercises</p>
      </div>

      <div class="px-10 pt-5 text-center">
        <button
          class="px-8 py-4 text-2xl text-base rounded-full text-green-600  bg-green-200"
          onClick={() => SelectMode(data[0])}
        >
          {data[0].Difficulty_Name}
        </button>
        <button
          class="ml-20  px-8 py-4 text-2xl text-base rounded-full text-yellow-600  bg-yellow-200"
          onClick={() => SelectMode(data[1])}
        >
          {data[1].Difficulty_Name}
        </button>
        <button
          class="ml-20  px-8 py-4 text-2xl text-base rounded-full text-red-600  bg-red-200"
          onClick={() => SelectMode(data[2])}
        >
          {data[2].Difficulty_Name}
        </button>
      </div>

      <div
        style={{
          height: "100vh",
          marginTop: 20,
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 25,
            fontStyle: "oblique",
          }}
        >
          <p>Difficulty Level</p>
        </div>

        <div class="mt-1 container flex-col  border-4 border-black rounded-lg mx-auto w-2/5 relative flex items-center py-10  my-32">
          <div class="w-2/5 flex flex-col  relative z-10">
            {exercises.map((exercise) => (
              <div>
                <p>{exercise}</p>
              </div>
            ))}
          </div>
          <div class=" flex items-center relative z-10">
            <a
              class="mt-10 block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold uppercase "
              href={state}
            >
              Start Session
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}



function DifficultOption(props) {
  return (
    <div>
      <a
        class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-xl font-medium"
        // href={props.link}
      >
        {props.text}
      </a>
    </div>
  );
}

export default test;


/* <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
    Home
</a>
<a class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
    Gallery
</a>
<a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
    Content
</a>
<a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
    Contact
</a> */