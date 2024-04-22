import React from "react";
import Header from "../components/Header";

import Deco54Carousel from "../RoomScenesCarousels/Deco54Carousel";
import Deco54CarouselInstallation from "../RoomScenesCarousels/Deco54CarouselInstallation";
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

      <div className="photobank-container" style={{ paddingBottom: "120px" }}>
        <h2 style={{marginTop:'180px'}}>Room Scenes - Deco54</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CDropdown>
            <CDropdownToggle href="#" className="dropdown">
              Select Collection
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                style={{ textAlign: "center" }}
                href="/cpf-vendors-resources/photo-bank/inspire-black-edition"
              >
                Inspire Black Edition
              </CDropdownItem>
              <CDropdownItem
                style={{ textAlign: "center" }}
                href="/cpf-vendors-resources/photo-bank/decotile"
              >
                Decotile
              </CDropdownItem>
              <CDropdownItem
                style={{ textAlign: "center" }}
                href="/cpf-vendors-resources/photo-bank/evolve"
              >
                Evolve
              </CDropdownItem>
              <CDropdownItem
                style={{ textAlign: "center" }}
                href="/cpf-vendors-resources/photo-bank/hydrowood"
              >
                Hydrowood
              </CDropdownItem>
              <CDropdownItem
                style={{ textAlign: "center" }}
                href="/cpf-vendors-resources/photo-bank/keys"
              >
                Keys
              </CDropdownItem>
              <CDropdownItem
                style={{ textAlign: "center" }}
                href="/cpf-vendors-resources/photo-bank/project"
              >
                Project
              </CDropdownItem>
              <CDropdownItem
                style={{ textAlign: "center" }}
                href="/cpf-vendors-resources/photo-bank/quick48"
              >
                Quick48
              </CDropdownItem>
              <CDropdownItem
                style={{ textAlign: "center" }}
                href="/cpf-vendors-resources/photo-bank/spirit-xl"
              >
                Spirit XL
              </CDropdownItem>
              <CDropdownItem
                style={{ textAlign: "center" }}
                href="/cpf-vendors-resources/photo-bank/supreme"
              >
                Supreme
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </div>
        <Deco54Carousel />
        <h2>Installation</h2>
        <Deco54CarouselInstallation />
        <Roomvo />
      </div>
    </>
  );
}

export default PhotoBankDeco54;