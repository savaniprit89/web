import React from "react";
import styled from "styled-components";
function Login(){
    return(
       <Container>
            <Content>
                <Logoone src="/images/cta-logo-one.svg" />
                <Signup>
                    GET ALL THERE
                </Signup>
                <Description>
                    avhcjhsvcjhavcjahcvajhvcjhavcjavcjavcjavcajhcvjavcjhavchavc
                    cvajvscacvajhcvachvjcvjhcvasjhcvjhavcjaschajchacjavcjhvac 
                    cbajcvjavcjavcjavcjavc
                </Description>
                <Logoone2 src="/images/cta-logo-two.png" />
            </Content>
       </Container>
    )
}

export default Login

const Container =styled.div`
position:relative;
height:calc(100vh - 70px);
display:flex;
justify-content:center;
align-items:top;

&:before{
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image:url("/images/login-background.jpg");
content:"";
position:absolute;
top:0;
left:0;
right:0;
opacity:0.7;
bottom:0;
z-index:-1;
}

`

const Content=styled.div`

max-width:650px;
padding:80px 40px;
width:90%;
display:flex;
flex-direction:column;
margin-top:100px;
align-items:center;

`

const Logoone=styled.img`
`

const Signup=styled.a`
width:100%;
background-color:#0063e5;
font-weight:bold;
padding: 17px 0;
color:#f9f9f9;
border-radius:4px;
text-align:center;
font-size:18px;
cursor:pointer;
transition:all 250ms;
letter-spacing:1.5px;
margin-top:8px;
margin-bottom:12px;


&:hover{
    background-color:#0483ee;
}
`

const Description=styled.p`
font-size:11px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;

`

const Logoone2=styled(Logoone)`
width:90%;


`