
import Header from "../components/Header";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import Roomvo from "../components/Roomvo";
import EmblaCarousel from "../components/EmblaCarousel";

//
import "../scss/PhotoBank.scss";
import { color } from "framer-motion";

function PhotoBank() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <div className="photo-bank">
          <>
            <div style={{display:'flex', justifyContent: 'center', alignItems:'center',flexDirection:'column'}}>
              <img src="https://cpffloors.com/wp-content/uploads/2023/05/CPF-FLOORS.png" style={{height:'80px'}} alt="" />
              <h3 style={{color: 'white', fontSize: '30px'}}>Photo Bank</h3>
            </div>
            <EmblaCarousel />
          </>
        </div>
      </Suspense>
      <Roomvo />
    </>
  );
}
export default PhotoBank;
