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
                  src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/BALANCED-OAK-ROOM-SCENE-1200x1200-1.webp"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://dealers.cpffloors.com/wp-content/uploads/2024/02/BALANCED-OAK-ROOM-SCENE-1200x1200-1.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Balanced Oak</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/BLASS-GRAY-ROOM-SCENE-jpg-2048x2048.webp"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://dealers.cpffloors.com/wp-content/uploads/2024/02/BLASS-GRAY-ROOM-SCENE-jpg-2048x2048.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Blass Gray</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/BRUT-OAK-ROOM-SCENE-jpg-2048x2048.webp"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://dealers.cpffloors.com/wp-content/uploads/2024/02/BRUT-OAK-ROOM-SCENE-jpg-2048x2048.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Brut Oak</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/CERISE-ROOM-SCENE-copia-jpg-2048x2048.webp"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://dealers.cpffloors.com/wp-content/uploads/2024/02/CERISE-ROOM-SCENE-copia-jpg-2048x2048.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Cerise</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/COFFEE-CREAM-ROOM-SCENE-jpg-2048x2048.webp"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://dealers.cpffloors.com/wp-content/uploads/2024/02/COFFEE-CREAM-ROOM-SCENE-jpg-2048x2048.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Coffee Cream</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/SUNSET-WALNUT-ROOM-SCENE-1200x1200-1.webp"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://dealers.cpffloors.com/wp-content/uploads/2024/02/SUNSET-WALNUT-ROOM-SCENE-1200x1200-1.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Sunset Walnut</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/DARK-CREME-ROOM-SCENE-jpg-2048x2048.webp"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://dealers.cpffloors.com/wp-content/uploads/2024/02/DARK-CREME-ROOM-SCENE-jpg-2048x2048.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Dark Creme</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/SLATE-ROOM-SCENE-jpg-2048x2048.webp"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://dealers.cpffloors.com/wp-content/uploads/2024/02/SLATE-ROOM-SCENE-jpg-2048x2048.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Slate</h3>
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
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          <button className="modal-button" onClick={() => setOpenModal(false)}><i className="fa-solid fa-xmark"></i></button>
        </Modal>

      </motion.div>

      
    </>
  );
};
export default RoomSceneDeco54;
