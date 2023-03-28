import React, { useState } from 'react';
import styled from 'styled-components'
import Burguerbutton from './BurgerButton'
import { Link } from 'react-router-dom';

function Navbar () {
const [clicked, setClicked] = useState(false)
const handleClick = () => {
    setClicked(!clicked)
}


return (
    <>
            <NavContainer>
            <h2>React Shop</h2>
            <div className={`menu ${clicked ? 'active' : ''}`}>
                <Link to="/">Inicio</Link>
                <Link to="/quienessomos">Quienes somos</Link>
                <Link to="/quehacemos">Qué hacemos</Link>
                <Link to="/contacto">Contacto</Link>
            
                {/* <Link onClick={handleClick}to="/iniciarsecion"><PersonIcon/></Link> */}
            </div>
            <div className="burguer">
                <Burguerbutton clicked={clicked} handleClick={handleClick}/>
            </div>
            </NavContainer>
            <BgDiv className={`initial ${clicked ? 'active' : ''}`}/>
    </>
)
}

export default Navbar
const NavContainer = styled.nav`
    border-bottom: 1px solid black;
    margin-bottom:20px;
    padding: .4rem;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
h2{
    color:black;
    font-size: 40px;
}
a{
        text-decoration: none;
        color: black;
        margin-right:1rem;
    }
.menu{
    position:absolute;
    left:-1000px;
    margin-left:auto;
    margin-right:auto;
    text-align: center;
    transition: all .5s ease;
    display:flex;
    align-items: center;
    a{
        color: black;
        font-size:2rem;
        display:block;
    }
    @media(min-width: 768px){
        position:initial;
        margin:0;
        a{
            font-size: 1rem;
            color: black;
            display: inline;
        }
        a:hover{
            color: #008bdc;
        }
    }
}
.menu.active{
    width:100%;
    display: block;
    position:absolute;
    margin-left:10px;
    margin-right:auto;
    top: 40px;
    left:0;
    text-align:left;
    z-index:999;
    a{
        font-size: 1.5rem;
        color: black;
        margin-top: 20px;
        z-index:999;
    }
}
.burguer{
    @media(min-width: 768px){
        display:none;
    }
}

`

const BgDiv = styled.div`
    position:absolute;
    background-color: #008bdc;
    left:-1000px;
    z-index:0;
    transition: all .6s ease;
    &.active{
        z-index:99;
        top:0;
        left:0;
        width:50%;
        height:100%;
    }
    
`