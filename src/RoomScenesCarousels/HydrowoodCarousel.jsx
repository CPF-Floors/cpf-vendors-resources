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
                  src="https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-43.png"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-43.png"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Cloudy Sky</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-44.png"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-44.png"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Coffee Cream</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-49.png"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-49.png"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Pure</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-48.png"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-48.png"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Mokana</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-47.png"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-47.png"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Light Cello</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-46.png"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-46.png"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Greige</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-45.png"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-45.png"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Espresso Martini</h3>
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
