import React from "react";
import Header from "../components/Header";
import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import SpiritXlCarousel from "../RoomScenesCarousels/SpiritXlCarousel"
import Roomvo from "../components/Roomvo";

function PhotoBankSpiritXl() {
  return (
    <>
      <Header />
      <PhotoBankSidebar />
      <div className="photobank-container" style={{paddingBottom:"120px"}}>
        <h2>Room Scenes - Spirit XL</h2>
        <SpiritXlCarousel />
        <Roomvo />
      </div>
    </>
  );
}

export default PhotoBankSpiritXl;
