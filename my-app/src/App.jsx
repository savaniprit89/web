import React, { useState } from 'react';

import Header  from './Header.jsx';
import List from './List'
import Footer from './footer.jsx';
import Note from './Note.jsx';
import notes from './notes.js';
import Createarea from './Createarea.jsx';
/* version-1 function App(){
    return <div>
        <Header />
        <Note  />
        <Footer />
    </div>
}

*/
/*version-2
function createnotes(noteitem){
    return(
        <Note key={noteitem.key} title={noteitem.title}  content={noteitem.content} />
    )
}
function App(){
    return <div>
        <Header />
        {notes.map(createnotes)}
        <Note  title="prit" content="savani" />
        <Footer />
    </div>
}
*/
function App(){
    const [notes,setnote]=useState([])

    function addnote(note){
        setnote(prevNotes=>{
         return   [...prevNotes,note];
        })
    }
    return <div>
        <Header />
        
        <Createarea onAdd={addnote} />
        {notes.map((noteitem) => {
            return 
            <Note title={noteitem.title} content={noteitem.content} />

        } )
        }
    
        <Footer />
    </div>
}

export default App;