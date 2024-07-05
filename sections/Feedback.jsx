'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section id="feedback" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: "false", amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient"/>
        <div>
          <div className="mb-1 flex lg:-ml-2 lg:text-[30px] text-[20px] drop-shadow-xl">
            <motion.p
              variants={zoomIn(0.2, 1)}
            >
              ⭐
            </motion.p>
            <motion.p
              variants={zoomIn(0.4, 1)}
            >
              ⭐
            </motion.p>
            <motion.p
              variants={zoomIn(0.6, 1)}
            >
              ⭐
            </motion.p>
            <motion.p
              variants={zoomIn(0.8, 1)}
            >
              ⭐
            </motion.p>
            <motion.p
              variants={zoomIn(1, 1)}
            >
              ⭐
            </motion.p>
          </div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-primary-black">
            Zuzanna 
          </h4>
          <p className="mt-2 font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-primary-black">
            Klijentka | Energicznej przystani
          </p>
        </div>

        <p className="mt-7 font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-primary-black">
          Jestem absolutnie zachwycona Energiczną Przystanią! 
          To miejsce jest prawdziwym rajem dla dzieci i rodziców. 
          Od chwili wejścia do środka można poczuć 
          energię i radość unoszące się w powietrzu.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img src="/planet-09.JPG" alt="planet09" className="w-full lg:h-[610px] h-auto h-min-[210px] object-cover rounded-[40px]" />
      </motion.div>

    </motion.div>
  </section>
);

export default Feedback;
