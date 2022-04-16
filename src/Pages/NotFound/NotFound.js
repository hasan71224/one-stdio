import React from 'react';
import error from '../../images/error.jpg'

const NotFound = () => {
    return (
        <div className='text-center mt-5'>
            <img className='w-25' src={error} alt="" />
        </div>
    );
};

export default NotFound;