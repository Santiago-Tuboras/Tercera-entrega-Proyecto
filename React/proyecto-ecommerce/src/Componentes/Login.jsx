import React, { useRef, useState } from "react";

const URL_LOGIN = "http://localhost/ws-login/login.php"

const enviarData = async (url, data) => {

    const resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const json = await resp.json()

    return json;
}


function Login(props) {
    const [error, setError] = useState(null)
    const [espera, setEspera] = useState(false)

    const refUsuario = useRef(null);
    const refClave = useRef(null)

    const handleLogin = async () => {
        setEspera(true);
        const data = {
            "usuario": refUsuario.current.value,
            "clave": refClave.current.value
        }

        const Respjson = await enviarData(URL_LOGIN, data);
        
        props.acceder( Respjson.conectado )
        setError(Respjson.error)
        setEspera(false);
    }

    return (
        <div className="login">
            <div className="row">
                <div className="col-sm-4 offset-4 mt-5">
                    <div className="card pt-5">
                        <div className="card_-header text-center">
                            <h3>🌋 Login </h3>
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    📧
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo"
                                    aria-label="Correo"
                                    aria-describedby="basic-addon1"
                                    ref={refUsuario}
                                />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon2">
                                    🔒
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Constraseña"
                                    aria-label="Contraseña"
                                    aria-describedby="basic-addon2"
                                    ref={refClave}
                                />
                            </div>

                            {
                                error &&
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            }
                            <button
                                onClick={handleLogin}
                                disabled={ espera }
                                className="btn btn-info btn-lg btn-block"> Acceder</button>

                            <div className="card-footer">
                                <span >¿Olvido su constraseña?</span><a href="">recuperar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;