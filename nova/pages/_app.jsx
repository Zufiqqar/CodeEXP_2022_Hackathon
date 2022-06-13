import "../styles/globals.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
