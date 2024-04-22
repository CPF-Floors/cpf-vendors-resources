import React from "react";
import Header from "../components/Header";
import Quick48Carousel from "../RoomScenesCarousels/Quick48Carousel";
import Quick48CarouselInstallation from "../RoomScenesCarousels/Quick48CarouselInstallation";
import Roomvo from "../components/Roomvo";

import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";


function PhotoBankDeco54() {
  return (
    <>
      <Header />
      <div className="photobank-container" style={{paddingBottom:"120px"}}>
        <h2 style={{marginTop:'180px'}}>Room Scenes - Quick48+</h2>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <CDropdown>
            <CDropdownToggle href="#" className="dropdown">
              Select Collection
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/inspire-black-edition">Inspire Black Edition</CDropdownItem>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/decotile">Decotile</CDropdownItem>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/evolve">Evolve</CDropdownItem>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/hydrowood">Hydrowood</CDropdownItem>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/keys">Keys</CDropdownItem>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/project">Project</CDropdownItem>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/spirit-xl">Spirit XL</CDropdownItem>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/supreme">Supreme</CDropdownItem>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/deco-54">Deco54</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </div>
        <Quick48Carousel />
        <h2>Installation</h2>
        <Quick48CarouselInstallation />
        <Roomvo />
      </div>
    </>
  );
}

export default PhotoBankDeco54;
