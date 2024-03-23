import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import MainCarousel from "./components/MainCarousel"
import Roomvo from "./components/Roomvo";
import Footer from "./components/Footer";
import MainLoadScreen from "./components/MainLoadScreen";
import EmblaCarousel from "./components/EmblaCarousel"
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import "./scss/index.scss"

//
import Loader from "./components/Loader";
import Divider from "./components/Divider";
const MainBanner = lazy(() => import("./components/MainBanner"))

function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}><MainBanner /></Suspense>
      <div className="inspire-home-banner">
        <motion.img src="https://cpffloors.com/wp-content/uploads/2024/03/Group-82.svg" alt="" initial={{opacity:0, scale: 3}} animate={{opacity:1, scale: 1}} transition={{duration:3}}/>
        <button>
          <Link target="blank" to="https://cpffloors.com/inspire-black-edition-collection/">Visit the Collection</Link>
        </button>
      </div>
      <MainCarousel />
      <Divider />
      <EmblaCarousel />
      <Suspense fallback={<Loader />}><Roomvo /></Suspense>
      <Footer />
      <Outlet />
    </>
  );
}

export default Layout;
