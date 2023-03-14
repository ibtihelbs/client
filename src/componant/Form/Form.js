import React, { useState, useEffect } from 'react';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost, repliesPost } from '../../Actions/Posts';
const Form = ({setCurrentId, currentId, replie}) => {
    const images= {
        'image': './images/avatars/image-juliusomo.png'
    }
    const [replyConst, setReplyConst]= useState({content:"",
    image: images,
    username: "juliusomo",});  
    const [postData, setPostData]=useState({
    content:"",
    image: images,
    username: "juliusomo",
    replies: replyConst,
    })
     
   
    const post = useSelector((state)=>  currentId  ?  state.Posts.find((p) => p._id === currentId ) : null);
    //const reply = useSelector((state)=>  replie  ?  state.Posts.find((p) => p._id === replie ) : null);
    useEffect(() => {
        if (post) {
            setPostData(post)};
      }, [post]);
    const dispatch = useDispatch();
    const clear = () => {
        setCurrentId(0);
        setPostData({
            content:"",
            image: "./images/avatars/image-juliusomo.png",
            username: "juliusomo",
            });
    }
    
    const handleSubmit=(e)=>{
       e.preventDefault();
       
       if (currentId === 0) {
        dispatch(createPost(postData));
        console.log("created");
        
      } else if(replie){
        dispatch(repliesPost(replie, replyConst))
        console.log("wird");
      } else
      {  
        dispatch(updatePost(currentId, postData));
        console.log("creaupdateted");
      }
      clear();
    }
    //console.log(postData, replyConst, typeof(replyConst));
    return (
        <div className="Form  bg-White p-4 rounded-2xl h-40">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full h-full gap-2">
              <img className="hidden sm:flex w-10 h-10" src={images.image} alt ="ggg"/>
              <textarea placeholder='Add comment....' className="flex self-stretch rounded-2xl border-2 border-Lightgray resize-none p-4 flex grow" value={replie ? replyConst.content : postData.content}
               onChange={(e)=>replie ? setReplyConst({...replyConst, content : e.target.value})  : setPostData({...postData, content : e.target.value})}></textarea>
              <div className="flex justify-between">
               <img className="flex sm:hidden w-10 h-10" src={images.image} alt ="ggg"/>
               <input placeholder='username' onChange={(e)=> setPostData({...postData, username : e.target.value})} />
               <FileBase64 type="file" multiple={false} onDone={({ base64 }) => replie ? setReplyConst({...replyConst, image: base64}): setPostData({ ...postData, image: base64 })} />
               <button className ="self-start bg-ModerateBlue text-White py-2 px-5 rounded" type="submit">{replie ? 'REPLY': currentId ? 'UPDATE' : 'SEND'}</button>
              </div>
            </form>
        </div>
    );
};

export default Form;
//