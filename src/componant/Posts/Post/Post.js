import React, { useState } from 'react';
import Modal from './Modal';
import ButtonReply from './ButtonReply';
import ButtonCurrent from './ButtonCurrent';
import { useDispatch } from 'react-redux';
import { scorePost } from  '../../../Actions/Posts';

import moment from 'moment';

const Post = ({post ,setCurrentId, currentSlide, Slide, setSlide, setCurrentSlide}) => {
    const dispatch = useDispatch();
    const icons= {
        'delete': './images/icon-delete.svg', 
        'edit'  : './images/icon-edit.svg',
        'minus' : './images/icon-minus.svg', 
        'plus'  : './images/icon-plus.svg',
        'replay': './images/icon-reply.svg',
    }
    console.log(post.score, post.content)
    const [modalDelete, setModalDelete] = useState(false);
    return (
        <div className="Post bg-White flex flex-col flex justify-between sm:flex-row p-4 rounded-2xl h-40">
            <div className="flex justify-between sm:order-1 order-2">
            <div className="bg-Verylightgray sm:h-full self-end grid justify-items-center flex flex-row flex items-center sm:flex sm:flex-col sm:flex sm:justify-around grid grid-cols-3  p-1 w-24  sm:w-10 sm:p-4 rounded-sm">
               <button  onClick={()=>dispatch(scorePost(post._id))}><img src={icons.plus} alt="plus"/></button>
               <button className="text-ModerateBlue"> {post.score} </button>
               <button><img src={icons.minus} alt="minus"/></button>
            </div>
            <div  className="flex flex-row flex items-center sm:hidden ">
                  { post.username === 'juliusomo' ?<ButtonCurrent Delete={icons.delete} Edit={icons.edit}  setModalDelete={setModalDelete} modalDelete={modalDelete} setCurrentId={setCurrentId} post={post} />
                  :<ButtonReply Reply={icons.replay} post={post} setSlide={setSlide} Slide={Slide} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>}
            </div>
            </div>
            <div className="w-full h-10 sm:order-2 order-1">
               <div className="flex justify-between"> 
               <div className="username flex items-center gap-1"><img className="w-10" src={post.image} alt={post.username} />
                <h1>{post.username}</h1>
                
                <p >{moment(post.createdAt).fromNow()}</p>
                </div>
                <div  className="hidden sm:flex flex-row flex items-center">
                  { post.username === 'juliusomo' ?<ButtonCurrent Delete={icons.delete} Edit={icons.edit}  setModalDelete={setModalDelete} modalDelete={modalDelete} setCurrentId={setCurrentId} post={post} />
                  :<ButtonReply Reply={icons.replay} post={post} setSlide={setSlide} Slide={Slide} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>}
                </div>
               </div>
            
            <p>this is content{post.content}</p>
            {modalDelete  ? <Modal post={post} setCurrentId={setCurrentId} modalDelete={modalDelete} setModalDelete={setModalDelete}/> : null}
            </div>
            
        </div>
    );
};

export default Post;
