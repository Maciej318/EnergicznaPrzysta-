'use client';

import {motion} from 'framer-motion'
import {TypingText } from '../components';
import styles from '../styles'
import {staggerContainer, fadeIn, planetVariants, textVariant} from '../utils/motion'


const GetStarted = () => (
  <section id="contact" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: 'false', amout: 0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}    
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img src='/get-started.png' alt='get-started' className='w-[90%] h-[90%] object-contain'/>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] flex justify-center flex-col'
      >
        <TypingText title="| Kontakt"/>
        <motion.p
         variants={textVariant(1)}
         className='flex flex-col gap-2 text-primary-black drop-shadow-2xl'
        >
          <span className='font-bold text-xl'>E-mail:</span>
            <a className='hover:text-lime-600  cursor-pointer transition'>biuro@energicznaprzystan.com</a>
          <span className='font-bold text-xl'>Telefon:</span>
            <a href='tel:515 288 313' className='hover:text-lime-600 transition'>515-288-313</a>
          <span className='font-bold text-xl'>Adres:</span>
            <a href='https://www.google.com/maps/place//data=!4m2!3m1!1s0x471fedac4164b1df:0x837286a3f6a136dc?sa=X&ved=1t:8290&ictx=111' className='hover:text-lime-600 transition'>Główna 53a</a>
        </motion.p>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
