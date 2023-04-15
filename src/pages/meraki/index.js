import { Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import Bar from '../../components/ServicesBar';
import ServicesTemplate from '../../components/ServicesTemplate';
import ContactButtons from '../../components/ContactButtons';
import "../../assets/css/global.css";
import * as ServiciosStyle from "../../assets/css/servicios/services-index.module.css";
import Concierto1 from "../../assets/images/services/concierto--1.jpg";
import Meraki6 from "../../assets/images/services/meraki--6.jpg";
import Catering1 from "../../assets/images/services/catering--1.jpg";
import Eventos1 from "../../assets/images/services/eventos--1.jpg";
import Meraki1 from "../../assets/images/meraki/meraki--1.jpg";
import Meraki3 from "../../assets/images/meraki/meraki--3.jpg";
import Meraki4 from "../../assets/images/meraki/meraki--4.jpg";
import Meraki5 from "../../assets/images/meraki/meraki--5.jpg";

function index() {
  
  //VARIABLES
  const list=[
    {
        name: "Meraki Eventos Sociales",
        link: "/meraki/merakiSocial"
    },
    {
        name: "Meraki Eventos Corporativos",
        link: "/meraki/merakiCorporativo"
    },
    {
        name: "Meraki Brunch",
        link: "/meraki/brunch"
    },
    {
        name: "Locaciones",
        link: "/meraki/locaciones"
    }
  ]
    
  return (
    <Layout>
        <Bar Services={list}/>
        <main className="main--1">
            <ServicesTemplate image={Meraki1} />
            <article className={ServiciosStyle.services__text}>
                <p className='paragraph--1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <ContactButtons />
            </article>
            <article className={ServiciosStyle.services__overview}>
                <h2 className='title--1 lines'>
                    <span> Nuestros Servicios </span>
                </h2>
                <section className={ServiciosStyle.services__overview__container}>
                    <div className={ServiciosStyle.services__container__left}>
                        <figure className={ServiciosStyle.services__figure}>
                            <img className='img--large img--cover' src={Meraki5} alt="Eventos--foto"/>
                        </figure>
                        <div className={ServiciosStyle.services__container__text}>
                            <h3 className='title--3'> Meraki Eventos Sociales </h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. </p>
                            <button className='button__black2'> 
                                <Link to='/servicios/eventosSociales' className='font--20rem link--reset--white link--button'>Ver más</Link> 
                            </button>
                        </div>
                    </div>
                    <div className={ServiciosStyle.services__container__right}>
                         <figure className={`${ServiciosStyle.services__figure} ${ServiciosStyle.reverse__grid}`}>
                            <img className='img--large img--cover' src={Meraki4} alt="Catering--foto" />
                        </figure>
                        <div className={ServiciosStyle.services__container__text}>
                            <h3 className='title--3--white'> Meraki Eventos Corporativos </h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. </p>
                            <button className='button__white1'> 
                                <Link to='/servicios/eventosCorporativos' className='font--20rem link--reset--black link--button'>Ver más</Link> 
                            </button>
                        </div>
                    </div>
                    <div className={ServiciosStyle.services__container__left}>
                        <figure className={ServiciosStyle.services__figure}>
                            <img className='img--large' src={Meraki6} alt="Meraki--foto"/>
                        </figure>
                        <div className={ServiciosStyle.services__container__text}>
                            <h3 className='title--3'> Meraki Brunch </h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. </p>
                            <button className='button__black2'>
                                <Link to='/servicios/conciertos' className='font--20rem link--reset--white link--button'>Ver más</Link> 
                            </button>
                        </div>
                    </div>
                    <div className={ServiciosStyle.services__container__right}>
                        <figure className={`${ServiciosStyle.services__figure} ${ServiciosStyle.reverse__grid}`}>
                            <img className='img--large' src={Concierto1} alt="Conciertos--foto"/>
                        </figure>
                        <div className={ServiciosStyle.services__container__text}>
                            <h3 className='title--3--white'> Locaciones </h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. </p>
                            <button className='button__white1 link--button'> 
                                <Link to='/servicios/quintas' className='font--20rem link--reset--black link--button'>Ver más</Link> 
                            </button>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    </Layout>
  )
}

export default index