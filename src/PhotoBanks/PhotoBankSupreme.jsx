import React from "react";
import Header from "../components/Header";
import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import SupremeCarousel from "../RoomScenesCarousels/SupremeCarousel";
import Roomvo from "../components/Roomvo";


function PhotoBankDeco54() {
  return (
    <>
      <Header />
      <PhotoBankSidebar />
      <div className="photobank-container" style={{paddingBottom:"120px"}}>
        <h2>Room Scenes - Evolve</h2>
        <SupremeCarousel />
        <Roomvo />
      </div>
    </>
  );
}

export default PhotoBankDeco54;