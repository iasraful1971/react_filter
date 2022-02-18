import React from 'react';

const Button = (props) => {
    return (
        <div className='bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-white duration-500 hover:text-black'> 
            {props.children}
        </div>
    );
};

export default Button;