import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div
        style={{ minHeight: "100vh", backgroundColor: "#121212" }}
        data-scroll-section
      >
        <p data-scroll>RONG</p>
        <p data-scroll>RONG</p>
        <p data-scroll>RONG</p>
        <p data-scroll>RONG</p>
      </div>
      <div
        style={{ minHeight: "100vh", backgroundColor: "#808080" }}
        data-scroll-section
        className="container"
      >
        <h1 data-scroll-sticky data-scroll data-scroll-target={".container"}>
          RONG
        </h1>
      </div>
      <div
        style={{ minHeight: "100vh", backgroundColor: "#121212" }}
        data-scroll-section
      >
        <p data-scroll>RONG</p>
        <p data-scroll>RONG</p>
        <p data-scroll>RONG</p>
        <p data-scroll>RONG</p>
      </div>
    </>
  );
};

export default Home;
