import React, {useState} from 'react'
import styled from "styled-components"
import { AiFillHome } from "react-icons/ai"
import {GiFamilyHouse} from "react-icons/gi"
import {BsFillPeopleFill} from "react-icons/bs"
import {AiFillSetting} from "react-icons/ai"
import {BiLogIn} from "react-icons/bi"
import {FaBars, FaTimes} from "react-icons/fa"
export const HeaderComp = () => {
    
    const [toggle, setToggle] = useState(false);
    const HandleMenu = () => {
        setToggle(!toggle)
    }
    const closeMenu = () => {
        setToggle(false);
    }
    return (
        <Container>
            <Wrapper>
            <MobileMenu onClick={HandleMenu}>
                    {toggle ? <FaTimes /> : <FaBars />}
                    </MobileMenu>
                <Navigation toggle={toggle} onClick={closeMenu}>
                    <Nav  onClick={closeMenu}>
                        <Icon><AiFillHome/></Icon>
                        <span>Home</span>
                    </Nav>
                    <Nav  onClick={closeMenu}>
                        <Icon><GiFamilyHouse/></Icon>
                        <span>Rent</span>
                    </Nav>
                    <Nav  onClick={closeMenu}>
                        <Icon><BsFillPeopleFill/></Icon>
                        <span>People</span>
                    </Nav>
                    <Nav  onClick={closeMenu}>
                        <Icon><AiFillSetting/></Icon>
                        <span>Settings</span>
                    </Nav>   
                      
                </Navigation>
                <Space />
                      <Create>
                       <Button> <BiLogIn/>
                        Log In
                    </Button>
                    </Create>
            </Wrapper>
        </Container>
    )
}



const Container = styled.div`
width: 100%;
height: 100px;
display: flex;
background-color: blue;
`;
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: row;

`;
const Navigation = styled.div`
display: flex;
align-items: center;
flex: 1;
@media screen and (max-width: 768px){
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 100px;
    background: white;
    left: ${({toggle}) => (toggle ? "0":"-100%")};
    background-color: red;
    width: 100%;
    height: 90vh;
    transition: all 350ms;
}
`;
const Nav = styled.div`
display: flex;
text-decoration: none;
align-items: center;
padding: 10px 20px;
justify-content: center;
border-radius: 3px;
transition: all 450ms;
margin: 0px 10px;

`;
const Icon = styled.div`
margin-right: 10px;
`;
const Button = styled.div`
padding: 20px;
background-color: white;
color: brown;
border-radius: 3px;
font-weight: bold;
transition: scale(1);

:hover {
    transform: (0.93);
    cursor: pointer;
}
`;
const Space = styled.div`
/* margin-right: 20px; */
`;
const Create = styled.div`
margin-right: 80px;

@media screen and (max-width: 768px){
    display: none;
    align-items: center;
    flex-direction: column;
}
`;
const MobileMenu = styled.div`
display: none;
@media screen and (max-width: 768px){
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 20px;
    right: 20px;
    background: white;
    font-size: 30px;
}

`;
