import React,{ useState } from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import Bar from "../../components/ServicesBar";
import ContactButtons from '../../components/ContactButtons';
import ServicesTemplate from "../../components/ServicesTemplate";
import Stock5 from "../../assets/images/services/stock--5.webp";
import Meraki1 from "../../assets/images/meraki--3.jpg";
import Meraki2 from "../../assets/images/meraki--2.jpg";
import Meraki4 from "../../assets/images/meraki--5.jpg";
import Meraki5 from "../../assets/images/meraki--6.jpg";
import Meraki6 from "../../assets/images/meraki--7.jpg";
import Food from "../../assets/images/services/food--2.jpeg";
import * as MerakiSocialStyles from "../../assets/css/Servicios/merakiSocial.module.css";
import Meraki3 from "../../assets/images/meraki/meraki--1.jpg";
function Meraki() {

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

  //USE STATE
  const [photos, setPhotos] = useState({photos1:true ,photos2:false ,photos3:false,photos4:false});
    
  //FUNCTIONS
  const toggleClass = (photos) => {
    setPhotos(prevState => {
        const nuevosElementos = { ...prevState };
        Object.keys(nuevosElementos).forEach(key => {
        nuevosElementos[key] = key === photos;
    }   );
        return nuevosElementos;
      });
  };
    

  return (
    <Layout>
        <Bar Services={list}/>
        <ServicesTemplate 
          image={Meraki3}
          title={"Meraki Brunch & Events"}
        />
        <article className={MerakiSocialStyles.events}>
            <section className={MerakiSocialStyles.events__text}>
                <p>
                    En Meraki Brunch&Events podrás celebrar cualquier tipo de evento, desde una reunión de trabajo hasta una fiesta de cumpleaños, con un servicio de catering de primera calidad y un ambiente acogedor y elegante.
                </p>
                <div className={MerakiSocialStyles.events__text__list}>
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
                <div className={MerakiSocialStyles.events__text__buttons}>
                    <p>
                        Escribenos para que te guiemos y convirtamos tu evento en una experiencia inolvidable!
                    </p>
                    <ContactButtons />
                </div>
           </section>
        </article>
        <article className={MerakiSocialStyles.food}>
            <h3 className='title--1 lines'>
                <span>Menu de Primer Nivel</span>
            </h3>
            <section className={MerakiSocialStyles.food__card}>
                <div className={MerakiSocialStyles.food__description}>
                    <p>
                    Cada detalle es importante y más cuando hablamos de
                    gastronomía, en Meraki queremos que disfrutes de un
                    menú exclusivo diseñado por nuestra Chef Juana Pino,
                    graduada de la USFQ y especializada en Colombia y USA.
                    Más de 6 opciones especial y 4 opciones Premium:
                    </p>
                    <ul>
                        <li>
                            Menu 4 Tiempos a elección
                        </li>
                        <li>
                            Menu para niños
                        </li>
                        <li>
                            Descorche ilimitados
                        </li>
                        <li>
                            Mimosa de cortesia
                        </li>
                        <li>
                            Degustación a partir de 100 invitados
                        </li>
                    </ul>
                </div>
                <figure>
                    <img className='img--large' src={Food} alt="meraki--foto" />
                </figure> 
            </section>
        </article>
    </Layout>
  )
}

export default Meraki