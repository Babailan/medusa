import { ReactChild, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { sizeChange } from "../hooks/sizeChange";
import Loader from "./Loader";

type Props = {
  children?: ReactChild | JSX.Element;
};

function Layout({ children }: Props) {
  const containerRef = useRef(null);
  const size = sizeChange(containerRef);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[size]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        {children}
      </main>
    </LocomotiveScrollProvider>
  );
}

export default Layout;
