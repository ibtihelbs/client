import React from 'react';

const ButtonReply = ({Reply, Slide, setSlide, setCurrentSlide, post}) => {
    return (
        
        <button className="flex items-center text-ModerateBlue gap-1 cursor-pointer"   onClick={() =>{setSlide(!Slide); setCurrentSlide(post._id)}}><img src={Reply} alt="replay"/>Reply</button>
    );
};

export default ButtonReply; 