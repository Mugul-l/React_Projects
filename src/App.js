import { useState } from "react";
import './App.css';

function App() {

  const[text, setText]= useState("");

  let caseHandler=(e)=>{
    setText(e.target.value)
  }
  let convertUpperCase=()=>{
    setText(text.toUpperCase())
  }

  let remove=()=>{
    setText(" ")
  }
  return (
    <>
    <center>
    <div>
      <textarea type="text" value={text} onChange={caseHandler} ></textarea>
      <button onClick={convertUpperCase}>convert to uppercase &rarr;</button>
      <button onClick={remove}>Clear</button>
    </div>
    </center>
    </>
  );
}

export default App;
