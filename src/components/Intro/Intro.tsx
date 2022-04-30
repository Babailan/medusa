import styles from "./Intro.module.scss";

function Intro() {
  return (
    <div data-scroll-section className={styles.container}>
      <div className={styles.image} data-scroll></div>
      <div data-scroll className={styles.nameContainer}>
        <h1
          data-scroll
          data-scroll-speed={-9}
          data-scroll-direction="horizontal"
          data-scroll-delay={0.1}
          data-scroll-repeat
          className={styles.name}
        >
          MEDUSA
        </h1>
      </div>
    </div>
  );
}

export { Intro };
