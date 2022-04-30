import { useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styles from "./Loader.module.scss";

function Loader() {
  const loco = useLocomotiveScroll();
  let [random, setRandom] = useState<undefined | string>(undefined);
  useEffect(() => {
    setRandom(randomString());
    setTimeout(() => {
      document
        .querySelector(`.${styles.container}`)
        ?.classList.add(styles.remove);
    }, 2000);
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={`${styles.random} `}>{random}</h1>
    </div>
  );
}
function randomString() {
  let arr = [`WHAT'S UP?`, "HI.", "HELLO."];
  return arr[Math.floor(Math.random() * arr.length)];
}

export default Loader;
