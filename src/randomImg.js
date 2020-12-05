import React, { useState, useEffect} from 'react';
import {withRouter, Link} from 'react-router-dom';


function RandomImg(){
  const [image, setImage] = useState("https://apod.nasa.gov/apod/image/1209/airglow120824_ladanyi_600h.jpg");
  const [hdImage, setHdImage] = useState("https://apod.nasa.gov/apod/image/1209/airglow120824_ladanyi_600h.jpg");
  const [date, nextDate] = useState('2012-9-6');
  const [title, setTitle]  = useState("NASA Image Generator");
  const [explanation, setExplanation] = useState("Click new image");
  const [display, setDisplay] = useState(false);
  const [hd, setHD] = useState(false);
  function changeImage(){
    function getRandomInt( min, max ){
      return Math.floor(Math.random() * ( max - min + 1 ) + min);
    }
    let year  = getRandomInt(2012,2019);
    let month = getRandomInt(1,12);
    let day   = getRandomInt(5,28);
    let  newDate = year + '-' + month + '-' + day;
    nextDate(newDate);
    
  }

  function displayInfo(){
    setDisplay(!display);
  }

  function handleChange(){
    setHD(!hd);
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&hd=True&api_key=VFhPnUcWVCwhPloguYc3zsrYpH9dVJhgPdcEuz1A`)
        .then(result => result.json())
        .then(data => {
            if(data.media_type !== "video"){
              setImage(data.url)
              setTitle(data.title)
              setExplanation(data.explanation)
              setHdImage(data.hdurl)
              console.log(data.url)
            }
        });
    }
    fetchData();
    }, [date]);

  let style;
  (hd===false) ? style={backgroundImage: `url(${image})`}:style={backgroundImage: `url(${hdImage})` };
 
  return (
    <div className="random-img" style={style}>
      <div className="custom-control custom-switch hd-switch">
        {/* <Link to={{ pathname: "/search", state: 'supernova'}}>
          <button type="button" className="home-btn btn btn-dark btn-sm ">Search Image</button> 
        </Link> */}
        <Link to="/search?query=supernova" >
          <button type="button" className="home-btn btn btn-dark btn-sm ">Search Image</button> 
        </Link>
        
        <input onClick={() => handleChange()} type="checkbox" class="custom-control-input" id="customSwitch1" />
        <label class="custom-control-label" for="customSwitch1">Toggle HD</label>
      </div>
      <div className="content" >
          <div className="buttons home-buttons">
            <button onClick={() => displayInfo()} className="btn btn-info btn-sm home-btn" >About Image</button>
            <button onClick={() => changeImage()} className="btn btn-light btn-sm home-btn">New Image</button>
          </div>
          {
            display === true ? 
            (
            <div className="info">
              <h1 className = "image-title">{title}</h1> 
              <p className = "image-paragraph">{explanation}</p>
            </div>
            ) 
            : null
          }
      </div>
    </div>

  )
}


export default withRouter(RandomImg);



