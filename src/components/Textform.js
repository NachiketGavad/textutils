import React,{useState} from 'react'

export default function Textform(props) {
  // default textarea
  const [text, setText] = useState("Enter Text Here");

  // default toggle button
  const [buttontxt, setbuttontext] = useState("Enable Dark Mode");

  // style changing mode
  const [mystyle, setMystyle] = useState({
    color:'black',
    backgroundColor:'white'
  })

  const handleUpClick = ()=>{
    console.log("upper clicked");
    setText(text.toUpperCase());
  }

  const handleLowClick = ()=>{
    console.log("lower clicked");
    setText(text.toLowerCase());
  }

  const handleClear = ()=>{
    console.log("Clear clicked");
    setText("");
  }

  const handleOnChange = (event)=>{
    console.log("text changed "+ text);
    setText(event.target.value)
  }
  
  // toggle style
  const toggleStyle = ()=>{
    console.log("toggle");
    if (mystyle.color==='white') {
      setMystyle({
        color:'black',
        backgroundColor:'white'
      })
      setbuttontext("Enable Dark Mode");
    }
    else{
      setMystyle({
        color:'white',
        backgroundColor:'black'
      })
      setbuttontext("Enable Light Mode");
    }
  }

  // copy using navigator interface
  const handleCopy = ()=>{
    console.log("Copying Text");
    // var text1=document.getElementById('exampleFormControlTextarea1');
    // text1.select();
    // navigator.clipboard.writeText(text1.value);
    navigator.clipboard.writeText(text);
  }

  // Remove extra
  const handleRemoveextra = ()=>{
    console.log("Remove extra");
    let mytext = text.split(/[ ]+/);
    setText(mytext.join(" "));
  }

  return (
    <div style={mystyle} className={ `mb-3 bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`}  >
        <div className="container" >
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Text</label>
            <textarea className={`form-control my-3 bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={mystyle}></textarea>
            <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary m-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary m-2" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary m-2" onClick={toggleStyle}>{buttontxt}</button>
            <button className="btn btn-primary m-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary m-2" onClick={handleRemoveextra}>Remove Extra Space</button>
        </div> 
        <div className='container my-3'>
          <h2>Your Text Summary</h2>
          <p>{text.split(" ").length} Words and {text.length} Characters</p>
        </div>
        <div className='container my-3'>
          <h2>Text Preview</h2>
          {/* <p>{if (text.length>0)?${text}:"Enter TExt";}</p> */}
          <p>{text.length > 0 ? text : "Please Enter Your Text to preview"}</p>

        </div>
    </div>
  ) 
}
