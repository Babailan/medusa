import type { NextPage } from "next";
import { Intro } from "../components/Intro/Intro";

const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <div data-scroll-section style={{ minHeight: "100vh" }}></div>
    </>
  );
};

export default Home;
