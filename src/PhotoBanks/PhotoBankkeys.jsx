import React from "react";
import Header from "../components/Header";
import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import KeysCarousel from "../RoomScenesCarousels/KeysCarousel";
import KeysCarouselInstallation from "../RoomScenesCarousels/KeysCarouselInstallation"
import Roomvo from "../components/Roomvo";


function PhotoBankDeco54() {
  return (
    <>
      <Header />
      <PhotoBankSidebar />
      <div className="photobank-container" style={{paddingBottom:"120px"}}>
        <h2>Room Scenes - Keys</h2>
        <KeysCarousel />
        <h2>Installation</h2>
        <KeysCarouselInstallation />
        <Roomvo />
      </div>
    </>
  );
}

export default PhotoBankDeco54;
