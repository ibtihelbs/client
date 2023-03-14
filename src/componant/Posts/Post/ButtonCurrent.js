import React from 'react';

const ButtonCurrent = ({Edit , Delete, setModalDelete, modalDelete, post, setCurrentId}) => {
    return (
        <div  className="flex flex-row gap-2">
            <button className="flex flex-row flex items-center text-ModerateBlue rounded gap-1 cursor-pointer" onClick={() => {
                setCurrentId(post._id)
                console.log(post._id)
                }}><img src={Edit} alt="edit"/>Edit</button>
            <button className="flex flex-row flex items-center text-SoftRed rounded gap-1 cursor-pointer " onClick={()=>setModalDelete(!modalDelete)}><img src={Delete} alt="delete"/> Delete</button>
                
        </div>
    );
};

export default ButtonCurrent;