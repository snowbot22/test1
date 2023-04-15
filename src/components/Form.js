import React, {useState} from 'react';
import * as FormStyle from '../assets/css/form.module.css';
import { useForm } from '../hooks/useForm';

const initialForm = {
    name:"",
    email:"",
    phone:"",
    event:"",
    date:"",
    guests:"",
    location:""
};

const validationsForm= (form)=>{
    //VARIABLES
    let errors={};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPhone = /^0[0-9]{9}$/;

    //VALIDATIONS
    if(!form.name.trim()){
        errors.name="El nombre es obligatorio";
    }else if(!regexName.test(form.name.trim())){
        errors.name="El nombre solo puede contener letras";
    }

    if(!form.email.trim()){
        errors.email="El email es obligatorio";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email="El email no es valido";
    }

    if(!form.phone.trim()){
        errors.phone="El telefono es obligatorio";
    }else if(!regexPhone.test(form.phone.trim())){
        errors.phone="El telefono no es valido";
    }

    if(!form.date.trim()){
        errors.date="La fecha es obligatoria";
    }

    if(!form.guests.trim()){
        errors.guests="El numero de invitados es obligatorio";
    }

    //RETURN    
    return errors;
};

function Form() {

  //USEFORM
  const {  
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit} = useForm(initialForm,validationsForm);  

  return (
    <article className={FormStyle.form__email}>
            <h2 className={`title--3`}>
              Formulario de cotización
            </h2>
            <p className={FormStyle.form__email__info}>
                Te presentamos nuestro formulario de cotización, para que puedas solicitar un presupuesto de nuestros servicios.
                Una vez hayas llenado el formulario y clickeado en el botón de enviar, recibirás un mensaje con la información para tu evento.
            </p>
            <form onSubmit={handleSubmit} className={FormStyle.form__email__form} autoComplete='off'>
                <div className={FormStyle.form__group}>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name" placeholder='Escribe tu nombre aqui' value={form.name} onBlur={handleBlur} onChange={handleChange} required/>
                    {errors.name && <p className={FormStyle.form__error}>{errors.name}</p>}
                </div>
                <div className={FormStyle.form__group}>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" name="email" id="email" placeholder='Escribe tu email aqui' value={form.email} onBlur={handleBlur} onChange={handleChange}/>
                    {errors.email && <p className={FormStyle.form__error}>{errors.email}</p>}
                </div>
                <div className={FormStyle.form__group}>
                    <label htmlFor="phone">Teléfono</label>
                    <input type="tel" name="phone" id="phone" placeholder='Escribe tu número de telefono aqui' value={form.phone} onBlur={handleBlur} onChange={handleChange} required/>
                    {errors.phone && <p className={FormStyle.form__error}>{errors.phone}</p>}
                </div>
                <div className={FormStyle.form__group}>
                    <label htmlFor="event">Tipo de Evento</label>
                    <select name="event" id="event" value={form.event} onBlur={handleBlur} onChange={handleChange}>
                        <option value="boda">Boda</option>
                        <option value="bautizo">Bautizo</option>
                        <option value="cumpleaños">Cumpleaños</option>
                        <option value="aniversario">Aniversario</option>
                        <option value="corporativo">Corporativo</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
                <div className={FormStyle.form__group}>
                    <label htmlFor="date">Fecha del Evento</label>
                    <input type="date" name="date" id="date" placeholder='Elije la fecha de tu evento aqui' value={form.date} onBlur={handleBlur} onChange={handleChange}/>
                    {errors.date && <p className={FormStyle.form__error}>{errors.date}</p>}
                </div>
                <div className={FormStyle.form__group}>
                    <label htmlFor="guests">Número de Invitados</label>
                    <input type="number" name="guests" id="guests" placeholder='Escribe el número de invitados aqui' value={form.guests} onBlur={handleBlur} onChange={handleChange}/>
                    {errors.guests && <p className={FormStyle.form__error}>{errors.guests}</p>}
                </div>
                <div className={FormStyle.form__group}>
                    <label htmlFor="">Locación del Evento</label>
                    <select name="location" id="location" value={form.location} onBlur={handleBlur} onChange={handleChange}>
                        <option value="merakiC">Meraki Cumbaya</option>
                        <option value="merakiO">Meraki Ontaneda</option>
                        <option value="quinta">Quinta Recomendada</option>
                        <option value="propio">Lugar Propio</option>
                    </select>
                </div>
                <button className={`${FormStyle.form__submit} button__black2 link--button font--20rem`} type='text' >
                    Enviar
                </button>
            </form>
            <article>
                {response && <p className={FormStyle.form__response}>Los datos han sido enviados</p>}
            </article>
    </article>
  )
}


export default Form