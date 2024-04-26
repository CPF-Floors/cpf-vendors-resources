import React, { useRef, useCallback } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Modal  from "react-modal";


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
                  src="https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-63.png"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-63.png"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Drawing</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-64.png"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-64.png"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Execution</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-65.png"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-65.png"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Inspection</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-66.png"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-66.png"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Let's Do It</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-67.png"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-67.png"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Proposition</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-68.png"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-68.png"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Simply Awesome</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-69.png"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-69.png"
                    );
                  }}
                />
                `<h3 style={{ marginTop: "40px" }}>Take off</h3>`
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-70.png"
                  alt=""
                                    onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://stagingdealers.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-70.png"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Timeline</h3>
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
