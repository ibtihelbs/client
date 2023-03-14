import React, { useState} from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import Form from '../Form/Form'
const Posts = ({ currentId, setCurrentId}) => {
    const Posts = useSelector((state)=> state.Posts);
    const [Slide, setSlide]= useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    
    return (
        !Posts.length ? "NO post" :
            <div className="flex flex-col gap-1">
                {
                Posts.map((post)=>
                   (
                    <div key={post._id}  className="flex flex-col gap-1">
                        
                        <Post post={post} Slide={Slide} setSlide={setSlide}  setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} setCurrentId ={setCurrentId}/>
                           { !Slide && post._id === currentSlide ? <div className="flex flex-col  gap-1"> 
                            { post.replies.map((reply) => (
                                <div key ={reply._id}  className={"flex flex-col"}>
                                    <Post post={reply} setCurrentId ={setCurrentId} Slide={Slide} setSlide={setSlide}  setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} />
                                </div>
                            )) }
                        
                        <div key ={post._id} className={"flex flex-col"}>
                         <Form replie ={post._id} currentId= {currentId} setCurrentId={setCurrentId}/>
                        </div>
                      </div> : null } 
                    </div>
                    )
                )
            }
            </div>
    );
};

export default Posts;