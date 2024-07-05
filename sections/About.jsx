'use client';

import {motion} from 'framer-motion'
import { TypingText } from '../components';
import styles from '../styles'
import {fadeIn, staggerContainer} from '../utils/motion'

const About = () => (
  <section id="about" className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0'/>
    <motion.div 
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title='|Wszystko o nas' textStyles='text-center'/>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-gray-500'
      >
        <span className='font-extrabold text-primary-black'>Energiczna Przystań </span>
        to miejsce, które zaprasza do odkrywania radości i aktywności wśród najmłodszych oraz tych nieco starszych. Wchodząc do tej magicznej sali zabaw, przenosisz się w świat kolorów, 
        <span className='font-extrabold text-primary-black'> dźwięków i niezliczonych możliwości zabawy. </span>
        Na pierwszy rzut oka rzuca się wielobarwna i dynamiczna przestrzeń, wypełniona różnorodnymi atrakcjami, które kuszą do eksploracji.
        <span className='font-extrabold text-primary-black'> Energiczna Przystań </span>
        to także miejsce, gdzie organizowane są różnego rodzaju animacje i zabawy grupowe, prowadzone przez doświadczonych animatorów, którzy potrafią rozbudzić wyobraźnię nawet najbardziej nieśmiałych maluchów.
        <span className='font-extrabold text-primary-black'> Przyjazna atmosfera </span> 
        i troskliwa obsługa sprawiają, że każda wizyta w 
        <span className='font-extrabold text-primary-black'> Energicznej Przystani </span> 
         staje się niezapomnianym przeżyciem zarówno dla dzieci, jak i dla ich opiekunów.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'teen', 0.5, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
