import React from "react";
import './App.css';
import trabajo1 from './Imagenes/imagen1.jpg';
import trabajo2 from './Imagenes/imagen2.jpg';
import trabajo3 from './Imagenes/imagen3.jpg';
import trabajo4 from './Imagenes/imagen4.jpg';
import trabajo5 from './Imagenes/imagen5.jpg';
import trabajo6 from './Imagenes/imagen6.jpg';
import servicio from './Imagenes/servicio.jpg';
import uñas from './Imagenes/uñas.jpg';
import Footer from "./footer";



function App() {
  const company = "YaniGonella Inc.";
  const year = "2024";
  return (
<div className="App">
<body>
<header>
<nav> <a href="#Servicios"> Servicios </a>
<a href="#Informacion-Importante"> Información Importante </a>
<a href="#Trabajos-Realizados"> Trabajos realizados </a> 
<a href="#Contacto"> Contacto </a> </nav>
<section className="textos-header">
  <h1> Encanto Manicuria </h1>
  <h2> Victoria Cerutti </h2> 
  </section>
<div
className="wave"
style={{
height: '150px',
overflow: 'hidden'
  }}>
<svg preserveAspectRatio="none"
style={{
      height: '100%',
      width: '100%'}}
    viewBox="0 0 500 150" > 
<path
      d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
      style={{
      fill: '#fff',
      stroke: 'none'}}/>
  </svg>
</div>
</header>
<main>

<section className="contenedor-servicios" id="Servicios">
  <h2 className="titulo"> SERVICIOS </h2>
  <div className="contenedor-servicios" />
  <img src= {servicio} className="imagen-servicio" alt="imagen servicio" />
  <img src={uñas} className="imagen-servicio" alt="imagen uña" />
  {' '} <br /> ,{' '} <br />
  <div className="contenido-texto">
    <h3>
      <span> 1 </span>
      {' '}Esmaltado Semipermanente
    </h3>
    <p>
      Técnica que consiste en la aplicación de un esmalte específico que se endurece mediante una lámpara UV o LED, lo cual le da una mayor durabilidad. Ofrece una mayor resistencia a los golpes y al desgaste diario, así como un brillo intenso y duradero. Aplica a manos y pies
    </p>
    {' '} <br />
    <h3>
      <span> 2 </span>
      {' '}Esculpidas en polygel
    </h3>
    <p>
      Es un método para crear uñas artificiales duraderas y naturales. El polygel es un producto híbrido entre el gel y el acrílico que se utiliza para construir las uñas.
    </p>
    {' '} <br />
    <h3>
      <span> 3 </span>
      {' '}Kapping
    </h3>
    <p>
      Es una capa fina adicional de esmalte transparente que actua como barrera protectora. Aplica a manos y pies
    </p>
    {' '} <br />
    <h3>
      <span> 4 </span>
      {' '}Esmaltado Tradicional
    </h3>
    <p>
      Aplicación de esmalte para embellecer y decorar uñas. Aplica a manos y pies
    </p>
    {' '} <br />
  </div>
</section>

<section
  className="Informacion" id="Informacion-Importante">
  <h2 className="titulo"> INFORMACIÓN IMPORTANTE </h2>
  <div className="tips">
    <ul>
      <span> 1 </span>
      {' '}Utilizar guantes para realizar determinados labores del hogar.
    </ul>
    {' '}
    <br />
    <ul>
      <span> 2 </span>
      {' '}NUNCA levantes, estires o retires el esmalte, al hacerlo, puede que te lleves capas de la lámina de tu uña. El retirado debe ser realizado por un profesional
    </ul>
    {' '}
    <br />
    <ul>
      <span> 3 </span>
      {' '}No exponer las manos en agua muyu caliente por tiempo prolongado
    </ul>
    {' '}
    <br />
    <ul>
      <span> 4 </span>
      {' '}No morderse las uñas
    </ul>
    {' '}
    <br />
    <ul>
      <span> 5 </span>
      {' '}Hidratar manos y cutículas con cremas y/o aceites
    </ul>
    {' '}
    <br />
    {' '}
    <br />
  </div>
</section>

<section className="trabajos"   id="Trabajos-Realizados" >
  <h2 className="titulo"> TRABAJOS REALIZADOS </h2>
  <div className="contenedor">
    <article className="trabajos-columna">
      <img src= {trabajo1} alt ="Imagen trabajo 1" />
    </article>
    <article className="trabajos-columna">
      <img src= {trabajo2} alt="Imagen trabajo 2" />
    </article>
    <article className="trabajos-columna">
      <img src= {trabajo3} alt="Imagen trabajo 3" />
    </article>
    <article className="trabajos-columna">
      <img src= {trabajo4} alt="Imagen trabajo 4" />
    </article>
    <article className="trabajos-columna">
      <img src= {trabajo5} alt="Imagen trabajo 5"/>
    </article>
    <article className="trabajos-columna">
      <img src= {trabajo6} alt="Imagen trabajo 6"/>
    </article>
  </div>
</section>

<section
  className="Contacto" id="Contacto"
>
  <h2 className="titulo">
    CONTACTO
  </h2>

  <div className="contenedor"> <div className="iconos" />
    <i className="bi bi-instagram"> <ion-icon name="logo-instagram"></ion-icon>
      {' '}@encanto_manicuria_vc
    </i>
    {' '}
    <br />
    <i className="facebook"> <ion-icon name="logo-facebook"></ion-icon>
      {' '}encanto_manicuria_vc
    </i>
    {' '}
    <br />
    <i className="whatsapp"> <ion-icon name="logo-whatsapp"></ion-icon>
      {' '}3493-448182
    </i>
    {' '}
    <br />
    <i className="mail"> <ion-icon name="mail-open-outline"></ion-icon>
      {' '}encantomanicuria@gmail.com
    </i>
    {' '}
    <br />
    <i className="mapa  ">
      {' '}
      <a
        href="mapa.html"
        target="_blank"
      >
        <ion-icon name="pin-outline"></ion-icon>Ubicación 

      </a>
      {' '}Cordoba Este 458 - Humberto Primo (Santa Fe)
    </i>
  </div>
</section>

<section className="Formulario">
  <h2 className="titulo">
    FORMULARIO CONTACTO
  </h2>
  <h4>
  Por consultas o turnos:
  </h4>
  <div className="container_formulario">
    <form
      action="https://formsubmit.co/yanigonella@gmail.com"
      method="POST"
    >
      <label htmlFor="nombre"> Nombre: </label>
      {' '}
      <input
        id="nombre" name="nombre" required type="text" />
      <label htmlFor="telefono"> Teléfono: </label>
      {' '}
      <input  
        id="telefono" name="telefono" required type="telefono"/>
      <label htmlFor="mensaje"> Mensaje: </label>
      {' '}
      <textarea id="mensaje" name="mensaje" required />
      <button type="submit"> Enviar </button>
    </form>
  </div>
</section>
</main>
</body>
<Footer company = {company} year = {year}/>
    </div>
  );
}
export default App;
