import React from 'react'
import logo from '../../assets/logo.png'
import './headerStyles.css'


const Header = ()=>{
    return (
        <>
            <div className={"LogoContainer"}>
                    <img src={logo} alt="logotipo"/>
            </div>
                
            <h3>Choose Your Fighter</h3>
        </>
    )
}

export default Header