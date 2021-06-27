import React from 'react'

import headerImage from "../assets/img/header.jpg";

const Header = () => {
    return (
        <header>
            <img src = {headerImage} alt = "" className = "headTitle"/>
        </header>
    )
}

export default Header
