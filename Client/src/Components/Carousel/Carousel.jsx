import React, {useState} from 'react';
import "./Styles/Carousel.css";
import EventItem from './EventItem';

export default function Carousel({Events}) {



  const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        } else if (direction === "right") {
            const nextIndex = (currentIndex + 1) % Events.length;
            setCurrentIndex((prevIndex) => (prevIndex < 5 ? prevIndex + 1 : 0));
        }
    };



  return (

    <div className="carousel-container">
    <div className="navigation-btn">
      <button className="nav-button left-btn " onClick={() => handleClick("left")}>
        {" "}
        {" < "}
      </button>
    </div>
    {
    Events ? (
        Events.slice(currentIndex, currentIndex + 5).map((item, index) => (
        <EventItem
            key= {index}
            title = {item.title}
            metaData = {item.metaData}
            image = {item.image}
        />
        ))
    ) : (
        "Loading..."
    )
    }


    <div className="navigation-btn">
      <button
        className=" nav-button right-btn"
        onClick={() => handleClick("right")}
      >
        {" "}
        {" > "}
      </button>
    </div>
  </div>
  )
}
