import Navbar from "../components/Navbar/Navbar.js";
import "../styles/global.scss";
import { createContext } from "react";

export const PictureContext = createContext();

function MyApp({ Component, pageProps }) {
  const pictures = [
    {
      img: "/img/picture1.jpg",
      description: "notebook",
      id: 1,
    },
    {
      img: "/img/picture2.jpg",
      description: "backpack",
      id: 2,
    },
    {
      img: "/img/picture3.jpg",
      description: "forest",
      id: 3,
    },
    {
      img: "/img/picture4.jpg",
      description: "field",
      id: 4,
    },
    {
      img: "/img/picture5.jpg",
      description: "umbrella",
      id: 5,
    },
  ];

  return (
    <div>
      <PictureContext.Provider value={{ pictures }}>
        <Navbar />
        <Component {...pageProps} />
      </PictureContext.Provider>
    </div>
  );
}

export default MyApp;
