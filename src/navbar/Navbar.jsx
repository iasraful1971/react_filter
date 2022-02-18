import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
const Navbar = () => {

    const Links =[
        {name: "Home" , link:"/"},
        {name:"Service", link:"/servie"},
        {name:"Articles", link:"/"},
        {name: "Contact", link:"/"},
        {name: "About us", link:"/"}
    ]
    const [open , setOpen ] =useState(false);
    return (
        <>
         <div className="shadow-md w-full fixed top-0 left-0 ">
             <div className="md:flex items-center justify-between bg-gray-200 py-5 md:px-10 px-7">
                <div className='font-bold text-2xl cursor-pointer flex items-center text-black-800'>
                    <span className='text-4xl text-indigo-800 mr-2'>
                        <AcUnitIcon/>
                    </span>
                    Designer
                </div>
                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                          { open? <CloseIcon/> : <MenuIcon/>}                     
                    </div>
                    <ul  className={`md:flex md:items-center md:pb-0 pb-12 absolute   md:static md:bg-gray-200 bg-amber-50 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 md:pt-0 pt-4  transition-all duration-500 ease-in ${open ? 'top-20': 'top-[-490px] md:opacity-100 opacity-0'} `}>
                        {
                            Links.map((link) => (
                                
                                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                                    <a className='text-dark-500 hover:text-grey-400' href={link.link}>{link.name}</a>
                                </li>
                            ))
                        }
                       
                        
                    </ul>
                
             </div>
        </div>   
        </>
    );
};

export default Navbar;