import React from "react";
import Header from "../components/Header";
import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import InspireCarousel from "../RoomScenesCarousels/InspireCarousel";
import Roomvo from "../components/Roomvo"
import { Link } from "react-router-dom";

function PhotoBankInspire() {
  return (
    <>
      <Header />
      <div className="inspire-banner">
        <img src="https://cpffloors.com/wp-content/uploads/2024/03/Group-82.svg" alt="" />
        <p>Join Our Waitlist!</p>
        <button>
            <Link target="blank" to="https://dealers.cpffloors.com/inspire-black-edition/">
                Click Here!
            </Link>
        </button>
      </div>
      <PhotoBankSidebar />
      <div className="photobank-container" style={{paddingBottom:"120px"}}>
        <h2>Room Scenes - Inspire Black Edition</h2>
        <InspireCarousel />
        <Roomvo />
      </div>
    </>
  );
}

export default PhotoBankInspire;
