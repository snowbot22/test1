import React from 'react';
import { Link } from 'gatsby';
import * as ContactButtonsStyles from "../assets/css/contactbuttons.module.css";
import {BsWhatsapp} from "react-icons/bs";


function ContactButtons() {
  return (
    <div className={ContactButtonsStyles.services__buttons}>
            <button className="button__black2"> 
              <Link className="link--reset--white link--button" to="/contacto">Cotiza tu Evento</Link>
            </button>
            <span>
              O
            </span>
            <button className="button__green2">
              <a className="link--icon--white"> <BsWhatsapp/> Escribenos</a>
            </button>
    </div>
  )
}

export default ContactButtons