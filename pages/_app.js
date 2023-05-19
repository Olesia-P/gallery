import css from "../styles/Home.module.scss";
import Navbar from "../components/Navbar/Navbar.js";

function MyApp({ Component, pageProps }) {
  return (
    <div className={css.Home}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
