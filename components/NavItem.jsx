import React from 'react'

 
function NavItem() {

  return (
    <div className='border-y-2 border-l-2 border-gray-400 p-10 bg-[rgba(241,241,241,0.9)] rounded-l-xl text-lg'>
        <ol>
            <li className='mb-1'>
                <a href='#about' className='text-primary-black transition hover:text-lime-600  cursor-pointer '>O Nas</a>
            </li>
            <li className='mb-1'>
                <a href='#explore' className='text-primary-black transition hover:text-lime-600  cursor-pointer'>Opłaty</a>
            </li>
            <li className='mb-1'>
                <a href='#contact' className='text-primary-black transition hover:text-lime-600  cursor-pointer'>Kontakt</a>
            </li>
            <li className='mb-1'>
                <a href='#feedback' className='text-primary-black transition hover:text-lime-600  cursor-pointer'>Opinie</a>
            </li>
        </ol>
    </div>
  )
}

export default NavItem