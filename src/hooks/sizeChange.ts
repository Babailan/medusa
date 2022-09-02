import { useState, useEffect } from "react";

export const resize = (someFunction: Function) => {
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });

  const handleResize = () => {
    if (typeof window !== "undefined") setSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    someFunction(true);
    setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};
