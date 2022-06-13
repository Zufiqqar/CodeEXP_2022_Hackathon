import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Login from "./login";
import Create from "./Create";
import Mainmenu from "./Mainmenu";
import SelectMode from "./SelectMode";

const Home = () => {
  return (
    <div>
      <SelectMode />;
    </div>
  );
};

export default Home;
