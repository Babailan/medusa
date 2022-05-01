import type { NextPage } from "next";
import { About } from "../components/About/About";
import { Footer } from "../components/Footer/Footer";
import { Intro } from "../components/Intro/Intro";
import Pics from "../components/Pics/Index";

const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <About />
      <Pics />
      <Footer />
    </>
  );
};

export default Home;
