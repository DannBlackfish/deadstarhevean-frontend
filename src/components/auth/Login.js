/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AlertaContext from '../../context/alertas/AlertaContext'
import AuthContext from '../../context/autenticacion/AuthContext'

export default function Login(props) {

    // Extraer los valores del context
    const alertaContext = useContext(AlertaContext)
    const { alerta, mostrarAlerta } = alertaContext

    const authContext = useContext(AuthContext)
    const { mensaje, autenticado, iniciarSesion } = authContext;

    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos')
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }

    }, [mensaje, autenticado, props.history])


    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: "",
        password: ""
    })

    // Extraer de usuario
    const { email, password } = usuario

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario quiera iniciar sesión

    const onSubmit = e => {
        e.preventDefault()
        
        //validar que no haya campos vacios
        if(email.trim() === "" || password.trim() === ""){
            return mostrarAlerta("Todos los campos son obligatorios", "alerta-error")
        }

        // pasarlo al action

        iniciarSesion({email, password})

    }

    return (  
        <div className="form-usuario">
            
            {alerta ?  
                (
                    <div className={`alerta ${alerta.categoria}`}>
                        {alerta.msg}
                    </div>
                )
            : null}

            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            onChange={onChange}
                            value={email}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            onChange={onChange}
                            value={password}
                        />
                    </div>
                    
                    <div className="campo-form">            
                        <input 
                            type="submit" 
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>

                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>

            </div>
            
        </div>
    )
}
