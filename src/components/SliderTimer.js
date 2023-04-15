import React,{ useState,useEffect } from 'react';
import Meraki1 from '../assets/images/meraki--2.jpg';
import Meraki2 from '../assets/images/meraki--3.jpg';
import Meraki3 from '../assets/images/meraki--4.jpg';
import Meraki4 from '../assets/images/meraki--5.jpg';
import "../assets/css/global.css";
import * as SliderTimerStyle from "../assets/css/SliderTimer.module.css";


function SliderTimer() {

  //STATES
  const [imageNow, setImageNow] = useState(0);

  //VARIABLES
  const imagesArr=[
    Meraki1,
    Meraki4,
    Meraki2,
    Meraki3
  ];

  let totalImg = imagesArr.length;

  // //TIMER
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setImageNow( imageNow === totalImg -1 ? 0 : imageNow + 1 );
    }, 4000);

    return () => {
      clearTimeout(temporizador);
    };
    }, [imageNow]);

  return (
    <>
      {imagesArr.map((image, index) => {
        return <figure key={"fig" + index} className={imageNow === index ? `${SliderTimerStyle.figure} ${SliderTimerStyle.active}` : SliderTimerStyle.figure}>
                {imageNow === index && <img src={image} key={"img" + index} className={SliderTimerStyle.image} alt="slider-imgs" />}
               </figure>
      })}
    </>
  )
}

export default SliderTimer