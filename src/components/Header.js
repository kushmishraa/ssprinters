import React, { useState }from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Order from '../Order';
import Home from './Home';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';




function Header() {

        const [Burgerstate, setBurgerstate]= useState(false)

    return (
        <Container>

            <Link to="/ssprinters/home">


                <img src="/ssprinters/images/049fdfabb84140fca7988f03bda4bf94.PNG" alt="not found" />

                </Link>

                <Menu>
                                <Link to="/ssprinters/home">Home</Link>
                                <Link to="/ssprinters/ink">Ink</Link>
                                <Link to="/ssprinters/printers">Printers</Link>
                                <Link to="/ssprinters/webdev">Web dev</Link>
                                
                        
                    </Menu>
                    <Rightmenu>
                            <Custommenu onClick={()=>setBurgerstate(true)} />
                        </Rightmenu>
                        
                        
                        <Burgernav show={Burgerstate}>
                        
                                <Closewrapper>
                                <Close onClick={()=>setBurgerstate(false)} />
                                </Closewrapper>
                        
                        
                                <li><Link to="/ssprinters/status">status</Link></li>
                                <li><Link to="/ssprinters/callus">contact us</Link></li>

                              
                        </Burgernav>
                                                  
            </Container>
           
    )
}

export default Header

const Container=styled.div`

min-height: 0px;
position: fixed;
display: flex;
align-items: center;
padding: 0 20px;
top: 0;
right: 0;
left: 0;

img{
        width: 60%;
        margin-left:0;


}

z-index:1;


`

const Menu=styled.div`

    margin-top:0%;
    margin-right:10%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    
 

        a:hover{
                cursor: pointer;
                color:red;
                opacity: 1;
        }

        p:hover{

                opacity:0.7;

        }


    a{
        
       
        color: black;
        margin-top:0%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;   
            font-size: large;
            font-weight: 600;
            text-transform: uppercase;
            padding:0 15px;
            flex-wrap: no-wrap;
            margin-bottom:2%;
            text-align: center;
            items-align: center;
            color: black;
    }
    

`

const Rightmenu= styled.div`

            display:flex;
            align-items: center;
        a{
                color: black;
                font-size: large;
                padding 0 10px;
                text-align: center;
                margin-right:2%;
                margin-bottom: 33%;
        }

        a:hover{

                color: red;

        }
                


`

const Custommenu= styled(MenuIcon)`


display: flex;
align-items: center;
margin-top: 0%;
margin-bottom: 150%;
margin-left:0;
cursor: pointer;


`


const Burgernav= styled.div`

            
            position: fixed;
            top: 0;
            bottom: 0;
            right:0;
            background: white;
            width: 300px;
            z-index: 16;
            list-style: none;
            padding : 20px;
            text-align: start;
            transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)' };
            transition: transform 0.2s ease-in;

            li{

                    padding: 20px 0;
                    border-bottom : 1px solid grey;

            }

            li a{

                    color: black;
                    font-weight:600;


            }


            CloseIcon{

                margin-left:20%;
            }

`

const Close=styled(CloseIcon)`

            cursor: pointer;

`

const Closewrapper=styled.div`

            display: flex;
            justify-content: flex-end;
            
`
