import React from 'react';

/* version -1  function Note(){
    return (
<div className='note'>
    <h1>this sis title</h1>
    <p>this is content</p>
</div>
    );
}  */
/* version-2*/
function Note(props){
    return (
<div className='note'>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
</div>
    );
}

export default Note;
