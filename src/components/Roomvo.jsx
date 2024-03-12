import { motion, AnimatePresence } from "framer-motion";

import "../scss/Roomvo.scss";
import { useState } from "react";

function Roomvo() {
  const [openRoomvo, setOpenRoomvo] = useState(false);

  return (
    <>
      <button className="roomvo-button">
        <i
          onClick={() => setOpenRoomvo(!openRoomvo)}
          className="fa-regular fa-eye"
        ></i>
      </button>

      {/* ROOMVO IFRAME */}

      {openRoomvo && (
        <AnimatePresence>
          <motion.div
            className="roomvo-iframe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="close-iframe"></div>
          </motion.div>
        </AnimatePresence>
      )}

      <AnimatePresence initial={false}>
        {openRoomvo && (
          <motion.div
            className="roomvo-iframe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <iframe src="https://www.roomvo.com/my/cpffloors/" width="100%" height="100%" frameborder="0" scrolling="yes"></iframe>
            <div
              className="close-iframe"
              onClick={() => setOpenRoomvo(false)}
            ></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Roomvo;
