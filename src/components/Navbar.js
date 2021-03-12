import React, {useContext, useEffect} from 'react'

import {Link} from 'react-router-dom'

import AuthContext from '../context/autenticacion/AuthContext'

export default function Navbar() {

    // CON ESTAS DOS LINEAS ACCEDES A TODO TU CHECKOUT
    // EL CHECKOUT ESTÁ DENTRO DE USUARIO

    // usuario.checkout.map( () => {... y aquí renderizas los productos que quiero comprar})
    // El botón que genera la orden, suma los precios y hace un post a orders
    const ctxauth = useContext(AuthContext)
    const { usuarioAutenticado, usuario, cerrarSesion } = ctxauth

    console.log(usuarioAutenticado, usuario)

    
    useEffect(() => {
        usuarioAutenticado()
    }, [])


    return (
            <>
            {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
            <nav class="bg-white shadow">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex justify-between h-16">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* <!-- Mobile menu button --> */}
                    <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    {/* <!--
                        Icon when menu is closed.
                        Heroicon name: outline/menu
                        Menu open: "hidden", Menu closed: "block"
                    --> */}
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {/* <!--
                        Icon when menu is open.
                        Heroicon name: outline/x
                        Menu open: "block", Menu closed: "hidden"
                    --> */}
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex-shrink-0 flex items-center">
                    <Link to="/">
                    <img href="/home" class="block lg:hidden h-10 w-auto" src="/logo_ds.png" alt="Workflow" />
                    <img class="hidden lg:block h-10 w-auto" src="/logo_ds.png" alt="Workflow" />
                    </Link>
                    </div>
                    <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <a href="/" class="border-transparent text-pink-400 hover:text-pink-500 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                        Home
                    </a>
                    <a href="/aboutus" class="border-transparent text-pink-400 hover:text-pink-500 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                        About Us
                    </a>
                    <a href="/store" class="border-transparent text-pink-400 hover:text-pink-500 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                        Store
                    </a>
                    </div>
                </div>

                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {
                        usuario ? null :
                        (
                            <>
                                <Link to="/cart" class="border-transparent text-pink-400 hover:text-pink-500 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                </Link>

                                <Link to="/signup" class="border-transparent text-pink-400 hover:text-pink-500 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                                    SignUp
                                </Link>
                                <Link to="/login" class="border-transparent text-pink-400 hover:text-pink-500 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                                    Login
                                </Link>
                                
                            </>
                           
                        )

                    }
                    


                    {/* <!-- Profile dropdown --> */}

                    
                    <div class="ml-3 relative">
                    <Link to="/profile">
                    <div className="border-transparent underline text-pink-400 hover:text-pink-500 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                        { usuario ? `Welcome ${usuario.name}` : null }
                    </div> 
                    </Link>

                    <div className="border-transparent text-pink-400 hover:text-pink-500 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                        <Link to="/cart">
                        <span class="inline-block h-6 w-6 overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
                        </svg>
                        </span>
                        { usuario ? `${usuario.checkout.length} ` : null } 
                        </Link>
                    </div>

                    <Link onClick={() => {cerrarSesion()}} class="inline-flex rounded-md shadow">
                    <div class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-pink-400 hover:bg-pink-500">
                        { usuario ? "Logout" : null }
                    </div> 
                    </Link>
                    </div>
                </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div class="sm:hidden" id="mobile-menu">
                <div class="pt-2 pb-4 space-y-1">
                {/* <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" --> */}
                <a href="#" class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Home</a>
                <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Store</a>
                <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Cart</a>
                <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Signin</a>
                <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Login</a>
                </div>
            </div>
            </nav>
            </>
    )
}