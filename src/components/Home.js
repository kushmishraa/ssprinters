import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function home() {
    return (
        <Container>
             
                <Section 
                
                    title="S.S PRINTERS AND TRADERS"
                    description=" we deliver what you want !"
                    backimg="printer-print-machine-scanner.jpg"
                    leftBtntext="Call us"
                    rightBtntext="Mail us"
                />
                    
                <Section 

                    title=" INK REFILLING AND SUPPLYING"
                    description=" any type of ink or cartadge we got you  !"
                    backimg="copier.jpg"
                    leftBtntext="Call us"
                    rightBtntext="Mail us"


                    />
                <Section 

                title=" INK REFILLING AND SUPPLYING"
                description=" any type of ink or cartadge we got you  !"
                backimg="ink-paint-water-drop.jpg"
                leftBtntext="Call us"
                rightBtntext="Mail us"
                
                
                />
                <Section
                
                title="LOOKING FOR A BEAUTIFULL WEBSITE ?"
                    description=" we got you covered and at the lowest cost too !"
                    backimg="144458-web-developer-wallpaper-1920x1080-wallpaper.jpg"
                    leftBtntext="Call us"
                    rightBtntext="Mail us"
    
                />

        </Container>
    )
}

export default home

const Container = styled.div`

        height:100vh;

`