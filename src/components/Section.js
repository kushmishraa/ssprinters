import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
function Section({ title, leftBtntext ,rightBtntext,description, backimg } ) {
    return (

            <Wrap bgImg={backimg}>
             
                       
                <ItemText>
                <Fade top>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    </Fade>
                    </ItemText>
                   
                    <Buttons>
                        <Fade bottom>
                    <ButtonGroup>
                            <Link to="/callus">
                            <Leftbutton>
                                <p>{leftBtntext}</p>
                                </Leftbutton>
                                </Link>
                            <a href="mailto:ssprintertraders@gmail.com" target="_blank">  
                            <Rightbutton>
                                <p>{rightBtntext}</p>
                                </Rightbutton>
                               </a>
                                
                        </ButtonGroup>
                        </Fade> 
                        <Downarrow src="https://github.com/kushmishraa/ssprinters/blob/main/public/images/pngfind.com-arrow-png-transparent-936844.png" />
                        </Buttons>
            </Wrap>
    )
}

export default Section

const Wrap= styled.div`
        
        height:100vh;
        widhth:100vw;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;   
        background-image: url('/images/6149975b6dc49.jpg');
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-image: ${props => `url("/ssprinters/images/${props.bgImg}")` }
`
const ItemText= styled.div`

    
    margin-top:10%;
    background-color: black;
    padding:1%;
    padding-left:2%;
    padding-right:2%;
    border-radius:60px;
    opacity:0.8;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    @media (max-width: 768px){

       margin-top: 20%;
    }

`


const ButtonGroup= styled.div`

    
    display: flex;
    margin-bottom: 20px;
    @media (max-width: 768px){

        flex-direction: column;
    }

    


`

const Leftbutton= styled.div`

        
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

const Rightbutton= styled(Leftbutton)`

    opacity: 0.7;
    background-color : black;;
    color: cyan;
    p:hover{

        opacity: 1;
        color: red;
        font-size: large;
        width: 30%;
        
        animation-delay: 2s;
        

}
`

const Downarrow = styled.img`

    height: 2vh;
    margin-bottom: 10px;
    margin-top: 5px;
    animation: animateDown infinite 1.5s;

`

const Buttons =styled.div`


`