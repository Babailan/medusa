import styles from "./Senpai.module.scss";
function Senpai() {
  return (
    <h1 className={styles.senpai}>
      <a href="https://github.com/Babailan/medusa" target={"_blank"} rel="noreferrer">
        GITHUB
      </a>
      <span className={styles.line}></span>
    </h1>
  );
}

export { Senpai };
