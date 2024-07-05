'use client';

import { useState } from 'react';
import {motion} from 'framer-motion'
import {ExploreCard, TitleText, TypingText } from '../components';
import styles from '../styles'
import {staggerContainer} from '../utils/motion'
import { explorePlans } from '../constants'

const Explore = () => {
  const [active, setActive] = useState()

  return (
    <section
      id="explore"
      className={`${styles.paddings}`}
    >
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount:0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='| Opłaty za przygody' textStyles='text-center'/>
        <TitleText title='Który plan wybierasz?' textStyles='text-center'/>
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[90vh] gap-5'>
          {explorePlans.map((plan, index) => (
            <ExploreCard 
              key={plan.id}
              {...plan}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
};

export default Explore;
