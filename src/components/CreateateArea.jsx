import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [input, setinput] = useState({
    title: "",
    content: ""
  });
const [isExpanded , setExpanded] = useState(false)

  function Handelchange(event) {
    const {name , value} = event.target
    return setinput(prevalue=>{
        return {
            ...prevalue,
            [name] : value
        }
    });
}

function Handelclick(event){
    props.Add(input)
    // event.preventDefault();
    setinput({
        title: "",
        content: ""
    })
}

function Expand (){
    return setExpanded(true)
}

// console.log(input)

  return (
    <div className="container">
      <form action="">
        {isExpanded? <input
          onChange={Handelchange}
          name="title"
          type="text"
          placeholder="Title"
          value={input.title}
          /> : null }
        <textarea
          onChange={Handelchange}
          name="content"
          rows={isExpanded? 3 : null}
        // rows="3"
          placeholder="Take a note..."
          value={input.content}
          onClick={Expand}
        ></textarea>
        {isExpanded?  <button onClick={Handelclick} type="button"><AddIcon/></button> : null}

      </form>
    </div>
  );
}

export default CreateArea;
