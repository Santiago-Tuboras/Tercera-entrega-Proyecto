import React from "react";
import { useForm } from 'react-hook-form';
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.min.css"
import "alertifyjs/build/css/themes/default.min.css"

const URL_API = "http://localhost/api-demo/insertar_registro.php"


const Contacto = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch(URL_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        )
            .then(resp => resp.json())
            .then(json => {
                reset();
                alertify.alert("formulario", json.msj)
            })
    }

    console.log(errors)






    return (
        <section class="form__wrap">
            <section class="contact__info">

                <section class="info_title">
                    <span class="fa fa-user-circle"></span>
                    <h2>Informacion de contacto</h2>
                </section>

                <section class="info_items">
                    <p><span class="fa fa-envelope"></span> santituboras@gmail.com</p>
                    <p><span class="fa fa-mobile"></span> +598 092917776</p>

                </section>
            </section>

            <form action="" class="form__contact" id="form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Envia un mensaje</h2>
                <div class="user_info validacion" id="grupo__name">
                    <label for="names">Nombres</label>
                    <input type="text" placeholder="nombre" name="nombre" {...register("nombre", { required: true })} ></input>
                    {errors.nombre && <span>Ingrese nombre para enviar formulario</span>}
                </div>
                <div class="user_info validacion" id="grupo__phone">
                    <label for="phone">Telefono / Celular</label>
                    <input type="number" placeholder="telefono" name="telefono" {...register("telefono", { required: true })}></input>
                    {errors.telefono && <span>Ingrese TELEFONO para enviar formulario</span>}
                </div>
                <div class="user_info validacion" id="grupo__email">

                    <label for="email">Correo Electronico</label>
                    <input type="email" placeholder="correo" name="correo" {...register("correo", { required: true })}></input>
                    {errors.correo && <span>Ingrese CORREO para enviar formulario</span>}
                </div>
                <div class="user_info validacion">
                    <label for="mensaje"> Mensaje </label>
                    <textarea {...register("observaciones", {})}></textarea>
                </div>
                <div class="user_info validacion">
                    <input type="submit" value="Enviar Mensaje" id="btn__send" class=""></input>
                </div>


            </form>
        </section>
    )
}

export default Contacto;