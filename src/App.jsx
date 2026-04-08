import React, { useState } from "react";
import bgImg from "./assets/note.jpg";

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task]
    copyTask.push({title, details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1);
    setTask(copyTask);
  }

  return (
    <div className="h-screen bg-black text-white lg:flex">

      <form className="px-15 py-10 lg:h-full lg:w-1/2" 
      onSubmit={(e)=>{
        submitHandler(e)
      }}>
        
        <h1 className="font-bold text-4xl">Add Notes</h1>

        <div className='lg:h-full flex flex-col gap-8 py-10'>

          <input
            placeholder="Enter Notes Heading"
            type="text"
            className="border-3 outline-0 rounded-xl px-10 py-6 text-xl text-white"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          ></input>

          <textarea 
            placeholder="Write Details" 
            className="outline-0 border-3 h-50 rounded-2xl text-xl p-10 text-white"
            value={details}
            onChange={(e)=>setDetails(e.target.value)}
            ></textarea>

          <button 
            className="border-2 bg-white text-black hover:bg-rose-200 active:scale-95 font-bold py-3 rounded-full text-xl cursor-pointer">
            Add Note
          </button>

        </div>

      </form>
      <div className="px-15 py-10 lg:w-1/2">
        <h1 className="font-bold text-3xl">My Notes</h1>
        <div className="flex h-full gap-4 py-10 flex-wrap overflow-y-auto">
            {task.map(function(elem, idx){
              return <div key={idx} id="card" style={{backgroundImage: `url(${bgImg})`}} className="flex flex-col items-start justify-between h-55 w-50 rounded-2xl text-black text-sm p-5 bg-cover">
                <div>
                  <h3 className="font-semibold line-clamp-2">{elem.title}</h3>
                  <p className="text-xs leading-4 text-gray-800 mt-1 line-clamp-7">{elem.details}</p>
                </div>
                <button 
                  onClick={()=>{
                    deleteNote(idx)
                  }}
                  className="bg-red-400 w-full py-1 rounded text-xs font-bold text-white cursor-pointer hover:bg-red-600 active:scale-95">Delete</button>
              </div>
            })}
        </div>
      </div>

    </div>
  );
};

export default App;
