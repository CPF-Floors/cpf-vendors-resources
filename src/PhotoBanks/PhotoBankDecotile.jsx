import React from "react";
import Header from "../components/Header";

import DecotileCarousel from "../RoomScenesCarousels/DecotileCarousel"
import DecotileInstallation from "../RoomScenesCarousels/DecotileCarouselInstalation";
import Roomvo from "../components/Roomvo"
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
      <div className="photobank-container" style={{paddingBottom:"40px"}}>
        <h2 style={{marginTop: '180px'}}>Room Scenes - Decotile</h2>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <CDropdown>
            <CDropdownToggle href="#" className="dropdown">
              Select Collection
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem style={{textAlign: 'center'}} href="/cpf-vendors-resources/photo-bank/inspire-black-edition">Inspire Black Edition</CDropdownItem>
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
        <DecotileCarousel />
        <DecotileInstallation />
        <Roomvo />
      </div>
    </>
  );
}

export default PhotoBankDeco54;
