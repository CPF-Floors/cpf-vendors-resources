import React from "react";
import Header from "../components/Header";
import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import Deco54Carousel from "../RoomScenesCarousels/Deco54Carousel";
import Deco54CarouselInstallation from "../RoomScenesCarousels/Deco54CarouselInstallation"
import Roomvo from "../components/Roomvo"

function PhotoBankDeco54() {
  return (
    <>
      <Header />
      <PhotoBankSidebar />
      <div className="photobank-container" style={{paddingBottom:"120px"}}>
        <h2>Room Scenes - Deco54</h2>
        <Deco54Carousel />
        <h2>Installation</h2>
        <Deco54CarouselInstallation />
        <Roomvo />
      </div>
    </>
  );
}

export default PhotoBankDeco54;
