import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpeg'
import './nav.css'
import { RxArrowTopRight } from 'react-icons/rx'
import { FiMail } from 'react-icons/fi'
import {  RiLinkedinLine } from 'react-icons/ri'
import { AiOutlineInstagram } from 'react-icons/ai'


const Nav = () => {
    return (
        <div id='nav' className="nav">
            <img alt="logo" className="nav_logo" src={logo} />
            <div className="nav_right-side">
                <div className="nav_links-section">
                    <a className="nav-link" href="mailto:newbiz@phoenixagency.ae"><FiMail className="nav-link_ico" /></a>
                    <a className="nav-link" href="#j"><AiOutlineInstagram className="nav-link_ico" /></a>
                    <a className="nav-link" href="#j"><RiLinkedinLine className="nav-link_ico" /></a>
                </div>
                <Link className="nav_button" to='/form'>
                    Get in touch <RxArrowTopRight /></Link>
            </div>
        </div>
    )
}

export default Nav