import React, { useRef, useCallback } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import { AnimatePresence, motion } from "framer-motion";
import "../scss/Carousel.scss";
import "../scss/ModalCarousel.scss";

const RoomSceneDeco54 = () => {
  //MODAL CAROUSEL

  const [openModal, SetOpenModal] = useState(false);

  //

  const [emblaRef, emblaApi] = useEmblaCarousel();

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
                  src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/Drawing-room-scene-1-1200x1200-1.webp"
                  alt=""
                  onClick={() => SetOpenModal(!openModal)}
                />
                <h3 style={{ marginTop: "40px" }}>Drawing</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/Execution-Room-Scene-1200x1200-1.webp"
                  alt=""
                  onClick={() => SetOpenModal(!openModal)}
                />
                <h3 style={{ marginTop: "40px" }}>Execution</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/Inspection-Room-scene-1200x1200-1.webp"
                  alt=""
                  onClick={() => SetOpenModal(!openModal)}
                />
                <h3 style={{ marginTop: "40px" }}>Inspection</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/LETS-DO-IT-ROOM-SCENE-1200x1200-1.webp"
                  alt=""
                  onClick={() => SetOpenModal(!openModal)}
                />
                <h3 style={{ marginTop: "40px" }}>Let's Do It</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/PROPOSITION-ROOM-SCENE-1200x1200-1.webp"
                  alt=""
                  onClick={() => SetOpenModal(!openModal)}
                />
                <h3 style={{ marginTop: "40px" }}>Proposition</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/SIMPLY-AWESOME-ROOM-SCENE-1200x1200-1.webp"
                  alt=""
                  onClick={() => SetOpenModal(!openModal)}
                />
                <h3 style={{ marginTop: "40px" }}>Simply Awesome</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/TAKEOFF-ROOM-SCENE-1200x1200-1.webp"
                  alt=""
                  onClick={() => SetOpenModal(!openModal)}
                />
                `<h3 style={{ marginTop: "40px" }}>Take off</h3>`
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/TIMELINE-ROOM-SCENE-1200x1200-1.webp"
                  alt=""
                  onClick={() => SetOpenModal(!openModal)}
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
      </motion.div>

      {/* MODAL CAROUSEL */}

      <AnimatePresence initial={false}>
        {openModal && (
          <>
            <motion.div
              className="modal-carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="close-modal-carousel"
                onClick={() => SetOpenModal(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </div>

              {/*CAROUSEL*/}

              <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/Drawing-room-scene-1-1200x1200-1.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/Execution-Room-Scene-1200x1200-1.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/Inspection-Room-scene-1200x1200-1.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/LETS-DO-IT-ROOM-SCENE-1200x1200-1.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/PROPOSITION-ROOM-SCENE-1200x1200-1.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/SIMPLY-AWESOME-ROOM-SCENE-1200x1200-1.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/TAKEOFF-ROOM-SCENE-1200x1200-1.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/TIMELINE-ROOM-SCENE-1200x1200-1.webp" />
                </SwiperSlide>
              </Swiper>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default RoomSceneDeco54;
