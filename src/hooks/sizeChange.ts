import { useState, useEffect } from "react";

export const resize = () => {
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const handleResize = () => {
    if (typeof window !== "undefined") setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return width;
};
