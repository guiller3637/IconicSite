import React, {useState} from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import './styles/Showroom.css';
import img1 from './assets/showroom/img1.jpg';
import img2 from './assets/showroom/img2.jpg';
import img3 from './assets/showroom/img3.jpg';
import img4 from './assets/showroom/img4.jpg';
import img5 from './assets/showroom/img5.jpg';
import img6 from './assets/showroom/img6.jpg';
import img7 from './assets/showroom/img7.jpg';
import img8 from './assets/showroom/img8.jpg';
import img9 from './assets/showroom/img9.jpg';
import img10 from './assets/showroom/img10.jpg';
import img11 from './assets/showroom/img11.jpg';
import img12 from './assets/showroom/img12.jpg';
import img13 from './assets/showroom/img13.jpg';
import img14 from './assets/showroom/img14.jpg';
import img15 from './assets/showroom/img15.jpg';
import img16 from './assets/showroom/img16.jpg';
import img17 from './assets/showroom/img17.jpg';
import img18 from './assets/showroom/img18.jpg';
import img19 from './assets/showroom/img19.jpg';
import img20 from './assets/showroom/img20.jpg';
import video1 from './assets/showroom/video1.mp4';
import video2 from './assets/showroom/video2.mp4';
import video3 from './assets/showroom/video3.mp4';
import video4 from './assets/showroom/video4.mp4';
import video5 from './assets/showroom/video5.mp4';
import video6 from './assets/showroom/video6.mp4';
import videoCover1 from './assets/showroom/videoCover1.jpg';
import videoCover2 from './assets/showroom/videoCover2.jpg';
import videoCover3 from './assets/showroom/videoCover3.jpg';
import videoCover4 from './assets/showroom/videoCover4.jpg';
import videoCover5 from './assets/showroom/videoCover5.jpg';
import videoCover6 from './assets/showroom/videoCover6.jpg';




import { useEffect } from "react";

function Showroom(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const images = [
        {
          url: img1,
          title: "Polished Room",
          type:"image"
        },
        {
          url: img2,
          title: "Polished Garage",
          type:"image"
        },
        {
          url: img3,
          title: "Polished HallWay",
          type:"image"
        },
        {
          url: video1,
          title: "Processes of Polishing",
          type:"video",
          poster:videoCover1
        },
        {
          url: img4,
          title: "Small Polished Hallway",
          type:"image"
        },
        {
          url: img5,
          title: "Small Polished Hallway",
          type:"image"
        },
        {
          url: video2,
          title: "Polishing Process",
          type:"video",
          poster:videoCover2
        },
        {
          url: img6,
          title: "Polished Garage",
          type:"image"
        },
        {
          url: img7,
          title: "Cleaning and Prepping",
          type:"image"
        },
        {
          url: video3,
          title: "Kitchen Floor Being Polished",
          type:"video",
          poster:videoCover3
        },
        {
          url: img8,
          title: "Polished Living Room",
          type:"image"
        },
        {
          url: img9,
          title: "Prepared and Cleaned",
          type:"image"
        },
        {
          url: img10,
          title: "Polished Basement",
          type:"image"
        },
        {
          url: img11,
          title: "Preparing the Basement",
          type:"image"
        },
        {
          url: img12,
          title: "Polished Garage",
          type:"image"
        },
        {
          url: video4,
          title: "Protection Coating",
          type:"video",
          poster:videoCover4
        },
        {
          url: img13,
          title: "Basement Floor Polished",
          type:"image"
        },
        {
          url: img14,
          title: "Kitchen Floor Polished",
          type:"image"
        },
        {
          url: img15,
          title: "Polished Basement",
          type:"image"
        },
        {
          url: img16,
          title: "Polished Basement",
          type:"image"
        },
        {
          url: video5,
          title: "Cleaning And Preparing",
          type:"video",
          poster:videoCover5
        },
        {
          url: img17,
          title: "Polishing Process",
          type:"image"
        },
        {
          url: img18,
          title: "Glossy Polished Floor",
          type:"image"
        },
        {
          url: img19,
          title: "Glossy Polished Floor",
          type:"image"
        },
        {
          url: video6,
          title: "Cleaning And Preparing",
          type:"video",
          poster:videoCover6
        },
        {
          url: img20,
          title: "Room Floor Polished",
          type:"image"
        },
      ];
    
  // state to track the selected media for enlargement
const [selectedMedia, setSelectedMedia] = useState(null);

// function to handle click on an image or video
const handleMediaClick = (index) => {
  setSelectedMedia(index);
};

// render each image or video in a grid cell
const renderImages = () => {
  return images.map((media, index) => (
    <div key={index} className="grid-media" onClick={() => handleMediaClick(index)}>
      {media.type === 'image' ? (
        <img src={media.url} alt={media.title} />
      ) : (
        <video src={media.url} poster={media.poster} />
      )}
      <div className="title">{media.title}</div>
    </div>
  ));
};

return (
  <div>
    <div className="banner-title">
      <h1>Our Projects</h1>
      <p>
      <span className="textBlack"> <Link className="textWhite" to="/">Home </Link>/  Showroom</span>
      </p>
    </div>
    <div className="grid-container">{renderImages()}</div>
    {selectedMedia !== null && (
      <div className="overlayBack" onClick={() => setSelectedMedia(null)}>
        <div className="modal">
          {images[selectedMedia].type === 'image' ? (
            <img src={images[selectedMedia].url} alt={images[selectedMedia].title} />
          ) : (
            <video controls autoPlay loop muted><source src={images[selectedMedia].url} type="video/mp4" /></video>
          )}
          <div className="title">{images[selectedMedia].title}</div>
        </div>
      </div>
    )}
    <Footer/>
  </div>
);
    }
    
export default Showroom;