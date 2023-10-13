import React from 'react';
import "./Styles/Sponsors.css";
import {AiOutlineAmazon, AiOutlineGoogle} from "react-icons/ai";
import {BsLinkedin, BsAlexa, BsWordpress} from "react-icons/bs";

export const Sponsors = () => {
  return (
    <div className='sponsors-container'>
        <h2 className="sponsors-heading">
            Our <span style={{color:"#01caff"}}>Sponsors</span> 
        </h2>
        <div className="sponsors-flex">
            <AiOutlineAmazon className='icons' />
            <BsLinkedin className='icons' />
            <BsAlexa className='icons' />
            <AiOutlineGoogle className='icons' />
            <BsWordpress className='icons' />
        </div>
    </div>
  )
}
