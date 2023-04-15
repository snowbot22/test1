import React from 'react';
import { Link } from 'gatsby';
import {AiFillPhone} from 'react-icons/ai';

import "normalize.css";
import "../assets/css/global.css";
import * as FooterStyle from "../assets/css/footer.module.css";

function Footer() {
  return (
    <footer>
        <section className={FooterStyle.footer__links}>
          <ul className={`${FooterStyle.footer__links__ul} ul--reset` } >
            <li>
              <Link className='link--reset--white hover--underline--white title--white--20rem' to="/">Inicio</Link>
            </li>
            <li>
              <Link className='link--reset--white hover--underline--white title--white--20rem' to="/nosotros">Formulario de Cotización</Link>
            </li>
            <li>
              <Link className='link--reset--white hover--underline--white title--white--20rem' to="/servicios">Servicios</Link>
              <ul className={FooterStyle.footer__links__submenu}>
                <li>
                  <Link className='link--reset--white hover--underline--white ' to="/services/catering">Eventos 1</Link>
                </li>
                <li>
                  <Link className='link--reset--white hover--underline--white' to="/services/catering">Eventos 2</Link>
                </li>
                <li>
                  <Link className='link--reset--white hover--underline--white' to="/services/catering">Eventos 3</Link>
                </li>
                <li>
                  <Link className='link--reset--white hover--underline--white' to="/services/catering">Eventos 4</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className='link--reset--white hover--underline--white title--white--20rem' to="/meraki">Meraki Brunch & Eventos</Link>
              <ul className={FooterStyle.footer__links__submenu}>
                <li>
                  <Link className='link--reset--white hover--underline--white' to="/meraki">Eventos 1</Link>
                </li>
                <li>
                  <Link className='link--reset--white hover--underline--white' to="/meraki">Eventos 2</Link>
                </li>
                <li>
                  <Link className='link--reset--white hover--underline--white' to="/meraki">Eventos 3</Link>
                </li>
                <li>
                  <Link className='link--reset--white hover--underline--white' to="/meraki">Eventos 4</Link>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className={FooterStyle.footer__contact}>
          <h2 className={FooterStyle.footer__title}>Contactanos</h2>
          <ul className={`${FooterStyle.footer__contact__ul} ul--reset`}>
            <li>
              <p className={`${FooterStyle.footer__contact__title} link--reset--white`}>
                Facebook:
              </p>
              <ul className="ul--reset">
                <li>
                  <a className='link--reset--white hover--underline--white' href="https://www.facebook.com/TheCateringCoQuito">
                    @TheCateringCoQuito
                  </a>
                </li>
                <li>
                  <a className='link--reset--white hover--underline--white' href="https://www.facebook.com/MerakiBrunchyEventos">
                    @MerakiBrunchyEventos
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <p className={`${FooterStyle.footer__contact__title} link--reset--white`}>
                Instagram:
              </p>
              <ul className="ul--reset">
                <li>
                  <a className='link--reset--white hover--underline--white' href="https://www.instagram.com/thecatering.co/">
                    @thecatering.co
                  </a>
                </li>
                <li>
                  <a className='link--reset--white hover--underline--white' href='https://www.instagram.com/meraki_brunch_restaurante/'>
                    @meraki_brunch_restaurante
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <p className={`${FooterStyle.footer__contact__title} link--reset--white`}>
                 Whatsapp:
              </p>
              <ul className="ul--reset">
                <li>
                  <a className='link--reset--white hover--underline--white' href="https://wa.me/573003000000">
                    +57 300 300 0000
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <p className={`${FooterStyle.footer__contact__title} link--reset--white`}>
                Numero de telefono:
              </p>
              <a className='link--reset--white hover--underline--white' href="tel:+573003000000"> 
                <AiFillPhone/> +57 300 300 0000
              </a>
            </li>
          </ul>
        </section>
        <address className={FooterStyle.footer__address}>
          &copy; The CateringCo {new Date().getFullYear()}
        </address>
    </footer>
  )
}

export default Footer