import styles from "./Warn.module.scss";

function Warn() {
  return (
    <div className={styles.container}>
      <h1>ROTATE YOUR PHONE.</h1>
      <span>(7.25 INCHES OTHERWISE IT&apos;S NOT GONNA WORK)</span>
    </div>
  );
}

export { Warn };
