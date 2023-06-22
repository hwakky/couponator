import "@/../styles/globals.css";
import Layout from "../public/components/layout";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {" "}
      <Component {...pageProps} />
    </Layout>
  );
}
