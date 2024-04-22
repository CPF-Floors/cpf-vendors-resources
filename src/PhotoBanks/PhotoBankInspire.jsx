import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import InspireCarousel from "../RoomScenesCarousels/InspireCarousel";
import Roomvo from "../components/Roomvo";
import { Link } from "react-router-dom";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";

import '@coreui/coreui/dist/css/coreui.min.css'
import '../scss/index.scss'


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
      <div className="photobank-container" style={{ paddingBottom: "120px" }}>
        <h2>Room Scenes - Inspire Black Edition</h2>

        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <CDropdown>
            <CDropdownToggle href="#" className="dropdown">
              Select Collection
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/decotile">Decotile</CDropdownItem>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/evolve">Evolve</CDropdownItem>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/hydrowood">Hydrowood</CDropdownItem>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/keys">Keys</CDropdownItem>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/project">Project</CDropdownItem>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/quick48">Quick48</CDropdownItem>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/spirit-xl">Spirit XL</CDropdownItem>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/supreme">Supreme</CDropdownItem>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/deco-54">Deco54</CDropdownItem>
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
