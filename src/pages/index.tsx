import type { NextPage } from "next";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Home: NextPage = () => {
  const { scroll } = useLocomotiveScroll();
  scroll;
  return (
    <>
      <div style={{ minHeight: "100vh" }} data-scroll-section>
        <h1 data-scroll>Hey</h1>
        <p data-scroll>👋</p>
        <p data-scroll>wtf</p>
      </div>
      <div
        style={{ minHeight: "100vh", backgroundColor: "#808080" }}
        data-scroll-section
      >
        <div style={{ fontSize: "5em" }} data-scroll>
          <p
            className="inline"
            data-scroll
            data-scroll-repeat
            data-scroll-speed={6}
          >
            h
          </p>
          <p
            className="inline"
            data-scroll
            data-scroll-repeat
            data-scroll-speed={7}
          >
            h
          </p>
          <p
            className="inline"
            data-scroll
            data-scroll-repeat
            data-scroll-speed={6}
          >
            h
          </p>
          <p
            className="inline"
            data-scroll
            data-scroll-repeat
            data-scroll-speed={7}
          >
            h
          </p>
        </div>
      </div>
      <div style={{ minHeight: "100vh" }} data-scroll-section>
        <h2 style={{ fontSize: "5em" }} data-scroll>
          RONNEL BABAILAN DILAO
        </h2>
      </div>
    </>
  );
};

export default Home;
