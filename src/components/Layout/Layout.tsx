import { ReactChild, ReactNode, useEffect, useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { resize } from "../../hooks/sizeChange";
import Loader from "../Loader/Index";
import Warn from "../Warn/Index";

type Props = {
  children?: ReactChild | JSX.Element | ReactNode;
};

function Layout({ children }: Props) {
  const [load, setLoad] = useState<boolean>(false);
  const containerRef = useRef(null);
  const size = resize();
  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        getDirection: true,
        lerp: 0.1,
        mobile: { smooth: true, getDirection: true, breakpoint: 0 },
        tablet: { smooth: true, getDirection: true, breakpoint: 0 },
      }}
      watch={[size]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        {load ? <Loader /> : null}
        {size < 696 && load ? <Warn /> : null}
        {load ? children : null}
      </main>
    </LocomotiveScrollProvider>
  );
}

export default Layout;
