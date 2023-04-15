import * as React from "react";
import * as IndexStyle from "../assets/css/index.module.css";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import SliderTimer from "../components/SliderTimer";
import ContactButtons from "../components/ContactButtons";
import Personal from "../assets/images/personal--2.jpg";
import Pro1 from "../assets/images/pro--1.jpg";
import Food from "../assets/images/food--1.jpg";
import "../assets/css/global.css";


export default function Home() {
  return <Layout>
      <main>
        <Slider />
        <section className={IndexStyle.main2}>
          <figure className={IndexStyle.main2__figure}>
            <img className="img--large" src={Pro1} alt="Proyecto" />
          </figure>
          <div className={IndexStyle.main2__text}>
            <h1>
               Somos Planificadores, diseñadores y catering de eventos sociales, corporativos y conciertos 
            </h1>
            <p>
              The Catering Co. es una empresa ecuatoriana con más de 11 años de experiencia en la organización de todo tipo de eventos sociales, corporativos y conciertos.
            </p>  
            <button className="button__black2">
              <Link className="link--reset--white link--button" to="/servicios/">Conócenos</Link>
            </button>
          </div>  
        </section>
        <section className={IndexStyle.moments}>
          <h2 className="title--1 lines">
            <span>¡Creemos Momentos Inolvidables!</span>
          </h2>
          <div className={IndexStyle.moments__text}>
            <p className="paragraph--1">
              En The Catering Co. estos 11 años nos hemos especializado en la organización de todo tipo eventos y somos un aliado estratégico para nuestros clientes en nuestras divisiones Catering y Hotel, 
              ofreciendo soluciones integrales para la realización de todo tipo de eventos.
            </p>
            <p className={IndexStyle.subtitle1}>
              Contáctanos y empezemos a crear juntos tu evento soñado.
            </p>
          </div>
          <ContactButtons />
        </section>
        <section className={IndexStyle.meraki}> 
          <div className={IndexStyle.meraki__slider}>
            <SliderTimer/>
          </div>
          <div className={IndexStyle.meraki__text}>
            <h2 className='title--2 lines--2'>
              <span>Meraki Brunch & Events</span>
            </h2>
            <p className={IndexStyle.text__white1}>
              Creamos Meraki Brunch & Events para elevar tus eventos sociales al siguiente nivel. Te ofrecemos una experiencia gastronómica única, con un servicio de calidad y locaciones exclusivas.
            </p>
            <button className="button__white1">
              Saber Más
            </button>
          </div>
        </section>
        <section className={IndexStyle.index__services}>
          <h2 className="title--1 lines">
            <span>
              Celebra tus ocaciones especiales
            </span>
          </h2>
          <div className={IndexStyle.services__container}>
            <figure className={IndexStyle.services__figure}>
              <img className="img--large img--cover" src={Food} alt="Servicios" />
            </figure>
            <div className={IndexStyle.services__text}>
              <p>
                Disfruta de los platos más deliciosos y de la mejor calidad en tus eventos.
              </p>
              <button className="button__black2">
                <Link className="link--reset--white" to="/servicios/">Ver Servicios</Link> 
              </button>
            </div>  
          </div>
        </section>
        <section className={IndexStyle.index__module1}>
            <div className={IndexStyle.index__module1__text}>
              <h2 className="title--3">
                <span>
                  Nuestro Personal
                </span>
              </h2>
              <p>
                Nuestro personal de Catering está altamente capacitado para brindar un servicio de calidad y profesionalismo.
              </p>
            </div>
            <figure>
              <img className="img--large img--cover" src={Personal} alt="Personal de Catering" />
            </figure>
        </section>
        <section className={IndexStyle.index__module2}>
            <div className={IndexStyle.index__module2__text}>
              <h2 className="title--3--white">
                <span>
                  Nuestro Personal
                </span>
              </h2>
              <p>
                Nuestro personal de Catering está altamente capacitado para brindar un servicio de calidad y profesionalismo.
              </p>
            </div>
            <figure>
              <img className="img--large img--cover" src={Personal} alt="Personal de Catering" />
            </figure>
        </section>
      </main>
    </Layout>
}
