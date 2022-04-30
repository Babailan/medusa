import styles from "./Pics.module.scss";
//gallery and footer after that finish.

function Pics() {
  return (
    <section data-scroll-section className={styles.container}>
      <div data-scroll data-scroll-direction="horizontal"></div>
    </section>
  );
}
export { Pics };
