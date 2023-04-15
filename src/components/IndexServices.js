import React from 'react'

function IndexServices() {
  return (
    <article className={ServiciosStyle.services__overview}>
    <section className={ServiciosStyle.services__container__left}>
        <figure className={ServiciosStyle.services__figure}>
            <img className='img--large' src={Eventos1} alt="Eventos--foto"/>
        </figure>
        <div className={ServiciosStyle.services__container__text}>
            <h3> Eventos </h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. </p>
            <button className='button__black2'> 
                <Link to='./eventos' className='font--20rem link--reset--white'>Ver más</Link> 
            </button>
        </div>
    </section>
    <section className={ServiciosStyle.services__container__right}>
         <figure className={`${ServiciosStyle.services__figure} ${ServiciosStyle.reverse__grid}`}>
            <img className='img--large' src={Catering1} alt="Catering--foto" />
        </figure>
        <div className={ServiciosStyle.services__container__text}>
            <h3> Catering </h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. </p>
            <button className='button__black2'> 
                <Link to='./catering' className='font--20rem link--reset--white'>Ver más</Link> 
            </button>
        </div>
    </section>
    <section className={ServiciosStyle.services__container__left}>
        <figure className={ServiciosStyle.services__figure}>
            <img className='img--large' src={Meraki6} alt="Meraki--foto"/>
        </figure>
        <div className={ServiciosStyle.services__container__text}>
            <h3> Meraki Brunch&Events </h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. </p>
            <button className='button__black2'>
                <Link to='./meraki' className='font--20rem link--reset--white'>Ver más</Link> 
            </button>
        </div>
    </section>
    <section className={ServiciosStyle.services__container__right}>
        <figure className={`${ServiciosStyle.services__figure} ${ServiciosStyle.reverse__grid}`}>
            <img className='img--large' src={Concierto1} alt="Conciertos--foto"/>
        </figure>
        <div className={ServiciosStyle.services__container__text}>
            <h3> Conciertos </h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. </p>
            <button className='button__black2 link--button'> 
                <Link to='./conciertos' className='font--20rem link--reset--white'>Ver más</Link> 
            </button>
        </div>
    </section>
</article>
  )
}

export default IndexServices