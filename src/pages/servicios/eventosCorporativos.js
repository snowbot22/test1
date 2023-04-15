import React from 'react';
import Layout from '../../components/Layout';
import ServicesBar from '../../components/ServicesBar';
import ServicesTemplate from '../../components/ServicesTemplate';
import Stock5 from "../../assets/images/services/stock--5.webp";

function eventosCorporativos() {

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
        <ServicesTemplate image={Stock5} title="Eventos Corporativos" />
    </Layout>
  )
}

export default eventosCorporativos