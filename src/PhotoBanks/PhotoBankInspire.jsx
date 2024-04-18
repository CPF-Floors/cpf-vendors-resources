import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import InspireCarousel from "../RoomScenesCarousels/InspireCarousel";
import Roomvo from "../components/Roomvo";
import { Link } from "react-router-dom";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";


function PhotoBankInspire() {
  return (
    <>
      <Header />
      <div className="inspire-banner">
        <motion.img
          src="https://cpffloors.com/wp-content/uploads/2024/03/Group-82.svg"
          alt=""
          initial={{ opacity: 0, scale: 3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          Join Our Waitlist!
        </motion.p>
        <button>
          <Link
            target="blank"
            to="https://dealers.cpffloors.com/inspire-black-edition/"
          >
            Click Here!
          </Link>
        </button>
      </div>
      <PhotoBankSidebar />
      <div className="photobank-container" style={{ paddingBottom: "120px" }}>
        <h2>Room Scenes - Inspire Black Edition</h2>

        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <CDropdown>
            <CDropdownToggle href="#" color="secondary">
              Select Collection
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="/cpf-vendors-resources/photo-bank/deco-54">Deco54</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </div>

        <InspireCarousel />
        <Roomvo />
      </div>
    </>
  );
}

export default PhotoBankInspire;
