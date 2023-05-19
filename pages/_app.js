import Navbar from "../components/Navbar/Navbar.js";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
