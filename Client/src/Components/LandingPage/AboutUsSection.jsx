import React from 'react';
import "./Styles/Aboutus.css";
import {AiOutlineWifi} from "react-icons/ai";
import { EventSection } from './EventSection';

export const AboutUsSection = () => {
  return (
    <div className='about-us-container' id="aboutus">
        <div className="about-us-box" >
            <div className="about-us-body">
                <div className="flare-right"></div>
                <div className="about-us-left">
                    <h1 className="heading"> {`>>>`} <span style={{textDecoration:"underline"}}>About</span> <span style={{color: "#01caff"}}>Us</span></h1>
                    <p className='about-desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsa illo nihil ducimus officia provident voluptatem adipisci earum. Illo tenetur, animi sed consequuntur repellat quo sint est cumque vero ut nam, delectus nostrum totam velit! Repellat, voluptates explicabo aperiam tempora quasi sed dolores aliquid praesentium? Voluptatem nam animi velit rem.
                    </p>
                </div>
                <div className="flex-grow">
                </div>
                <div className="about-us-right">
                    <AiOutlineWifi className='rotate-icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}
