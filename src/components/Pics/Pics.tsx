import styles from "./Pics.module.scss";
//gallery and footer after that finish.

function Pics() {
  return (
    <section data-scroll-section className={styles.container}>
      <div className={styles.image1Wrapper} data-scroll>
        <div className={styles.image1Target}></div>
        <div
          data-scroll
          data-scroll-sticky
          data-scroll-target={`.${styles.image1Target}`}
          className={styles.image1}
        ></div>
      </div>
      <div className={styles.image2Wrapper} data-scroll>
        <div className={styles.image2Target}></div>
        <div
          data-scroll
          data-scroll-sticky
          data-scroll-target={`.${styles.image2Target}`}
          className={styles.image2}
        ></div>
      </div>
      <div className={styles.image3Wrapper} data-scroll>
        <div className={styles.image3Target}></div>
        <div
          data-scroll
          data-scroll-sticky
          data-scroll-target={`.${styles.image3Target}`}
          className={styles.image3}
        ></div>
      </div>
    </section>
  );
}
export { Pics };
