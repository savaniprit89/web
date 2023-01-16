import React, { useState } from "react";

function Createarea(props){
const [note,setnote]=useState({
    title:"",
    context:""
})
function handlechange(event){
    const {name,value}=event.target;
    setnote(prevNote=>{
        return{
            ...prevNote,
            [name]:value
        }
    })
}
function submitnote(event){
    props.onAdd(note);
event.preventDefault();//not reload page on click
}
return(
    <div>
        <form>
            <input name="title" onChange={handlechange} value={note.title} placeholder="title" />
            <textarea name="context"onChange={handlechange}  value={note.context} placeholder="take a not" rows="3"></textarea>
            <button onClick={submitnote}>add</button>
        </form>
    </div>
);
}

export default Createarea;