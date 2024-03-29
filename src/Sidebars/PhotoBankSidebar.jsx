import { Link } from "react-router-dom";
import "../scss/Sidebar.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
function PhotoBankSidebar() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="sidebar"
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: "100%", opacity: 1 }}
            exit={{ height: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="sidebar-container">
              <h2>Photo Bank</h2>
              <Link to="/cpf-vendors-resources/photo-bank/inspire-black-edition">Inspire Black Edition</Link>
              <Link to="/cpf-vendors-resources/photo-bank/deco-54">Deco54</Link>
              <Link to="/cpf-vendors-resources/photo-bank/spirit-xl">Spirit XL</Link>
              <Link to="/cpf-vendors-resources/photo-bank/keys">Keys</Link>
              <Link to="/cpf-vendors-resources/photo-bank/project">Project</Link>
              <Link to="/cpf-vendors-resources/photo-bank/hydrowood">Hydrowood</Link>
              <Link to ="/cpf-vendors-resources/photo-bank/quick48">Quick48+</Link>
              <Link to="/cpf-vendors-resources/photo-bank/decotile">Decotile</Link>
              <Link to="/cpf-vendors-resources/photo-bank/evolve">Evolve</Link>
              <Link to="/cpf-vendors-resources/photo-bank/supreme">Supreme</Link>
            </div>
            <div className="close-sidebar" onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-chevron-up"></i>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence initial={true}>
        {!isOpen && (
          <div className="open-sidebar" onClick={() => setIsOpen(true)}>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PhotoBankSidebar;
