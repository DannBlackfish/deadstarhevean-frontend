/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react'
import AuthContext from '../../context/autenticacion/AuthContext'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import service from '../../config/axios'

export default function Proyectos(props) {    

    // Extraer la info de autenticación
    
    const authContext = useContext(AuthContext)

    const { usuario, editarUsuario, eliminarUsuario } = authContext
    const {id} = useParams()

    const [actualizar, setActualizar] = useState(usuario)
    console.log(usuario)

    const onChange = (e) => {
        e.preventDefault()
        setActualizar({
            ...actualizar,
            [e.target.name]: e.target.value
        })
    }

    const sendActualizar = async (e) => {
        e.preventDefault()
        await editarUsuario({
            name: actualizar.name, 
            email: actualizar.email, 
            password: actualizar.password,
            address: actualizar.address,
            mobile: actualizar.mobile

        }, props.id)
        props.history.push('/')
    }
    const sendEliminar = () => {
        eliminarUsuario(props.id)
    }

    return (
        <>
            <div class="relative bg-pink-200 overflow-hidden">
            <div class="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
                <svg class="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0" width="364" height="384" viewBox="0 0 364 384" fill="none">
                <defs>
                
                </defs>
                <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
                </svg>
            </div>
            <div class="relative pt-6 pb-16 sm:pb-24">
                
                <main class="mt-16 sm:mt-24">
                <div class="mx-auto max-w-7xl">
                    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                        <div>
                        <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                            <span class="md:block">This is</span>
                            <span class="text-pink-400 md:block">Your profile</span>
                        </h1>
                        
                        <p class="mt-3 text-base text-pink-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            Name: {usuario.name} 
                        </p>
                        <p class="mt-3 text-base text-pink-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            Email: {usuario.email}
                        </p>
                        <p class="mt-3 text-base text-pink-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            Address: {usuario.address}
                        </p>
                        <p class="mt-3 text-base text-pink-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            Mobile: {usuario.mobile}
                        </p>

                        <p class="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">Check</p>
                        <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">

                            <div class="flex flex-wrap items-start justify-between">
                            <div class="flex justify-center px-1">
                                <div class=" rounded-md shadow">
                                <a href="/cart" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-700">
                                View Your Cart
                                </a>
                                </div>
                            </div>

                            <div class="flex justify-center px-1">
                                <div class=" rounded-md shadow">
                                <a href="/store" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-700">
                                View Store
                                </a>
                                </div>
                            </div>

                            <div class="flex justify-center px-1">
                                <div class=" rounded-md shadow">
                                {/* <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
                                Delete Profile
                                </a> */}
                                </div>
                            </div>

                            </div>
                        </div>
                        </div>
                    </div>


                    <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                        <div class="bg-pink-100 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                        <div class="px-4 py-8 sm:px-10">
                            <div>
                            <p class="text-xl text-center font-medium text-pink-500">
                                EDIT YOUR PROFILE
                            </p>
                            </div>

                            <div class="mt-6">
                            <form class="space-y-6" onSubmit={sendActualizar}>
                                <div>
                                <label for="name" class="sr-only">Full name</label>
                                <input onChange={(e) => onChange(e)}   value={actualizar.name} type="text" name="name" id="name" placeholder="Name" class="block bg-pink-100 w-full shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm border-gray-300 rounded-md"/>
                                </div>

                                <div>
                                <label for="email" class="sr-only">Email</label>
                                <input onChange={(e) => onChange(e)} value={actualizar.email} type="text" name="email" id="email" placeholder="Email" class="block bg-pink-100 w-full shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm border-gray-300 rounded-md"/>
                                </div>

                                <div>
                                <label for="address" class="sr-only">Address</label>
                                <input onChange={(e) => onChange(e)} value={actualizar.address}  type="text" name="address" id="address" placeholder="Address" class="block bg-pink-100 w-full shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm border-gray-300 rounded-md"/>
                                </div>

                                <div>
                                <label for="mobile" class="sr-only">Mobile</label>
                                <input onChange={(e) => onChange(e)} value={actualizar.mobile} type="text" name="mobile" id="mobile" placeholder="Mobile" class="block bg-pink-100 w-full shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm border-gray-300 rounded-md"/>
                                </div>

                                <div>
                                <label for="password" class="sr-only">Password</label>
                                <input onChange={(e) => onChange(e)} value={actualizar.password} id="password" name="password" type="password" placeholder="Password" class="block w-full bg-pink-100 shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm border-gray-300 rounded-md"/>
                                </div>

                                <div>
                                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                                    Edit Profile
                                </button>
                                </div>

                            </form>
                            <div>
                                <Link to="/">
                                <button  onClick={sendEliminar} 
                        type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-8">
                                    Delete Profile
                                </button>
                                </Link>

                            </div>

                            </div>
                        </div>
                        <div class="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                            <p class="text-xs leading-5 text-gray-500">By signing up, you agree to our <a href="#" class="font-medium text-gray-900 hover:underline">Terms</a>, <a href="#" class="font-medium text-gray-900 hover:underline">Data Policy</a> and <a href="#" class="font-medium text-gray-900 hover:underline">Cookies Policy</a>.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </main>
            </div>
            </div>

        </>
    )
}
