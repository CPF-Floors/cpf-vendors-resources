import React, { useState } from "react";
import { AnimatePresence, motion, transform } from "framer-motion";
import { Link } from "react-router-dom";
import "../scss/Header.scss";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="web-link">
        <Link target="blank" to="https://dealers.cpffloors.com/inspire-black-edition/">
          Join to the Waitlist by clicking here!
        </Link>
      </div>
      <header>
        <Link to="/cpf-vendors-resources">
          <img
            src="/cpf-vendors-resources/assets/cpf-floors-cuadrado-logo-02-01.png"
            alt=""
          />
        </Link>

        <motion.div
          className="menu-bar"
          onClick={() => setOpenMenu(!openMenu)}
          whileHover={{ scale: 1.1 }}
        >
          <i className="fa-solid fa-bars"></i>
        </motion.div>

        <nav>
          <Link to="/cpf-vendors-resources/merch">Merch</Link>
          <Link to="/cpf-vendors-resources/photo-bank">Photo Bank</Link>
          <Link to="/cpf-vendors-resources/technnical-data">
            Technnical Data
          </Link>
        </nav>

        <AnimatePresence initial={false}>
          {openMenu && (
            <motion.div
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 250 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <Link to="/cpf-vendors-resources/merch">Merch</Link>
              <Link to="/cpf-vendors-resources/photo-bank">Photo Bank</Link>
              <Link to="/cpf-vendors-resources/technnical-data">
                Technnical Data
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;
