import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import service from '../../config/axios'
import {Link} from 'react-router-dom'

export default function CategoryProduct() {

    const categoria = useParams().category
    const [categoryDetail, setCategoryDetail] = useState()

    useEffect(async() => {
        const respuesta = await service.get(`https://deadstarhevean.herokuapp.com/product/category/${categoria}`)
        setCategoryDetail(respuesta.data)
    }, [])

    return (
        <>
        {
            categoryDetail === undefined?(<img style={{flex:'display', justifyContent:'center', alignItems:'center'  }} style={{width:70}} src="https://res.cloudinary.com/dannblackfish/image/upload/v1615395373/deadstarclothing/gif/Logo-DS_a7t7bj.gif"/>):(
                categoryDetail.map((e,id)=>{
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
