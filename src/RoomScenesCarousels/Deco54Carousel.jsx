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
                  src="https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-18-jpg.webp"
                  alt=""
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-18-jpg.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Light Deco</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-21-jpg.webp"
                  alt=""
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-21-jpg.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Metal Gray</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-22-jpg.webp"
                  alt=""
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-22-jpg.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Mimo Oak</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-23-jpg.webp"
                  alt=""
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-23-jpg.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Natural Deco</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-25-jpg.webp"
                  alt=""
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-25-jpg.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Sara Oak</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-24-jpg.webp"
                  alt=""
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-24-jpg.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Sak White</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-16-jpg.webp"
                  alt=""
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-16-jpg.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Blanc</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-26-jpg.webp"
                  alt=""
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-26-jpg.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Wynwood Oak</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-19-jpg.webp"
                  alt=""
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-19-jpg.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Light Oak</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-17-jpg.webp"
                  alt=""
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "https://staging.cpffloors.com/wp-content/uploads/2024/04/banners_Mesa-de-trabajo-1-copia-17-jpg.webp"
                    );
                  }}
                />
                <h3 style={{ marginTop: "40px" }}>Cappuccino Oak</h3>
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
