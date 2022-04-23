import { ReactChild, ReactNode, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { resize } from "../../hooks/sizeChange";
import Loader from "../Loader/Loader";

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
      }}
      watch={[size]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        {children}
        {<Loader />}
      </main>
    </LocomotiveScrollProvider>
  );
}

export default Layout;
