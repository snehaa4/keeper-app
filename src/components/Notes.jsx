import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Notes(props){
    function Handelclick(){
        props.Del(props.id)
    }
    return(
<div className="note">
<h1>{props.title}</h1>
<p>{props.content}</p>
<button onClick={Handelclick} type="button"><DeleteIcon /></button>
</div>
    )
}

export default Notes;