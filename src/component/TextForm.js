import React, {useState} from 'react'
export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpClick =()=>{
    console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
//    setText("you have clicked to uppercase")
    props.showAlert("Coverted to Upper Case","success")
  }
  
  const handleCapitalizeClick =()=>{
    console.log("Captialize was clicked");
    
    // let sepText = text.split(" ");
    let newText = text.toLowerCase().split(" ")
    .map((word)=>word.toUpperCase().charAt(0)+word.slice(1).toLowerCase()).join(' ');
    setText(newText);
    props.showAlert("Words are Capitalized","success")
  }
  
  const handleLoClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lower Case","success")
  }
  
  const handleCopy=()=>{
    var newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    // setText(newText);
    props.showAlert("Copied text","success")
  }

  const handleOnChange= (event)=>{
    console.log("On change");
    setText(event.target.value);
  }

  return (
    <div style={{color:props.mode==='dark'? 'white': 'black'}}>
    <div className='container'>
        <h2 className='container' style={{color:props.mode==='dark'? 'white': 'black'}}>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'gray': 'white'}} id="myBox" rows="8"></textarea>
        </div> 
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-1' onClick={handleCapitalizeClick}>Capitalize</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
    </div>
    <div className='container my-2' style={{color:props.mode==='dark'? 'white': 'black'}}>
    <h2>Your text summary</h2>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    <p> {0.008*text.split(" ").length} Minutes Reading</p>
    
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter your text to preview here"}</p>
    </div>
    </div>
    
  )
}