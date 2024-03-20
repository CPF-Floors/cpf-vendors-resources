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
          class="fa-solid fa-camera">
        </i>
        <p style={{color:"white", marginTop:"8px"}}>Roomvo Visualizer</p>        
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
            <iframe src="https://www.roomvo.com/my/cpffloors/" style={{borderRadius:"16px"}} width="95%" height="95%" frameborder="0" scrolling="yes"></iframe>
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
