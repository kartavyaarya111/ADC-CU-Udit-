import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './Styles/Gallery.css'; 

const Gallery = () => {
    const carouselStyle = {
        maxWidth: '100%', 
        margin: '0 auto', 
        position: 'relative', 
    };

    const imageStyle = {
        maxHeight: '600px',
        width: '100%', 
        margin: '0 auto', 
    };

    return (
        <div className="gallery-container">
            
            <div className="gallery-heading-section">
                <h3 className="gallery-heading">Gallery</h3>
                <h2 className="subheading">Some Memorable Moments</h2>
            </div>

            <Carousel style={carouselStyle} showThumbs={true}>
                <div>
                    <img src="https://assets.website-files.com/5b3dd54182ecae4d1602962f/609e33e18c5000af6211f094_HR%20Hackathon%20-%20Section%202.jpg" alt="Legend 1" style={imageStyle} />
                    <p className="legend" style={{fontSize:"1.2rem"}}>Hackathon</p>
                </div>
                <div>
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-8ff216036108ac929b30246ecc6ce1a3-lq" alt="Legend 2" style={imageStyle} />
                    <p className="legend" style={{fontSize:"1.2rem"}}>Meetups</p>
                </div>
                <div>
                    <img src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/03/h_51669020-e1520416050635.jpg" alt="Legend 3" style={imageStyle} />
                    <p className="legend" style={{fontSize:"1.2rem"}}>Contest</p>
                </div>
                <div>
                    <img src="https://convene.com/wp-content/uploads/2019/07/Convene-Hackathons-1-scaled.jpg" alt="Legend 4" style={imageStyle} />
                    <p className="legend" style={{fontSize:"1.2rem"}}>Competiton</p>
                </div>
                <div>
                    <img src="https://media.licdn.com/dms/image/C4E12AQGGJctYpOAIGA/article-cover_image-shrink_720_1280/0/1542959083214?e=2147483647&v=beta&t=ti9Fl3URY0CJ8pKgyyXHUNSY2ak7Fxr189Ousm0m6xs" alt="Legend 5" style={imageStyle} />
                    <p className="legend" style={{fontSize:"1.2rem"}} >Random Event</p>
                </div>
            </Carousel>
        </div>
    );
}

export default Gallery;
