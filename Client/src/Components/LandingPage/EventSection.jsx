import React from 'react';
import "./Styles/Events.css";
import Carousel from '../Carousel/Carousel';
import { EventsData } from "../../Data/EventsData";



export const EventSection = () => {
  return (
    <div className='events-container' id = "events">
        <div className="event-heading">
        <h1 className="heading events-head">
            {`>>`} <span style={{color: "#01caff"}}>Upcoming</span> Events {`<<`}
        </h1>
        <div className="underline"></div>

        </div>
        <div className="flare"></div>
        <div className="event-content">
            <div className="event-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde eum asperiores excepturi laborum, vero sunt porro minima? Quaerat corporis voluptatibus officiis inventore deleniti illo atque maiores. Voluptatibus recusandae sed nemo dolorum eos nulla itaque in, repellat fuga ut quasi minus laborum quidem doloribus. Iusto, similique nostrum! Voluptatum ut consequatur sed!
            </div>

            <div className="events-carousel">
                <Carousel Events = {EventsData}/>
            </div>
        </div>
    </div>
  )
}
