import React from "react";
import Header from "../components/Header";
import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import HydrowoodCarousel from "../RoomScenesCarousels/HydrowoodCarousel"
import Roomvo from "../components/Roomvo";


function PhotoBankDeco54() {
  return (
    <>
      <Header />
      <PhotoBankSidebar />
      <div className="photobank-container" style={{paddingBottom:"120px"}}>
        <h2>Room Scenes - Hydrowood</h2>
        <HydrowoodCarousel />
        <Roomvo />
      </div>
    </>
  );
}

export default PhotoBankDeco54;
