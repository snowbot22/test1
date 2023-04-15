import React,{ useState,useRef } from 'react';
import CateringLogo from "../assets/images/catering-logo.webp";
import { Link } from 'gatsby';
import { FaFacebookF } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { AiOutlineArrowDown } from "react-icons/ai";
import "../assets/css/global.css";
import * as HeaderStyle from "../assets/css/header.module.css";

const Header = () => {

  //VARIABLES
  let nav= useRef(null);  

  //USE STATE TO HANDLE RESPONSIVE MENU
  const [menu, setMenu] = useState();
  const [submenu1, setSubmenu1] = useState();
  const [submenu2, setSubmenu2] = useState();

  //FUNCTION
  function handleMenu(){
    setMenu(!menu);
    if(submenu1){
        setSubmenu1(!submenu1);
        nav.current.classList.toggle(HeaderStyle.bottom__38);
    }
    else if(submenu2){
        setSubmenu2(!submenu2);
        nav.current.classList.toggle(HeaderStyle.bottom__38);
    }
  }
  function handleSubmenu1(){
    setSubmenu1(!submenu1);
    nav.current.classList.toggle(HeaderStyle.bottom__38);
    if(submenu2){
        setSubmenu2(!submenu2);
        nav.current.classList.toggle(HeaderStyle.bottom__38);
    }
  }
  function handleSubmenu2(){
    setSubmenu2(!submenu2);
    nav.current.classList.toggle(HeaderStyle.bottom__38);
    if(submenu1){
        setSubmenu1(!submenu1);
        nav.current.classList.toggle(HeaderStyle.bottom__38);
    }
  }

  return (
    <header >
        <button className={HeaderStyle.header__menu} onClick={ handleMenu }>
            <FaBars />
        </button>
        <nav ref={nav} className={menu ? HeaderStyle.header__nav : `${HeaderStyle.header__nav} ${HeaderStyle.header__hidden}`}>
            <ul className={`${HeaderStyle.header__nav__ul} ul--reset`}>
                <li className={HeaderStyle.header__nav__ul__li}>
                    <Link className={HeaderStyle.header__link} activeClassName={HeaderStyle.header__link__active} to='/'> Inicio </Link>
                </li>
                <li className={HeaderStyle.header__li__icon}>
                    <div className={HeaderStyle.header__li__icon__container}>
                        <Link className={HeaderStyle.header__link} activeClassName={HeaderStyle.header__link__active} to='/servicios'> Servicios  </Link>
                        <AiOutlineArrowDown onClick={handleSubmenu1} className={HeaderStyle.header__link__button}/>
                    </div>
                    <ul className={submenu1 ? HeaderStyle.header__submenu : `${HeaderStyle.header__submenu} hidden`}>
                        <li>
                            <Link className='link--reset--white' to='/servicios/eventosSociales'>Eventos Sociales</Link>
                        </li>
                        <li>
                            <Link className='link--reset--white' to='/servicios/eventosCorporativos'>Eventos Corporativos</Link>
                        </li>
                        <li>
                            <Link className='link--reset--white' to='/servicios/concieros'>Conciertos</Link>
                        </li>
                        <li>
                            <Link className='link--reset--white' to='/servicios/quintas'>Quintas Recomendadas</Link>
                        </li>
                    </ul>
                </li>
                <li className={HeaderStyle.header__li__icon}>
                    <div className={HeaderStyle.header__li__icon__container}>
                        <Link className={HeaderStyle.header__link} activeClassName={HeaderStyle.header__link__active}  to='/meraki'> Meraki Brunch & Events </Link>
                        <AiOutlineArrowDown  onClick={handleSubmenu2} className={HeaderStyle.header__link__button}/>
                    </div>
                    <ul className={submenu2 ? HeaderStyle.header__submenu : `${HeaderStyle.header__submenu} hidden`}>
                        <li>
                            <Link to='/meraki/merakiSocial' className='link--reset--white'>Meraki Social</Link>
                        </li>
                        <li>
                            <Link to='/meraki/merakiCorporativo' className='link--reset--white'>Meraki Corporativo</Link>
                        </li>
                        <li>
                            <Link to='/meraki/brunch' className='link--reset--white'>Meraki Brunch</Link>
                        </li>
                        <li>
                            <Link to='/meraki/locaciones' className='link--reset--white'>Locaciones</Link>
                        </li>
                    </ul>
                </li>
                <li className={HeaderStyle.header__nav__ul__li}>
                    <Link className={HeaderStyle.header__link} activeClassName={HeaderStyle.header__link__active}  to='/contacto'> Contacto </Link>
                </li>
            </ul>
        </nav>
        <figure className={HeaderStyle.header__figure}>
            <Link to='/'>
                <img className='img--large img--contain' src={CateringLogo} alt="Catering Logo" />
            </Link>
        </figure>
        <section className={HeaderStyle.header__section}>
            <ul className={`${HeaderStyle.header__section__ul} ul--reset`}>
                <li>
                    <a href='https://www.facebook.com/TheCateringCoQuito' className={HeaderStyle.header__social}>
                        <FaFacebookF  />
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/thecatering.co/' className={HeaderStyle.header__social}>
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href='https://api.whatsapp.com/send?phone=593982555079' className={HeaderStyle.header__social}>
                        <FaWhatsapp />
                    </a>
                </li>
            </ul>
        </section>
    </header>
  )
}

export default Header