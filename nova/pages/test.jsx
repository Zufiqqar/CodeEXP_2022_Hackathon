import { Button } from "semantic-ui-react";
import useSWR from "swr";
import React, { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

function test() {
  const [state, setState] = useState(4);
  const [exercises, setExercises] = useState([]);

  function SelectMode(item) {
    const listOfExercises = item.exercises;
    setExercises(listOfExercises);
  }

  const { data, error } = useSWR(
    `https://novabackend.skylivingston.website/difficulties`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // const options = [
  //     { "key":"1", "text": "Home", "link": "/#"},
  //     { "key":"2", "text": "Gallery", "link": "/#"},
  //     { "key":"3", "text": "Content", "link": "/#"},
  //     { "key":"4", "text": "Contact", "link": "/#"},
  //     { "key":"5", "text": "Contactw", "link": "/#"},
  // ];
  const difficultList = data.map((props) => (
    <DifficultOption
      key={props.id}
      text={props.Difficulty_Name}
      link="\#"
    ></DifficultOption>
  ));

  return (
    <div class="bg-orange-300 w-full h-full">
      <div
        style={{
          padding: 10,
          textAlign: "center",
          fontSize: 30,
        }}
      >
        {data.map((item) => {
          return (
            <button
              style={{
                marginLeft: 80,
                borderBottomColor: "black",
                borderBottomWidth: 1,
              }}
              onClick={() => SelectMode(item)}
            >
              {item.Difficulty_Name}
            </button>
          );
        })}
      </div>

      <div
        style={{
          backgroundColor: "#f3e5ab",
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

        <div
          style={{
            textAlign: "left",
            marginLeft: "30%",
            alignContent: "flex-end",
            fontSize: 22,
            marginTop: 30,
          }}
        >
          {exercises.map((exercise) => (
            <div>
              <p>{exercise}</p>
            </div>
          ))}
        </div>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              fontSize: 22,
              borderColor: "black",
              borderWidth: 1,
              padding: 10,
              backgroundColor: "#c0ffee",
            }}
          >
            Start Session
          </button>
        </div>
      </div>
    </div>
  );
}

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

function InstructionCard(props) {
    return <div class="bg-white w-full mx-auto p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
        <div class="flex flex-col gap-1">
            <div class="flex flex-1 flex-col gap-3">
                <div class="bg-gray-200 w-full animate-pulse h-14 rounded-2xl">
                </div>
                <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
                    <p>{props.Instructions}</p>
                </div>
                <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
                </div>
                <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
                </div>
                <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
                </div>
            </div>
            <div class="mt-auto flex gap-3">
                <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full">
                </div>
                <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full">
                </div>
                <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto">
                </div>
            </div>
        </div>
    </div>


}

export default test;
