import React from 'react';
import Layout from '../../components/Layout';
import ServicesBar from '../../components/ServicesBar';
import Stock5 from "../../assets/images/services/stock--5.webp";
import ServicesTemplate from '../../components/ServicesTemplate';
import Meraki3 from "../../assets/images/meraki/meraki--1.jpg";
import * as merakiCorporativoStyles from "../../assets/css/Servicios/merakiCorporativo.module.css";
import ContactButtons from '../../components/ContactButtons';

function merakiCorporativo() {

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
        <ServicesTemplate image={Meraki3} title="Meraki Corporativo" />
        <article className={merakiCorporativoStyles.events}>
            <section className={merakiCorporativoStyles.events__text}>
                <p>
                    En Meraki Brunch&Events podrás celebrar cualquier tipo de evento, desde una reunión de trabajo hasta una fiesta de cumpleaños, con un servicio de catering de primera calidad y un ambiente acogedor y elegante.
                </p>
                <div className={merakiCorporativoStyles.events__text__list}>
                <p>
                    Tu reserva incluye:
                </p>   
                <ul>
                    <li>
                        Reserva de una de nuestras instalaciones exclusivas Cumbaya u Ontaneda.
                    </li>
                    <li>
                        Decoración y ambientación a tu elección.
                    </li>
                    <li>
                        Event Planners para la asesoración y organización de tu evento.
                    </li>
                    <li>
                        Servicio de catering de primera calidad.
                    </li>
                    <li>
                        Y mucho más!
                    </li>
                </ul>
                </div>
                <div className={merakiCorporativoStyles.events__text__buttons}>
                    <p>
                        Escribenos para que te guiemos y convirtamos tu evento en una experiencia inolvidable!
                    </p>
                    <ContactButtons />
                </div>
           </section>
        </article>
        <article className={merakiCorporativoStyles.prop2}>
            <figure className={merakiCorporativoStyles.prop2__figure}>
                <img className='img--large img--cover' src={Stock5} alt="Stock5" />
            </figure>
            <div className={merakiCorporativoStyles.prop2__text}>
                    <h3>Caracteristica</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam auctor, nisl eget ultricies tincidunt, nunc nisl
                    </p>    
                </div>
        </article>
    </Layout>
  )
}

export default merakiCorporativo