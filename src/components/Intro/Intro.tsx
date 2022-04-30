import styles from "./Intro.module.scss";

function Intro() {
  return (
    <section data-scroll-section className={styles.container}>
      <div className={styles.fixed_wrapper}>
        <div className={styles.fixed_target} id={"fixed_target"}></div>
        <div
          className={styles.fixed}
          data-scroll
          data-scroll-sticky
          data-scroll-target={"#fixed_target"}
        ></div>
      </div>
      <div className={styles.nameltr}>
        <h1
          data-scroll
          data-scroll-speed={-30}
          data-scroll-direction="horizontal"
          data-scroll-delay={0.1}
          data-scroll-repeat
          className={styles.name}
        >
          MEDUSA
        </h1>
      </div>
      <div className={styles.namertl}>
        <h1
          data-scroll
          data-scroll-speed={30}
          data-scroll-direction="horizontal"
          data-scroll-delay={0.1}
          data-scroll-repeat
          className={styles.name}
        >
          MEDUSA
        </h1>
      </div>
    </section>
  );
}

export { Intro };
