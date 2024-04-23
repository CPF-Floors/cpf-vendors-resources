import React, { useRef, useCallback } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal  from "react-modal";

import useEmblaCarousel from "embla-carousel-react";

import { AnimatePresence, motion } from "framer-motion";
import "../scss/Carousel.scss";
import "../scss/ModalCarousel.scss";

const RoomSceneDeco54 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <motion.div
        className="embla"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container" style={{ cursor: "zoom-in" }}>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2022/12/ELI-ROOM-SCENE-1024x1024.webp"
                  alt=""
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://cpffloors.com/wp-content/uploads/2022/12/ELI-ROOM-SCENE-1024x1024.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Eli</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/UMA-ROOM-SCENE-1200x1200-1.webp"
                  alt=""
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://dealers.cpffloors.com/wp-content/uploads/2024/02/UMA-ROOM-SCENE-1200x1200-1.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Uma</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2023/06/IVY-ROOM-SCENE-1024x1024.webp"
                  alt=""
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://cpffloors.com/wp-content/uploads/2023/06/IVY-ROOM-SCENE-1024x1024.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Ivy</h3>
              </div>
            </Link>


            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2022/12/LIA-ROOM-SCENE.jpg"
                  alt=""
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://cpffloors.com/wp-content/uploads/2022/12/LIA-ROOM-SCENE.jpg"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Lia</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2023/06/MAI-ROOM-SCENE-1024x1024.webp"
                  alt=""
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://cpffloors.com/wp-content/uploads/2023/06/MAI-ROOM-SCENE-1024x1024.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Mai</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2023/06/MIA-ROOM-SCENE-1024x1024.webp"
                  alt=""
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://cpffloors.com/wp-content/uploads/2023/06/MIA-ROOM-SCENE-1024x1024.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Mia</h3>
              </div>
            </Link>

          </div>
        </div>

        <div className="buttons">
          <button className="embla__prev" onClick={scrollPrev}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="embla__next" onClick={scrollNext}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <Modal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          className="openModalcpf Modal"
        >
          <img
            src={selectedImage}
            alt=""
            style={{ maxWidth: "70%", maxHeight: "70%", marginTop: "80px" }}
          />
          <button className="modal-button" onClick={() => setOpenModal(false)}>Close</button>
        </Modal>

      </motion.div>
    </>
  );
};
export default RoomSceneDeco54;
