import React, {useContext, useEffect} from 'react'
// import {Link} from 'react-router-dom'
import AuthContext from '../../context/autenticacion/AuthContext'

export default function Cart(props) {

  // const idProduct = useParams().id
  // const [cartProduct, setCartProduct] = useState()
  // const ctxauth = useContext(AuthContext)
  // const {usuario, autenticado, checkout} = ctxauth

  // useEffect(async() => {
  
  //   const detail = await service.patch(`http://localhost:3001/user/profile/edit/${idProduct}`)
  //   console.log("este es el detail", detail)
  //   setCartProduct(detail.data)

  // }, [])

  const ctxauth = useContext(AuthContext)
  const { usuarioAutenticado, usuario } = ctxauth

  console.log('Este es el checkout', usuarioAutenticado, usuario)

  
  useEffect(() => {
      usuarioAutenticado()
  }, [])

  // const sumarCarrito = (e, checkout) => {
  // e.preventDefault()
  // sumarCarrito(checkout)
  // }



    return (
      usuario === undefined?(<img style={{flex:'display', justifyContent:'center', alignItems:'center'  }} style={{width:70}} src="https://res.cloudinary.com/dannblackfish/image/upload/v1615395373/deadstarclothing/gif/Logo-DS_a7t7bj.gif"/>):(
      <div class="bg-white">
      <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div class="space-y-5 sm:space-y-4">
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">SHOPPING BAG</h2>
            <p class="text-xl text-gray-500">Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras.</p>
            <p class="text-xl text-gray-500">Subtotal</p>
            <p class="text-xl text-gray-500">total</p>
            <p class="text-xl text-gray-500">Checkout</p>
          </div>
                {
                  usuario.checkout.map((e,id)=>{
                  return(
                    <>
                      <div class="lg:col-span-2" key={id}>
                        <ul class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                          <li class="sm:py-8">
                            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                              {/* <!-- Image --> */}
                              <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                <img class="object-cover shadow-lg rounded-lg" src={[e.image[0]]} alt=""/>
                              </div>
                              <div class="sm:col-span-2">
                                <div class="space-y-4">
                                  <div class="text-lg leading-6 font-medium space-y-1">
                                    <h3>{e.name}</h3>
                                    <p class="text-indigo-600">{e.size}</p>
                                    <p class="text-indigo-600">Quantity</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      </>
                      )}
                    )}
        </div>
      </div>
      </div>
    )
    )
}