import { Container } from '@mui/material'
import React from 'react'
import Header from './Header'
import Section from './Section'
import Styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function Callus() {
    return (
       
        <Container>
        
      
            <Fade left>
            <Content>
                    <Whtsapp>
                    <img src="/images/whtsapp.png" /><p>whatsapp me on <u><a href="tel:+91-7007890580">7007890580 </a></u></p>
                    </Whtsapp>
                    <Call>
                    <img src="/images/call.jpg" /><p>call me on <u><a href="tel:+91-7007890580">7007890580 </a></u></p>
                    </Call>

                </Content>
                </Fade>

</Container>


    )
}

export default Callus






const Content= Styled.div`

margin-top:10%;
display: flex;
flex-direction: column;
justify-content: space-between;


justify-content: center;


img{


float: left;
margin-left: 0%;
width: 10%;
}
`


const Whtsapp= Styled.div`

margin-top:5%;
border-radius : 10px;
border-style: solid;
padding:2%;



p{
        font-size: large;
        float :left
        margin-left:5%;
        margin-top:3%;
}

u{

    text-decoration: none;

}


`


const Call= Styled.div`

font-size: large;
margin-top: 5%;
border-radius : 10px;
border-style: solid;
padding:2%;

u{

    text-decoration: none;

}

p{

    float :left
    margin-left:5%;
    margin-top:3%;
}




`