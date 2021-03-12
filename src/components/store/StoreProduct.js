import React, { useEffect, useState, useContext } from 'react'
import service from '../../config/axios'
import { useParams } from 'react-router-dom'

import AuthContext from './../../context/autenticacion/AuthContext'

export default function StoreProduct(props) {

  const idProduct = useParams().id
  const [productDetail, setProductDetail] = useState()
  const ctxauth = useContext(AuthContext)
  const {usuario, autenticado, agregarCarrito} = ctxauth

  useEffect(async() => {
  
      const detail = await service.get(`http://localhost:3001/product/detail/${idProduct}`)
      console.log("este es el detail", detail)
      setProductDetail(detail.data)

  }, [])


const agregarACarrito = (e, producto) => {
  e.preventDefault()
  agregarCarrito(producto)
}
  
const redirigirLogin = () => {
  props.history.push('/login')
}

    return (
      <>
      {
      productDetail === undefined?(<img style={{flex:'display', justifyContent:'center', alignItems:'center'  }} style={{width:70}} src="https://res.cloudinary.com/dannblackfish/image/upload/v1615395373/deadstarclothing/gif/Logo-DS_a7t7bj.gif"/>):(
        <div class="relative bg-white">
          <div class="absolute inset-0" aria-hidden="true">
            <div class="absolute inset-y-0 right-0 w-1/2 bg-pink-50"></div>
          </div>
          <div class="relative max-w-7xl mx-auto lg:px-8 lg:grid lg:grid-cols-2">
            <div class="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
              <div class="max-w-lg mx-auto lg:mx-0">
                <dl class="mt-12 space-y-10">
                  <div class="flex">
                  <img class="object-cover rounded-lg" src={productDetail.image[0]} alt="" />
                  </div>      
                </dl>
              </div>
            </div>

            <div class="bg-pink-50 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
              <div class="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
                <div>
                  <h1 class="text-pink-500 text-5xl text-center py-5">{productDetail.name}</h1>
                  <h5 class="text-pink-500 text-center text-4l py-4">$66.00</h5>
                  <p class=" text-center text-pink-400 text-base">{productDetail.description}</p>
                  <p class=" text-center text-pink-400 text-xl py-4">{productDetail.material}</p>
                </div>

                <ul class="bg-pink-800 bg-opacity-50 rounded sm:grid sm:grid-cols-3  sm:grid-flow-col">
                    <li class="border-t border-pink-300 border-opacity-25 py-4 px-4 flex space-x-3 text-base text-white text-center items-center justify-center hover:bg-pink-300">
                    <span class="flex items-center">{productDetail.size[0]}</span>
                    </li>

                    <li class="border-t border-pink-300 border-opacity-25 py-4 px-4 flex space-x-3 text-base text-white text-center items-center justify-center hover:bg-pink-300">
                    <span class="flex items-center">{productDetail.size[1]}</span>
                    </li>

                    <li class="border-t border-pink-300 border-opacity-25 py-4 px-4 flex space-x-3 text-base text-white text-center items-center justify-center hover:bg-pink-300">
                    <span>{productDetail.size[2]}</span>
                    </li>
                </ul>
                <form onSubmit={ autenticado ? (e) => agregarACarrito(e, productDetail) : () => redirigirLogin() }>
                  <button type="submit" class="bg-pink-300 border border-transparent rounded-md w-full px-8 py-4 flex items-center justify-center text-lg leading-6 font-medium text-white hover:bg-pink-400 md:px-10">
                    Add cart
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
)
}
</>
    )
}