import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import service from '../../config/axios'

export default function Store() {

    const [product, setProduct] = useState()

    useEffect(async()=>{
        
          const productDB = await service.get("https://deadstarhevean.herokuapp.com/product/all")
          setProduct(productDB.data)
        
      },[])


    return (
        <>
        <div class="bg-white">
        <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0"></div>
        <div class="space-y-5 sm:space-y-4">
        <h2 class="text-3xl text-center text-pink-400 font-extrabold tracking-tight sm:text-4xl">All Products</h2>
        <p class="text-xl text-center text-pink-300">Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras.</p>
        </div>
        </div>
        </div>
    {
        product === undefined?(<img style={{flex:'display', justifyContent:'center', alignItems:'center'  }} style={{width:70}} src="https://res.cloudinary.com/dannblackfish/image/upload/v1615395373/deadstarclothing/gif/Logo-DS_a7t7bj.gif"/>):(
            
        product.map((e,id)=>{
        return(
            <>
            <div class="bg-white">
            <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-10">
                <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                
                <div class="lg:col-span-2">
                    <ul class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                    <li class="sm:py-8">
                        <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                        {/* <!-- Image --> */}
                        <Link to={`/product/${e._id}`}>
                        <div key={id} class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                            <img class="object-cover shadow-lg rounded-lg" src={e.image[0]} alt=""/>
                        </div>
                        </Link>
                        <div class="sm:col-span-2">
                            <div class="space-y-4">
                            <div class="text-lg leading-6 font-medium space-y-1">
                                <h3 class="text-3xl text-pink-400">{e.name}</h3>
                                <p class="text-pink-400 text-xl">${e.price}</p>
                            </div>
                            <div class="text-lg">
                                <p class="text-pink-300">{e.material}</p>
                            </div>
                            <ul class="flex space-x-5">
                            </ul>
                            </div>
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </>
        )
        })
        )
    }
    </>
    )
}