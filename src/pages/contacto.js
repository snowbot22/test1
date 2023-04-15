import React from 'react';
import Layout from '../components/Layout';
import Form from '../components/Form';
import "../assets/css/global.css"
import * as ContactoStyle from '../assets/css/contacto.module.css';
import {BsWhatsapp} from "react-icons/bs";
import Stock6 from '../assets/images/services/stock--6.webp';

function Contacto() {
  return (
    <Layout>
        <article className={ContactoStyle.info}>
            <section className={ContactoStyle.info__text}>
                <h2 className={`title--3 `}>Contacto</h2>
                <p >
                  Aqui encontraras todos nuestros datos de contacto, estaremos encantados de atenderte. 
                </p>
                <div className={ContactoStyle.info__text__container}>
                  <div className={ContactoStyle.info__text__card}>
                    <h3>Teléfono:</h3>
                    <p> 123456789 </p>
                  </div>
                  <div className={ContactoStyle.info__text__card}>
                    <h3>Correo Electrónico:</h3>
                    <p>
                      <a className='link--reset--black' href="mailto:
                      ">
                        abc@sass.com
                      </a>
                    </p>
                  </div>
                  <div className={ContactoStyle.info__text__card}>
                    <h3>Whatsapp:</h3>
                    <p>
                      Si deseas contactarnos por whatsapp, puedes hacerlo a través de este enlace. Y te enviaremos un mensaje con la información para tu evento.
                    </p>
                    <button className="button__green3">
                      <a className="link--icon--white">
                        <BsWhatsapp/> Deseo información
                      </a>
                    </button>
                  </div>
                </div>
            </section>
            <figure>
                <img className="img--large" src={Stock6} alt="Contacto" />
            </figure>
        </article>
        <Form />
    </Layout>
  )
}

export default Contacto