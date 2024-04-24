import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import "../scss/Carousel.scss";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <motion.div
      className="embla"
      initial={{ y: 200, opcacity: 0 }}
      whileInView={{ y: 0, opcacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <Link
            to="/cpf-vendors-resources/photo-bank/inspire-black-edition"
            style={{ margin: "30px" }}
          >
            <div className="embla__slide">
              <img src="/cpf-vendors-resources/assets/rect2.png" alt="" />
            </div>
          </Link>
          <Link
            to="/cpf-vendors-resources/photo-bank/deco-54"
            style={{ margin: "30px" }}
          >
            <div className="embla__slide">
              <img src="/cpf-vendors-resources/assets/rect3.png" alt="" />
            </div>
          </Link>
          <Link
            to="/cpf-vendors-resources/photo-bank/decotile"
            style={{ margin: "30px" }}
          >
            <div className="embla__slide">
              <img src="/cpf-vendors-resources/assets/rect5.png" alt="" />
            </div>
          </Link>
          <Link
            to="/cpf-vendors-resources/photo-bank/hydrowood"
            style={{ margin: "30px" }}
          >
            <div className="embla__slide">
              <img src="https://staging.cpffloors.com/wp-content/uploads/2024/04/hydrowood-jpg.webp" alt="" />
            </div>
          </Link>
          <Link
            to="/cpf-vendors-resources/photo-bank/keys"
            style={{ margin: "30px" }}
          >
            <div className="embla__slide">
              <img src="/cpf-vendors-resources/assets/rect6.png" alt="" />
            </div>
          </Link>
          <Link
            to="/cpf-vendors-resources/photo-bank/project"
            style={{ margin: "30px" }}
          >
            <div className="embla__slide">
              <img src="/cpf-vendors-resources/assets/rect8.png" alt="" />
            </div>
          </Link>
          <Link
            to="/cpf-vendors-resources/photo-bank/quick48"
            style={{ margin: "30px" }}
          >
            <div className="embla__slide">
              <img src="/cpf-vendors-resources/assets/rect4.png" alt="" />
            </div>
          </Link>
          <Link
            to="/cpf-vendors-resources/photo-bank/spirit-xl"
            style={{ margin: "30px" }}
          >
            <div className="embla__slide">
              <img src="/cpf-vendors-resources/assets/rect7.png" alt="" />
            </div>
          </Link>

          <Link
            to="/cpf-vendors-resources/photo-bank/supreme"
            style={{ margin: "30px" }}
          >
            <div className="embla__slide">
              <img src="https://staging.cpffloors.com/wp-content/uploads/2024/04/supreme-jpg.webp" alt="" />
            </div>
          </Link>

          <Link
            to="/cpf-vendors-resources/photo-bank/evolve"
            style={{ margin: "30px" }}
          >
            <div className="embla__slide">
              <img src="https://staging.cpffloors.com/wp-content/uploads/2024/04/evolve.png" alt="" />
            </div>
          </Link>












        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button className="embla__next" onClick={scrollNext}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </motion.div>
  );
};
export default EmblaCarousel;
