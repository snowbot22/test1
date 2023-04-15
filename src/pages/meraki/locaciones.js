import React from 'react';
import Layout from '../../components/Layout';
import ServicesBar from '../../components/ServicesBar';
import Stock5 from "../../assets/images/services/stock--5.webp";
import ServicesTemplate from '../../components/ServicesTemplate';
import Meraki3 from "../../assets/images/meraki/meraki--1.jpg";
import * as LocacionesStyle from "../../assets/css/servicios/locaciones.module.css";
import ContactButtons from '../../components/ContactButtons';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Maps from "../../assets/images/google-maps-22.jpg";

function locaciones() {

  //VARIABLES
  const list=[
    {
        name: "Meraki Social",
        link: "/meraki/merakiSocial"
    },
    {
        name: "Meraki Corporativo",
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
        <ServicesBar Services={list}/>
        <ServicesTemplate image={Meraki3} title="Locaciones" />
        <article className={LocacionesStyle.events}>
            <section className={LocacionesStyle.events__text}>
                <p>
                    En Meraki Brunch&Events podrás celebrar cualquier tipo de evento, desde una reunión de trabajo hasta una fiesta de cumpleaños, con un servicio de catering de primera calidad y un ambiente acogedor y elegante.
                </p>
                <div className={LocacionesStyle.events__text__buttons}>
                    <p>
                        Escribenos para que te guiemos y convirtamos tu evento en una experiencia inolvidable!
                    </p>
                    <ContactButtons />
                </div>
           </section>
        </article>
        <article className={LocacionesStyle.cumbaya}>
            <h3 className='title--1 lines'>
                <span>
                    Meraki Cumbaya
                </span>
            </h3>
            <section className={LocacionesStyle.cumbaya__Text}>
                    <p>
                      En Meraki Cumbaya podrás celebrar cualquier tipo de evento, desde una reunión de trabajo hasta una fiesta de cumpleaños, con un servicio de catering de primera calidad y un ambiente acogedor y elegante.
                      Ademas de contar con un espacio amplio y cómodo, Meraki Cumbaya cuenta con un jardín privado, ideal para celebrar eventos al aire libre.
                      Ademas de contar con un espacio amplio y cómodo, Meraki Cumbaya cuenta con un jardín privado, ideal para celebrar eventos al aire libre.
                    </p>
                    <figure>
                        <img className='img--large' src={Maps} alt="Mapa de ubicación" />
                    </figure>
            </section>
            <section className={LocacionesStyle.cumbaya__slider}>
              <BsFillArrowLeftCircleFill />
              <figure>
              </figure>
              <BsFillArrowRightCircleFill />
            </section>
        </article>
    </Layout>
  )
}

export default locaciones