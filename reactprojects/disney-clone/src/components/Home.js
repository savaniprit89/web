import React ,{ useEffect } from "react";
import styled from 'styled-components'
import ImgSlicder from "./ImgSlicder";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase";
import { useDispatch } from "react-redux"
import { setMovies } from "../features/movie/movieSlice"

function Home(){
 const dispatch = useDispatch();
 useEffect(()=>{
  console.log("hekko");
   //useeffect run when home component is loaded
    db.collection("movies").onSnapshot((snapshot)=>{
     let tempMovies=snapshot.docs.map((doc)=>{
       console.log(doc.data());
          return{ id : doc.id, ...doc.data()}
      
      })
      //dispatch(setMovies(tempMovies));

      console.log(snapshot)
     

    })
  }, [])

  //use effect run when all component loaded
    return(
      <Container>
        <ImgSlicder />
        <Viewers />
        <Movies />
      </Container>
        
    )
}

export default Home

const Container=styled.main`

min-height:calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;
overflow-x:hidden;

&:before{
background:url("/images/home-background.png") center center / cover
 no-repeat fixed;
content:"";
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
}
`
//here before add div below container as z-index is 1;



//store---->movies

//home got to ---->store

//movies(store) go to----->Movies