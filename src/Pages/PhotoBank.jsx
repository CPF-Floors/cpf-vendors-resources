import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import Header from "../components/Header";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import Roomvo from "../components/Roomvo";
import EmblaCarousel from "../components/EmblaCarousel";

//
import "../scss/PhotoBank.scss";

function PhotoBank() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <div className="photo-bank">
          <>
            <EmblaCarousel />
          </>
        </div>
      </Suspense>
      <Roomvo />
    </>
  );
}
export default PhotoBank;
