import React  from "react"
import  IMG1  from "../Imagenes/assets/SantiTuboras.jpeg" 
import  IMG2  from "../Imagenes/assets/Womanphone.png" 
import  IMG3  from "../Imagenes/assets/Man phone.png"
import  IMG4  from "../Imagenes/assets/haima.jpg"
import  IMG5  from "../Imagenes/assets/bmw.jpg"
import  IMG6  from "../Imagenes/assets/mercedes.jpg"
import  IMG7  from "../Imagenes/assets/jeep.jpg"
import  IMG8  from "../Imagenes/assets/nissan.jpg"


const Inicio = () => {
  return (
    <main>
        <section class="presentation container">
            <img src={IMG1} alt="Foto del creador de la pagina" class="presentation__picture" />
            <h2 class="subtitle">Mi nombre es Santiago Tuboras</h2>
            <p class="presentation__copy">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque,
                doloribus quis beatae maiores amet eius dicta deleniti quasi temporibus.</p>
            <a href="/Contacto" class="presentation__cta">Contactame Ahora</a>
        </section>

        <section class="about container">
            <div class="about__texts">
                <h2 class="subtitle">Nuestras Habilidades</h2>
                <p class="abaout__paragraph"> - Transportamos personamos como paquetes personales.</p>
                <p class="abaout__paragraph"> - Transporte rapido y seguro a cualquier parte del pais</p>
            </div>

            <figure class="about__img">
                <img src={ IMG2 } alt="Mujer con celular" class="about__picture" />
            </figure>

            <figure class="about__img about__img--left">
                <img src={IMG3} alt="Hombre con celular" class="about__picture" />
            </figure>

            <div class="about__texts">
                <h2 class="subtitle"> Sobre nuestro trabajo</h2>
                <p class="abaout__paragraph"> Contamos con el tiempo de respuesta mas rapido del mercado.</p>
                <p class="abaout__paragraph"> Nuestro personal esta apto para cualquier tipo de incoveniente y preparado para solucionarlo con el tiempo mencionado.</p>
            </div>
        </section>

        <section class="projects">
            <div class="container">
                <h2 class="subtitle">Nuestros Vehiculos</h2>
                <div class="projects__grid">

                    <article class="projects__items">
                        <img src={IMG4} alt="haima" class="projects__img" />
                        <div class="projects__hover">
                            <h2 class="projects__title">HAIMA</h2>
                            <i class="far fa-file-alt projects__icon"></i>
                        </div>
                    </article>

                    <article class="projects__items">
                        <img src={IMG5} alt="bmw" class="projects__img" />
                        <div class="projects__hover">
                            <h2 class="projects__title">BMW</h2>
                            <i class="far fa-file-alt projects__icon"></i>
                        </div>
                    </article>

                    <article class="projects__items">
                        <img src={IMG6} alt="mercedes" class="projects__img" />
                        <div class="projects__hover">
                            <h2 class="projects__title">Mercedes</h2>
                            <i class="far fa-file-alt projects__icon"></i>
                        </div>
                    </article>

                    <article class="projects__items">
                        <img src={IMG7} alt="Jeep" class="projects__img" />
                        <div class="projects__hover">
                            <h2 class="projects__title">Jeep</h2>
                            <i class="far fa-file-alt projects__icon"></i>
                        </div>
                    </article>

                    <article class="projects__items">
                        <img src={IMG8} alt="Nissan" class="projects__img" />
                        <div class="projects__hover">
                            <h2 class="projects__title">Nissan</h2>
                            <i class="far fa-file-alt projects__icon"></i>
                        </div>
                    </article>
                </div>
            </div>
        </section>

    </main>
  )
}

export default Inicio;