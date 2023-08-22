import { useState } from "react"
import React from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText= text.toUpperCase();
        SetText(newText)
        props.showAlert("Converted to UpperCase","success");

    }

    const handleLoClick=()=>{
        let newText= text.toLowerCase();
        SetText(newText)
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick=()=>{
        let newText=(" ")
        SetText(newText);
        props.showAlert("Cleared","success");
    }
    const handleRevClick=()=>{
        let newText= text.split('').reverse().join('');
        SetText(newText);
        props.showAlert("Text has been reversed","success");
    }
    const handleCopyClick=()=>{
    var text= document.getElementById("exampleFormControlTextarea1");
       text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Succesfully Copied","success");
    }
    const handleSpaceClick=()=>{
        let newtext= text.split(/[ ]+/);
        SetText(newtext.join(" "))
        props.showAlert("Removed Extra Spaces","success");
    }
    const handelonChange=(event)=>{
        SetText(event.target.value);
    }
    const[text,SetText]= useState('');
  return (
    <>
    <div style= {{color: props.mode==='dark'?'white': 'black'}} className="Container">  
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelonChange} style= {{backgroundColor: props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'white': 'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button type="button" onClick={handleUpClick} className="btn btn-primary mx-2">UpperCase</button>
        <button type="button" onClick={handleLoClick} className="btn btn-primary mx-2">LowerCase</button>
        <button type="button" onClick={handleClearClick} className="btn btn-primary mx-2">Clear</button>
        <button type="button" onClick={handleRevClick} className="btn btn-primary mx-2">Reverse</button>
        <button type="button" onClick={handleCopyClick} className="btn btn-primary mx-2">Copy text</button>
        <button type="button" onClick={handleSpaceClick} className="btn btn-primary mx-2">Remove Extra Space</button>

    </div>
    <div style= {{color: props.mode==='dark'?'white': 'black'}} className="container">
        <h2>Text Summary</h2>
        <p>The text have {text.split(" ").length} word and {text.length} characters</p>
        <p>Time it takes to read {0.002*text.split(" ").length}</p>
    </div>
    <h3 style= {{color: props.mode==='dark'?'white': 'black'}}>TEXT PREVIEW</h3>
    <p style= {{color: props.mode==='dark'?'white': 'black'}}>{text.length>0? text:'Enter your text in above textbox to preview'}</p>
    </>
  )
}
