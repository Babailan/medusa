import styles from "./Intro.module.scss";

function Intro() {
  return (
    <div data-scroll-section className={styles.container}>
      <div className={styles.fixedImage} data-scroll></div>
      <h1
        data-scroll
        data-scroll-speed={-20}
        data-scroll-direction="horizontal"
        data-scroll-delay={0.1}
        data-scroll-repeat
        className={styles.name}
      >
        MEDUSA
      </h1>
    </div>
  );
}

export { Intro };
