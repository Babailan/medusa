import "../styles/globals.scss";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Layout from "../components/Layout/Index";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
