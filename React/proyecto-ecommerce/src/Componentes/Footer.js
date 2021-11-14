import React from "react";
import  IMG1  from "../Imagenes/LogoFacebook.png" 
import  IMG2  from "../Imagenes/LogoInstagram.png" 
import  IMG3 from "../Imagenes/GmailLogo.png" 

const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="container footer__grid">
                    <nav class="nav nav--footer">
                        <a href="#" class="nav__items nav__items--footer"> Inicio </a>
                        <a href="#" class="nav__items nav__items--footer"> Sobre nosotros</a>
                        <a href="/Tienda" class="nav__items nav__items--footer"> Tienda</a>
                        <a href="#" class="nav__items nav__items--footer"> Nuestros trabajos</a>
                    </nav>

                    <section class="footer__contact">
                        <h3 class="footer__title">Contactame</h3>
                        <div class="footer__icons">
                            <span class="footer__container-icons"> <img src={IMG1} class="footer__icon"></img>
                            </span>

                            <span class="footer__container-icons "> <img src={IMG2} class="footer__icon"></img>
                            </span>

                            <span class="footer__container-icons "> <img src={IMG3} class="footer__icon"></img>
                            </span>
                        </div>
                    </section>
                </div>
            </footer>
        </>

    )
}

export default Footer;