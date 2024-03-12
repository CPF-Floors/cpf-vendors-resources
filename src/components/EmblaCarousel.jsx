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
    <motion.div className="embla"
    initial={{y:200, opcacity: 0}}
    whileInView={{y: 0, opcacity: 1}}
    transition={{duration: 0.5}}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <Link to="/photo-bank/deco-54">
            <div className="embla__slide">
              <img src="/cpf-vendors-resources/assets/DECO54.png" alt="" />
            </div>
          </Link>
          <Link to="/photo-bank/decotile" style={{margin:"30px"}}>
            <div className="embla__slide">
              <img src="/cpf-vendors-resources/assets/DECOTILE-1.png" alt="" />
            </div>
          </Link>
          <Link to="/photo-bank/hydrowood" style={{margin:"30px"}}>
            <div className="embla__slide">
              <img src="/cpf-vendors-resources/assets/HYDROWOOD-1.png" alt="" />
            </div>
          </Link>
          <Link to="/photo-bank/keys" style={{margin:"30px"}}>
            <div className="embla__slide">
              <img src="/cpf-vendors-resources/assets/KEYS.png" alt="" />
            </div>
          </Link>
          <Link to="/photo-bank/project" style={{margin:"30px"}}>
            <div className="embla__slide">
              <img src="/cpf-vendors-resources/assets/PROJECT.png" alt="" />
            </div>
          </Link>
          <Link to="/photo-bank/quick48" style={{margin:"30px"}}>
            <div className="embla__slide">
              <img src="/cpf-vendors-resources/assets/QUICK48-1.png" alt="" />
            </div>
          </Link>
          <Link to="/photo-bank/spirit-xl" style={{margin:"30px"}}>
            <div className="embla__slide">
              <img src="/cpf-vendors-resources/assets/SPIRIT-XL-jpg.webp" alt="" />
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


