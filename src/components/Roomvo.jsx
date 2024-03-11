import {motion} from "framer-motion"

import "../scss/Roomvo.scss"
import { useState } from "react";

function Roomvo() {

    const [openRoomvo, setOpenRoomvo] = useState(false)

    return ( 

        <>
        <button>
            <i className="fa-regular fa-eye"></i>
        </button>

        {/* ROOMVO IFRAME */}

        <motion.div
            className="roomvo-iframe"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
        </motion.div>
        </>

     );
}

export default Roomvo;