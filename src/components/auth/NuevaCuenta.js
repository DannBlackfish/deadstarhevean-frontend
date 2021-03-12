/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AlertaContext from '../../context/alertas/AlertaContext'
import AuthContext from '../../context/autenticacion/AuthContext'


export default function NuevaCuenta(props) {

    // Extraer los valores del context
    const alertaContext = useContext(AlertaContext)
    const { alerta, mostrarAlerta } = alertaContext

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        name: "",
        email: "",
        password: "",
        confirmar: ""
    })


    const authContext = useContext(AuthContext)
    const { mensaje, autenticado, registrarUsuario } = authContext;

    // En caso de que el usuario se haya autenticado o registrado. Un registro duplicado.

    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos')
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }

    }, [mensaje, autenticado, props.history])



    // Extraer de usuario
    const { name, email, password, confirmar } = usuario

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario quiera iniciar sesión

    const onSubmit = e => {
        e.preventDefault()
        
        // Validar que no haya campos vacios

        // if (
        //     nombre.trim() === "" || 
        //     email.trim() === "" ||
        //     password.trim() === "" || 
        //     confirmar.trim() === "" 
        // ){
        //     mostrarAlerta("Todos los campos son obligatorios", 'alerta-error')
        //     return
        // }

        // // Password mínimo de 6 caracteres
        // if(password.length < 6) {
        //     mostrarAlerta("El password debe ser de al menos 6 caracteres", "alerta-error")
        //     return
        // }

        // // Los dos passwords son iguales
        // if(password !== confirmar){
        //     mostrarAlerta('Los passwords no coinciden')
        //     return
        // }

        // pasarlo al action
        registrarUsuario({
            name,
            email, 
            password
        })
    }

    return (
        <>
        <div>
            {alerta ?  
                (
                    <div className={`alerta ${alerta.categoria}`}>
                        {alerta.msg}
                    </div>
                )
            : null}
            

<div class="min-h-screen bg-pink-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" >
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <img class="mx-auto h-12 w-auto" src="/monograma_ds.png" alt="Workflow" />
    <h2 class="mt-6 text-center text-3xl font-extrabold text-pink-400">
      Join us
    </h2>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" onSubmit={onSubmit}>

        <div>
          <label class="block text-sm font-medium text-gray-700" htmlFor="nombre">
            Name
          </label>
          <div class="mt-1">
            <input id="nombre" name="name" type="text" autocomplete="name" placeholder="Your name" onChange={onChange} value={name} required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <div class="mt-1">
            <input id="email" name="email" type="text" autocomplete="email" placeholder="Your email" onChange={onChange} value={email} required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700" htmlFor="password">
            Password
          </label>
          <div class="mt-1">
            <input id="password" name="password" type="password" autocomplete="current-password" placeholder="Your password" onChange={onChange} value={password} required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700" htmlFor="confirmar">
            Confirm your Password
          </label>
          <div class="mt-1">
            <input id="confirmar" name="confirmar" type="password" autocomplete="current-password" placeholder="Repeat your password" onChange={onChange} value={confirmar} required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
        </div>


        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded" />
            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-pink-600 hover:text-pink-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-400 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500" value="Registrarme">
            Sign in
          </button>
        </div>
      </form>

      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">
            <Link to={'/'} className="enlace-cuenta">
                Volver a iniciar sesión
            </Link>
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>




        </div>
            </>
        
    )
}