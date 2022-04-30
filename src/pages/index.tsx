import type { NextPage } from "next";
import { About } from "../components/About/About";
import { Intro } from "../components/Intro/Intro";
import Pics from "../components/Pics/Index";

const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <About />
      <Pics />
    </>
  );
};

export default Home;
