import React from "react";
import styled from "styled-components";

function Detail(){
    return(
  <Container>
    <Background>
        <img src="/images/viewers-national.png" />
    </Background>
    <ImageTitle>
        <img src="/images/viewers-national.png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
        <img src="/images/play-icon-white.png" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupwatchButton>
            <img src="/images/group-icon.png" />
        </GroupwatchButton>
      </Controls>
      <SubTitle>
        2018 * 7m * Family, Fantasy ,Kids, Animation
      </SubTitle>
      <Description>
        svksbkabdkabkbakbkadkadbadbmabywduqwbdqwdiqdoqlbdqjcbmn
        xcbnamvnmvxnamvxaxjkvakxmabnvhavckvxamnvxasnvsahmvnxasvxm
        avxnmavxnabmnanxvanvxnavxnasmxvnmavxnavn
      </Description>
  </Container>

    )
}

export default Detail;

const Container=styled.div`

  min-height: calc(100vh-250px);
  position:relative;
  padding: 0 calc(3.5vw + 5px);
`

const Background = styled.div`
 left: 0px;
  bottom:0;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index:-1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit:cover;
  }
`
const ImageTitle=styled.div`
height: 30vw;
width:35vw;
min-height: 170px;
min-width:200px;
img {
    width: 100%;
    height: 100%;
    object-fit:contain;
  }

`

const Controls=styled.div`
display:flex;
align-items:center;
`

const PlayButton=styled.button`
border-radius:4px;
font-size:15px;
padding:0 24px;
margin-right:22px;
letter-spacing:1.8px;
cursor:pointer;
display:flex;
align-items:center;
height:56px;
background:rgb(249,249,249);
border:none;


&:hover{
  background:rgb(198,198,198);
}
`
const TrailerButton=styled(PlayButton)`
background:rgba(0,0,0,0.3);
border:1px solid rgba(249,249,249);
color:rgb(249,249,249);
text-transform:uppercase;
`
const AddButton=styled.button`
height:44px;
width:44px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
border:2px solid white;
background-color:rgba(0,0,0,0.6);
cursor:pointer;
margin-right:16px;
span{
  font-size:30px;
  color:white;
}
`
const GroupwatchButton=styled(AddButton)`
background:rgb(0,0,0);
`

const Description=styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
color:rgb(249,249,249);


`


const SubTitle=styled.div`
color:rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-top:26px
`