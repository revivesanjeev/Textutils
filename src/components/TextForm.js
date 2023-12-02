import React, { useState     } from 'react'



export default function TextForm(props) {

    const handleUpclick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upperCase!","success");

    }

    const handlelowclick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerCase!","success");


    }

    const handleOnChange = (event)=>{
        // console.log("On change  ");
       setText(event.target.value);
    }

   
    const handleclearclick=()=>{
      let newText='';
      setText(newText)
      props.showAlert("Text cleared add New Text!","success");
    }

    const handlecopy=()=> {
        var text = document.getElementById("myBox")
        text.select();
        text.setSelectionRange(0,999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!","success");
    }


    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space has been  removed!","success");
    }


    const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'? 'white': '#042743'}}>
    <div>
     <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'? 'grey': 'white',color:props.mode==='dark'? 'white': '#042743' }} id="myBox" rows="8"></textarea>
</div>

<button className="btn btn-primary"onClick={handleUpclick}>convert to uppercase</button>

<button className="btn btn-primary mx-2"onClick={handlelowclick}>convert to lowercase</button>

<button className="btn btn-primary mx-2"onClick={handleclearclick}>clear text</button>
<button className="btn btn-primary mx-2"onClick={handlecopy}>copy text</button>
<button className="btn btn-primary mx-2"onClick={handleExtraSpaces}>remove extra space</button>
    </div>
    </div>
 


<div className="container my-3" style={{color:props.mode==='dark'? 'white': '#042743'}}>
<h2>Your Text summary</h2>
<p> {text.split(" ").length} words and {text.length}characters</p> 
<p>{0.08*text.split(" ").length}  Minutes read </p>
<h2>Preview</h2>

<p>{text.length>0 ? text:"Enter something in the textbox above to preview it here"}</p>

</div>


    </>
  )
} 

