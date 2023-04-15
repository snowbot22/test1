import React from 'react';
import Layout from '../../components/Layout';
import ServicesBar from '../../components/ServicesBar';
import Stock5 from "../../assets/images/services/stock--5.webp";
import ServicesTemplate from '../../components/ServicesTemplate';


function conciertos() {

  //VARIABLES
  const list=[
    {
        name: "Eventos Sociales",
        link: "/servicios/eventosSociales"
    },
    {
        name: "Eventos Corporativos",
        link: "/servicios/eventosCorporativos"
    },
    {
        name: "Conciertos",
        link: "/servicios/conciertos"
    },
    {
        name: "Quintas Recomendadas",
        link: "/servicios/quintas"  
    }
  ]

  return (
    <Layout>
        <ServicesBar Services={list}/>
        <ServicesTemplate image={Stock5} title="Conciertos" />
    </Layout>
  )
}

export default conciertos