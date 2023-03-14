import { useState, useEffect } from 'react';
import './App.css';
import {getPosts} from './Actions/Posts'
import {useDispatch} from 'react-redux';
import Posts from './componant/Posts/Posts';
import Form from './componant/Form/Form';
function App() {
  const dispatch = useDispatch();

  const [currentId, setCurrentId]= useState(null);
  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch])
  return (
    <div className="App h-full w-full flex justify-center flex items-center">
      <header className="App-header h-5/6 w-4/5  bg-Verylightgray flex flex-col gap-1">
        <Posts setCurrentId={setCurrentId} />
        <Form currentId= {currentId} setCurrentId={setCurrentId} />
      </header>
    </div>
  );
}

export default App;
