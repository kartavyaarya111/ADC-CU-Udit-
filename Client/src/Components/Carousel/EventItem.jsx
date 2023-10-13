import React from 'react'
import "./Styles/EventsItem.css";
import {BsArrowsFullscreen} from "react-icons/bs";


export default function EventItem({title, metaData, image}) {

  function truncateText(text, maxLength) {
    if (text === null || text === undefined) {
      return ''; 
    }
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + '...';
    }
  }
      const maxLength = 30;


  return (
    <div className='item-container'>
        <div className="item-img">
            <img src={image} alt="" />
            <div className="play-button-overlay">
                <BsArrowsFullscreen/>
            </div>
        </div>

        <div className="details">
            <div className="title">
                {truncateText(title, maxLength)}
            </div>
            <div className="description">
                {metaData}
            </div>
        </div>
        
    </div>
  )
}