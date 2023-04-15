import React from 'react';
import Layout from '../../components/Layout';
import ServicesBar from '../../components/ServicesBar';
import Stock5 from "../../assets/images/services/stock--5.webp";
import ServicesTemplate from '../../components/ServicesTemplate';
import Meraki3 from "../../assets/images/meraki/meraki--1.jpg";
import * as MerakiBrunchStyles from "../../assets/css/servicios/merakiBrunch.module.css";
import ContactButtons from '../../components/ContactButtons';

function brunch() {

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
        <ServicesBar Services={list} />
        <ServicesTemplate image={Meraki3} title="Meraki Brunch" />
        <article className={MerakiBrunchStyles.main_container}>
          <section className={MerakiBrunchStyles.main_container_text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptas, quod, quia, voluptates quae voluptatibus quibusdam
              voluptatum quos quas quidem nesciunt. Quisquam, quae. Quisquam
              voluptas, quod, quia, voluptates quae voluptatibus quibusdam
              voluptatum quos quas quidem nesciunt. Quisquam, quae. Quisquam
              voluptas, quod, quia, voluptates quae voluptatibus quibusdam
              voluptatum quos quas quidem nesciunt. Quisquam, quae. Quisquam
            </p>
            <ContactButtons />
          </section>
          <figure>
            <img src={Stock5} alt="Stock5" className="img--large img--cover" />
          </figure>
        </article>
    </Layout>
    
  )
}

export default brunch