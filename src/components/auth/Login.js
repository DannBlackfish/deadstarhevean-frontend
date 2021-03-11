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
      <>

        <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div class="max-w-md w-full space-y-8">

                    {alerta ?  
                        (
                            <div className={`alerta ${alerta.categoria}`}>
                                {alerta.msg}
                            </div>
                        )
                    : null}

            <div>
              <img class="mx-auto h-12 w-auto" src="/monograma_ds.png" alt="Workflow"/>
              <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900" >
                Sign in
              </h2>
            </div>

            <form class="mt-8 space-y-6" method="POST" onSubmit={onSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div class="rounded-md shadow-sm -space-y-px">

                <div>
                  <label htmlFor="email" class="sr-only">Email address</label>
                  <input id="email" name="email" type="email" autocomplete="email" placeholder="Your email"                          onChange={onChange} value={email} required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                </div>

                <div>
                  <label htmlFor="password" class="sr-only">Password</label>
                  <input id="password" name="password" type="password" autocomplete="current-password" placeholder="Your password" onChange={onChange} value={password} required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div class="text-sm">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button type="submit" value="Iniciar Sesión" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                  <span class="absolute left-0 inset-y-0 flex items-center pl-3">

                    <svg class="h-5 w-5 text-pink-500 group-hover:text-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  Sign in
                </button>
              </div>

            </form>
            <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                Obtener Cuenta
            </Link>
          </div>
        </div>

  </>
    )
}
