import React from 'react'
import "./Styles/Footer.css";
import {AiFillLinkedin, AiFillInstagram, AiFillYoutube, AiFillTwitterSquare} from "react-icons/ai";

export const Footer = () => {
  return (
    <div className='footer-container'>
        Follow Us: 
        <span className='footer-span'>
            <AiFillLinkedin />
        </span>
        <span className='footer-span'>
            <AiFillInstagram />
        </span>
        <span className='footer-span'>
            <AiFillYoutube />
        </span>
        <span className='footer-span'>
            <AiFillTwitterSquare />
        </span>
    </div>
  )
}
