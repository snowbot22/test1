import React from 'react';
import "../assets/css/global.css";
import * as ServicesTemplatesStyles from "../assets/css/servicios/services-template.module.css";
import MainLogo from "../assets/images/catering-logo.webp"

function ServicesTemplate({ image,title }) {
  return (
    <article className={ServicesTemplatesStyles.container}>
        <figure className={ServicesTemplatesStyles.template__figure}>
            <img className='img--large' src={image} alt={image + "image"} />
        </figure>
        <section className={ServicesTemplatesStyles.template__text}>
            <figure>
                <img className='img--large' src={MainLogo} alt="CateringCo Logo" />
            </figure>
            <h2 className={ServicesTemplatesStyles.template__text__title}>
              {title}
            </h2>
        </section>
    </article>
  )
}

export default ServicesTemplate