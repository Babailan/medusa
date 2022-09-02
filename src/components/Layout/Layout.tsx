import { ReactChild, ReactNode, useEffect, useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { resize } from "../../hooks/sizeChange";
import Loader from "../Loader/Index";
import Senpai from "../SenpaiUwU/Index";
import Warn from "../Warn/Index";

type Props = {
  children?: ReactChild | JSX.Element | ReactNode;
};

function Layout({ children }: Props) {
  const [load, setLoad] = useState(false);
  const containerRef = useRef(null);
  const size = resize(setLoad);


  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.1,
          multiplier: 0.5,
          mobile: { smooth: true, breakpoint: 0 },
          tablet: { smooth: true, breakpoint: 0 },
        }}
        watch={[size]}
        containerRef={containerRef}
      >
        <div data-scroll-container ref={containerRef}>
          {load ? children : null}
          {load ? <Loader /> : null}

          {size.width < size.height ? <Warn /> : null}


        </div>
      </LocomotiveScrollProvider>
    </>
  );
}

export default Layout;
