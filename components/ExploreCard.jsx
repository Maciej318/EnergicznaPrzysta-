'use client';

import {motion} from 'framer-motion'
import { fadeIn } from '../utils/motion'

const ExploreCard = ({ id, imgUrl, title, cost, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} drop-shadow-xl flex items-center 
    justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img 
      src={imgUrl}
      alt={title}
      className='absolute w-full h-full object-cover rounded-xl'
    />
    {active !== id ? (
      <h3 className='font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-[125px] lg:rotate-[-90deg] lg:origin-[0,0] drop-shadow-lg'>
        {title}
      </h3>
    ) : (
      <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-xl'>
        <p className='font-normal text-[16px] leading-[20px] text-white uppercase'>{cost}</p>
        <h2 className='mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white'>
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
