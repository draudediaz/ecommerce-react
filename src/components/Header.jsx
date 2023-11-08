import React from 'react'
import imglogo from "../images/logo.png"
import "./Header.scss"


export const Header = () => {
  return (
    <>
    <div className="topbar">
            <div className="hightlight"><p><strong>MEJORES OFERTAS:</strong> Compra un iPhone 15 PRO por menos de 1300€</p></div>
            <div className="date"><p>19 DE OCTUBRE DE 2023</p></div>
    </div>
    <div className="logoCase">
            <div className="logo">
            <a href="/"><img className="logoImage" src={imglogo} alt="logo"/></a>
            </div>
    </div>
    </>
  )
}
