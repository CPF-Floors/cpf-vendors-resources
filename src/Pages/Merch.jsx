import TechSidebar from "../Sidebars/TechSidebar";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import "../scss/TechnnicalData.scss";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import SellSheetsCarousel from "../MerchCarousels/SellSheetsCarousel";
import ProductsGuideCarousel from "../MerchCarousels/ProductsGuideCarousel";
import CPFBenefitsCarousel from "../MerchCarousels/CPFBenefitsCarousel";
import ProductKitCarousel from "../MerchCarousels/ProductKitCarousel";
import MediaKitCarousel from "../MerchCarousels/MediaKitCarousel";
import MerchSidebar from "../Sidebars/MerchSidebar";
import Roomvo from "../components/Roomvo";

import "../scss/Merch.scss";

function Merch() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <h2>Sell Sheets</h2>
        <SellSheetsCarousel />
        <h2>Products Guide</h2>
        <motion.div
          className="merch-container"
          initial={{ y: 200, opcacity: 0 }}
          whileInView={{ y: 0, opcacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            target="blank"
            to="https://drive.google.com/file/d/1EElmWfTw7UGnUaqHmYtXJyx_WUpmHuzX/view"
          >
            <motion.div
              className="merch-card"
              whileInView={{ scale: 1.2, rotate: 2 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/cpf-vendors-resources/assets/productguide01.png"
                alt=""
              />
              <h3>Cleaning & Maintenance</h3>
            </motion.div>
          </Link>

          <Link
            target="blank"
            to="https://www.canva.com/design/DAFvNvA3bW8/-QXgepCD3QAXOChJ8Vo-HQ/view?utm_content=DAFvNvA3bW8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
          >
            <motion.div
              className="merch-card"
              whileInView={{ scale: 1.2, rotate: 2 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/cpf-vendors-resources/assets/productguide.png"
                alt=""
              />
              <h3>Interactive PDF</h3>
            </motion.div>
          </Link>
        </motion.div>

        <h2>CPF Benefits</h2>

        <motion.div
          className="merch-container"
          initial={{ y: 200, opcacity: 0 }}
          whileInView={{ y: 0, opcacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            target="blank"
            to="https://drive.google.com/file/d/1ShT5CLoXcvRLBEf8LXtoad92xjIUsHdr/view"
          >
            <motion.div
              className="merch-card"
              whileInView={{ scale: 1.2, rotate: 2 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/cpf-vendors-resources/assets/BENEFITS.png" alt="" />
              <h3>CPF Benefits</h3>
            </motion.div>
          </Link>

          <Link
            target="blank"
            to="https://www.canva.com/design/DAFvNvA3bW8/-QXgepCD3QAXOChJ8Vo-HQ/view?utm_content=DAFvNvA3bW8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
          >
            <motion.div
              className="merch-card"
              whileInView={{ scale: 1.2, rotate: 2 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/cpf-vendors-resources/assets/BENEFITS01.png" alt="" />
              <h3>Interactive PDF</h3>
            </motion.div>
          </Link>
        </motion.div>

        <h2>Product Kit</h2>

        <motion.div
          className="merch-container"
          initial={{ y: 200, opcacity: 0 }}
          whileInView={{ y: 0, opcacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            target="blank"
            to="https://drive.google.com/file/d/1-fQJX4E-bHBnA43tKq2ZFNel1OGWUHQU/view"
          >
            <motion.div
              className="merch-card"
              whileInView={{ scale: 1.2, rotate: 2 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/cpf-vendors-resources/assets/productskit01.png"
                alt=""
              />
              <h3>Products Kit</h3>
            </motion.div>
          </Link>

          <Link
            target="blank"
            to="https://www.canva.com/design/DAFvrNd4ix4/CnE7CXPJNkz2KXhYooAObA/view?utm_content=DAFvrNd4ix4&utm_campaign=designshare&utm_medium=link&utm_source=editor"
          >
            <motion.div
              className="merch-card"
              whileInView={{ scale: 1.2, rotate: 2 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/cpf-vendors-resources/assets/productskit.png" alt="" />
              <h3>Interactive PDF</h3>
            </motion.div>
          </Link>
        </motion.div>

        <h2>Media & Press Kit</h2>

        <motion.div
          className="merch-container"
          initial={{ y: 200, opcacity: 0 }}
          whileInView={{ y: 0, opcacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            target="blank"
            to="https://www.canva.com/design/DAF5Tr91stI/-edsY29hx8SCoO-p2Llptg/view?utm_content=DAF5Tr91stI&utm_campaign=designshare&utm_medium=link&utm_source=editor"
          >
            <motion.div
              className="merch-card"
              whileInView={{ scale: 1.2, rotate: 2 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/cpf-vendors-resources/assets/MEDIAPRESSKIT.png"
                alt=""
              />
              <h3>Interactive PDF</h3>
            </motion.div>
          </Link>

          <Link
            target="blank"
            to="https://drive.google.com/file/d/1jgaY4EI4fkQbqMAvluJoM_py2OzGQkFC/view"
          >
            <motion.div
              className="merch-card"
              whileInView={{ scale: 1.2, rotate: 2 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/cpf-vendors-resources/assets/MEDIASTEPS.png" alt="" />
              <h3>Steps Custom Made</h3>
            </motion.div>
          </Link>
        </motion.div>

        <Roomvo />
      </Suspense>
      <Footer />
    </>
  );
}

export default Merch;
