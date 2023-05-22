import Navbar from "../components/Navbar/Navbar.js";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  const obj1 = {
    img: "/img/picture1",
    description: "notebook",
    id: 1,
  };

  const obj2 = {
    img: "/img/picture2",
    description: "backpack",
    id: 2,
  };

  const obj3 = {
    img: "/img/picture3",
    description: "forest",
    id: 3,
  };

  const obj4 = {
    img: "/img/picture4",
    description: "field",
    id: 4,
  };

  const obj5 = {
    img: "/img/picture5",
    description: "umbrella",
    id: 5,
  };

  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
