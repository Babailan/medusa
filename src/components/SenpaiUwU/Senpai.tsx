import styles from "./Senpai.module.scss";
function Senpai() {
  return (
    <h1 className={styles.senpai}>
      <a href="https://github.com/Babailan" target={"_blank"}>
        GITHUB
      </a>
      <span className={styles.line}></span>
    </h1>
  );
}

export { Senpai };
