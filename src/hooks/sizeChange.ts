import { useState, useEffect } from "react";

export const sizeChange = (ref: any) => {
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const handleResize = () => {
    if (typeof window !== "undefined") setWidth(window.innerWidth);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([events]) => {
      handleResize();
      console.log(events);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }

    window.addEventListener("resize", handleResize);

    () => window.removeEventListener("resize", handleResize);
  }, [width, ref.current]);

  return width;
};
