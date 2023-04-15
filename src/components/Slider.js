import React, {useState} from 'react';
import * as SliderStyle from "../assets/css/slider.module.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Slider1 from "../assets/images/slider--1.webp";
import Slider2 from "../assets/images/slider--2.webp";
import Slider3 from "../assets/images/slider--3.webp";

const Slider = ( ) => {
  
  //STATES
  const [imageNow, setImageNow] = useState(0);

  //VARIABLES
  const imagesArr=[
    {
      label: "h1",
      title: "Catering Company",
      text: "Somos mas que un catering, somos planificadores de eventos y aliados en servicio gastronómico",
      image: Slider1,
      textClass: SliderStyle.slide__text1,
      buttonText: "Cotiza con nosotros"
    },
    {
      label: "h2",
      title: "Obten beneficios exclusivos",
      text: "Al contratar nuestros servicios de catering de eventos",
      image: Slider2,
      textClass: SliderStyle.slide__text2,
      buttonText: "Ver beneficios"
    },
    {
      label: "h2",
      title: "Locaciones Exclusivas",
      text: "Contamos con locaciones exclusivas para la realización de eventos",
      image: Slider3,
      textClass: SliderStyle.slide__text3,
      buttonText: "Ver locaciones"
    }
  ];
  const totalImg = imagesArr.length;

  //BUTTONS FUNCTIONS
  const nextImage = ()=>{
    setImageNow( imageNow === totalImg -1 ? 0 : imageNow + 1 );
  };
const prevImage = ()=>{
    setImageNow( imageNow === 0 ? totalImg -1 : imageNow - 1 );
}
  
  return (
    <article className={SliderStyle.container}>
        <button className={`${SliderStyle.slide__button} ${SliderStyle.buttonPrev}`} onClick={prevImage}>
            <FaChevronCircleLeft />
        </button>
        {imagesArr.map((image, index) => {
            return <div key={"container" + index} className={imageNow === index ? `${SliderStyle.slide} ${SliderStyle.active}` : SliderStyle.slide }>
                        { imageNow === index && <React.Fragment key={"fragment" + index}> <div key={"text" + index} className={image.textClass}> <image.label key={"label" + index} className={SliderStyle.title}>{image.title}</image.label> <p key={"p" + index} className={SliderStyle.text}>{image.text}</p> <button key={"btn" + index} className={ SliderStyle.button__text  }>{image.buttonText}</button> </div> <figure key={"fig" + index} className={SliderStyle.slide__figure}> <img key={"img" + index} src={image.image} alt="slider" className={SliderStyle.slide__image} /> </figure> </React.Fragment>}
                   </div> 
        })}
        <button className={`${SliderStyle.slide__button} ${SliderStyle.buttonNext}`} onClick={nextImage}>
            <FaChevronCircleRight />
        </button>
    </article>
  )
}

export default Slider