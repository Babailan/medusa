import { ReactChild, ReactNode, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { resize } from "../../hooks/sizeChange";
import Loader from "../Loader/Index";

type Props = {
  children?: ReactChild | JSX.Element | ReactNode;
};

function Layout({ children }: Props) {
  const containerRef = useRef(null);
  const size = resize();
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.1,
      }}
      watch={[size]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        {children}
      </main>
      {<Loader />}
    </LocomotiveScrollProvider>
  );
}

export default Layout;
