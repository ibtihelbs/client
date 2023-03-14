import React from 'react';
import {useDispatch} from 'react-redux';
import { deletePost } from '../../../Actions/Posts';
const Modal = ({setModalDelete, modalDelete, setCurrentId, post}) => {
  const dispatch = useDispatch(); 
    return (
        <div className="bg-Darkblueop absolute z-10 inset-0 flex items-center flex justify-center">
           <div className="bg-White flex flex-col flex items-center p-4 rounded-sm w-80 flex gap-4">
              <div>
              <h1 className="pb-4 text-Darkblue font-bold">Delete Comment</h1>
                <p className="text-GrayishBlue">
                 Are you sure you want to delete this comment? this will be removed forever! 'Not trying to be darmatic :P' 
                </p>
              </div>
                <div className="flex gap-1">
                  <button className="bg-GrayishBlue text-White py-2 px-5 rounded-sm cursor-pointer hover:Verylightgray" onClick={()=>setModalDelete(!modalDelete)}>no,cancel</button>
                  <button className="bg-SoftRed text-White py-2 px-5 rounded-sm cursor-pointer hover:SoftRed" onClick={() => dispatch(deletePost(post._id))}>yes,delete</button>
                </div>
          
           </div>
        </div>
    );
};

export default Modal;