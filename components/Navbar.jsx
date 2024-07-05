'use client';

import {motion} from 'framer-motion'
import styles from '../styles'
import {navVariants, slideIn} from '../utils/motion'
import { useState } from 'react';
import NavItem from './NavItem';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return(
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div  className='absolute w-[50%] inset-0 gradient-01'/>
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <img src="/search.svg" alt="search" className='w-[24px] h-[24px] object-contain'/>
        <h2 className='font-extrabold  text-[24px] leading-[30px] text-primary-black tracking-tighter'>ENERGICZNA PRZYSTAŃ</h2>
      
        {open === true ? 
          (<>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: open ? 0.1 : 0 } }}
              className='gradient-02 z-0'
            />
            <img src='/menu.svg' alt='menu' className='w-[24px] h-[24px] -rotate-180 object-contain cursor-pointer' onClick={() => setOpen(!open)}/>
          </>)
         :
          (<img src='/menu.svg' alt='menu' className='w-[24px] h-[24px] object-contain cursor-pointer' onClick={() => setOpen(!open)}/>)
        }
        {open && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: open ? 0.1 : 0 } }}
            className='absolute top-[80px] right-[0px] z-20'
          >
            <NavItem />
          </motion.div>
        )
        }
      </div>
    </motion.nav>
  )
};

export default Navbar;
