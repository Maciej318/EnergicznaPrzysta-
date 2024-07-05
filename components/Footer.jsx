'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import { socials } from "../constants";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className="flex flex-col">
      <div className="mb-[50px] h-[2px] bg-black opacity-10"/>

      <div className="flex items-center justify-between flex-wrap gap-4"> 
        <h4 className="font-extrabold text-[24px] text-primary-black drop-shadow-xl">Energiczna Przystań</h4>
        <p className="font-normal text-[14px] text-primary-black opacity-90">
          Copyright&copy;2024 - 2025 Maciej Brzozowski All rights reserved
        </p>
        <div className="flex gap-4">
          {socials.map((social) => (
            <a 
              href={social.pageUrl}
              key={social.name} 
            >
              <img 
                src={social.url} 
                alt={social.name} 
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
