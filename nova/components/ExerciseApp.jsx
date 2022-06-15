import useSWR from "swr";
import React, { useEffect, useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ExerciseApp(props) {

    const [count, setCount] = useState(0);
    const { data, error } = useSWR(
       process.env.API_LINK.concat("/difficulties"),
       fetcher
   );
  
     if (error) return <div>failed to load</div>;
     if (!data) return <div>loading...</div>;
  
  //let selectedDifficulties = data;//.filter(item => item.Difficulty_Name === props.Difficulty_Name);
  
    function applyData(data){
      let selectedDifficulties = data.filter(item => item.Difficulty_Name === props.Difficulty_Name)[0];
      let ActivityList = selectedDifficulties.Activities;
      let ActivitiesCount =  ActivityList.length;
      
  
      console.log(ActivitiesCount);
  
      if(count < ActivitiesCount){
      return <TimedActivityCard
        title={ActivityList[count].Activity_Name}
        content_text={ActivityList[count].Description}
        id={count}
        next_fun={()=>{handleNext()}}
        time={Number(ActivityList[count].Time)}
        image_url={ActivityList[count].Gif.url}
        ></TimedActivityCard>
      } else {
        return <div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 max-h-min">
          <div class="p-6">
              <div>
                  <a href="#" class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline">Congrats on Completing Your Session!</a>
                  <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Click on the button to return home.</p>
              </div>
        
              <div class="mt-4">
                  <div class="flex items-center justify-end">
        
                    <a href="/test"><button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" >
                          Home
                    </button></a>
        
                  </div>
              </div>
          </div>
        </div>
      }
    }
  
    function handleNext(){
        setCount((count)=>{
          return count+1
        })
      }

    return <div class=" w-screen h-screen flex flex-1 flex-col justify-center align-center ">
        {applyData(data)}
      </div>

  }
  
  
  function TimedActivityCard(props){
  
    function handleNext(){
      //reset to init page
      setState("Pre-Activity")
      props.next_fun()
    }
    const [state, setState]= useState("Pre-Activity")
    function displayCards() {
      switch(state){
        case "Pre-Activity":
          return <ActivityCard  image_url={props.image_url} id={props.id} title={props.title} content_text={props.content_text} next_fun={()=>{setState("Doing-Activity")}}></ActivityCard>
          break;
        case "Doing-Activity":
          return <TimerCard time ={props.time} next_fun={handleNext}></TimerCard>
          break;
        case "Complete-Activity":
          return <div></div>
          break;
      }
    }
    return <div>
      {displayCards()}
      </div>
  }
  
  
  function ActivityCard(props){
    return <div class="max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 max-h-min">
    {/* auto play video here */}
    <img class="object-cover w-full h-full" 
    src={process.env.API_LINK.concat(props.image_url)} 
    alt="Article"/>
  
    <div class="p-6">
        <div>
            {/* <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span> */}
            <a href="#" class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline">{props.title }</a>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{props.content_text}</p>
        </div>
  
        <div class="mt-4">
            <div class="flex items-center justify-end">
  
              <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" 
                onClick={()=>props.next_fun()}>
                    Start Activity
              </button>
  
            </div>
        </div>
    </div>
  </div>
  }
  
  function TimerCard(props){
    var minLimit = Math.floor(props.time / 60)
    var secLimit = props.time % 60
  
    const [state,setState] = useState("Pre-Run")
    const [minsec,setMinsec] = useState([0,0])
  
    function startTimer(){
      setState("Running")
    }
    function countSec(){
      setMinsec((minsec)=>{ 
        if (minsec[1]<59) {return [minsec[0],minsec[1]+1]}
        else if(minsec[1]==59){return [minsec[0]+1,minsec[1]-59]}
      })
    }
  
    function endTimer(){
      setState("Post-Run")
    }
  
    useEffect(() => {
      if(state === "Running") {
        if (minsec[0] == minLimit && minsec[1] == secLimit){endTimer()}
        else{
          setTimeout(() => {
              countSec();
          }, 10);
        }
      }
    })
  
    function controlsComponent() {
      switch(state){
        case "Pre-Run": 
          return <div>
            <button class="mt-2 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" 
            onClick={()=>startTimer()}>
                Start Timer
            </button>
          </div> 
          break;
        case "Running":
          return <div>
            <button class="mt-2 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" >
              Jiayou!
            </button>
          </div>
          break; 
        case "Post-Run":
          return <button class="mt-2 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" 
          onClick={()=>props.next_fun()}>
              Next
          </button>
          break;
      }
  
    }
  
    return <div class="max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 max-h-min p-5">
      <div class="flex flex-col items-center justify-end">
          <div class="text-6xl text-center flex w-full items-center justify-center">
              <div class="w-24 mx-1 p-2 bg-white text-blue-500 rounded-lg">
                  <div class="font-mono leading-none" x-text="minutes">{ (minsec[0]<10?'0'.concat(minsec[0].toString()):minsec[0].toString()) }</div>
                  <div class="font-mono uppercase text-sm leading-none">Minutes</div>
              </div>
              <div class="w-24 mx-1 p-2 bg-white text-blue-500 rounded-lg">
                  <div class="font-mono leading-none" x-text="secondes">{ (minsec[1]<10?'0'.concat(minsec[1].toString()):minsec[1].toString()) }</div>
                  <div class="font-mono uppercase text-sm leading-none">Seconds</div>
              </div>
          </div>
          
            {controlsComponent()}
      </div>
  </div>
  
  
  
  
  
  }

  export default ExerciseApp;