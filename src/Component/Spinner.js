import React from 'react';
import spinner from '../ajax-loader.gif';

const Spinner = () => {
    
        return (
            <div className="text-center my-3">
                <img src={spinner} alt="loading"></img>
            </div>
        )
}

export default Spinner
