import React from 'react'
import Section from './Section'
import styled from 'styled-components'
import Fade from 'react-reveal'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';


function Printers() {
    return (

      

                <Printer>
                <Fade right>
                    <img src="https://kushmishraa.github.io/ssprinters/images/61+h3559FyL._SL1500_.JPG" />
                    </Fade>
                    <Fade top>
                   <Buttons>
                   <Link to="/ssprinters/callus">
                            <Leftbtn>
                                    <p>call us</p>
                                </Leftbtn>
                                </Link>
                                <a href="mailto:ssprintertraders@gmail.com" target="_blank">  
                                <Rightbtn>
                                       <p> mail us </p>
                                    </Rightbtn>
                                    </a>
                                

                       </Buttons>
                       </Fade>
                </Printer>
                
      
                        
           

    )
}


export default Printers


const Printer= styled.div`
            
        img{
                margin-top:3%;
                width:40%;
                @media (max-width: 768px){

                        margin-top: 20%;
                     }
        }
`


const Buttons=styled.div`

width:100%  
border-style : solid;
border-color: black;
border-radius: 10px;
color: cyan;
justify-content : center;
display: flex;
margin-top:2%;
margin-bottom:2%;
@media (max-width: 768px){

        display: flex;
        flex-direction: column;
     }

`

const Leftbtn=styled.div`
 
     
padding-top: 10px;
background-color: black;
height: 40px;
width: 256px;
color: cyan;
display: flex;
opacity: 0.8;
text-align: center;
justify-content: center;
border-radius: 100px;
text-transform: uppercase;
font-size: 15px;
cursor: pointer;
margin:8px;
transition: width 2s;

p:hover{

        tarnsition: transform 0.2s ease-in;
        opacity: 1;
        color: red;
        font-size: large;
        width:50%;
        width: 600px;
        font-weight: 600;
        
    
}

Leftbutton:hover{

            

}


    p{
            width:90%;
    }


    
`

const Rightbtn=styled(Leftbtn)`





`

