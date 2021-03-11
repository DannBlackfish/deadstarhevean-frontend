import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import service from '../../config/axios'

export default function Store() {

    const [product, setProduct] = useState()

    useEffect(async()=>{
        
          const productDB = await service.get("http://localhost:3001/product/all")
          setProduct(productDB.data)
        
      },[])


    return (
        <>
    {
        product === undefined?(<img style={{flex:'display', justifyContent:'center', alignItems:'center'  }} style={{width:70}} src="https://res.cloudinary.com/dannblackfish/image/upload/v1615395373/deadstarclothing/gif/Logo-DS_a7t7bj.gif"/>):(
        product.map((e,id)=>{
        return(
            <>
            
            <div class="bg-white">
                    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                        <div class="space-y-12">
                        <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">STORE</h2>
                            <p class="text-xl text-gray-500">Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.</p>
                        </div>
                        <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">

                        <Link to={`/product/${e._id}`}>
                            <li key={id}>
                            <div class="space-y-4">
                                <div class="aspect-w-3 aspect-h-2">
                                <img class="object-cover shadow-lg rounded-lg" src={e.image[0]} alt="" />
                                </div>

                                <div class="space-y-2">
                                <div class="text-lg leading-6 font-medium space-y-1">
                                    <h3>{e.name}</h3>
                                    <p class="text-indigo-600">{e.price}</p>
                                </div>
                                </div>
                            </div>
                            </li>

                            </Link>

                            {/* <li>
                            <div class="space-y-4">
                                <div class="aspect-w-3 aspect-h-2">
                                <img class="object-cover shadow-lg rounded-lg" src="https://res.cloudinary.com/dannblackfish/image/upload/v1614902346/deadstarclothing/product-image/_DSC0005_zecc0x.jpg" alt="" />
                                </div>

                                <div class="space-y-2">
                                <div class="text-lg leading-6 font-medium space-y-1">
                                    <h3>Flaming Bunnies - Lilac</h3>
                                    <p class="text-indigo-600">$66.00</p>
                                </div>
                                </div>
                            </div>
                            </li>

                            <li>
                            <div class="space-y-4">
                                <div class="aspect-w-3 aspect-h-2">
                                <img class="object-cover shadow-lg rounded-lg" src="https://res.cloudinary.com/dannblackfish/image/upload/v1614902350/deadstarclothing/product-image/_DSC0015_j6qqto.jpg" alt="" />
                                </div>

                                <div class="space-y-2">
                                <div class="text-lg leading-6 font-medium space-y-1">
                                    <h3>Sunset Nightgown - Pink</h3>
                                    <p class="text-indigo-600">$36.00</p>
                                </div>
                                </div>
                            </div>
                            </li>

                            <li>
                            <div class="space-y-4">
                                <div class="aspect-w-3 aspect-h-2">
                                <img class="object-cover shadow-lg rounded-lg" src="https://res.cloudinary.com/dannblackfish/image/upload/v1614902351/deadstarclothing/product-image/_DSC0020_rvs04p.jpg" alt="" />
                                </div>

                                <div class="space-y-2">
                                <div class="text-lg leading-6 font-medium space-y-1">
                                    <h3>Smoking Stars - Lilac Robe</h3>
                                    <p class="text-indigo-600">$66.00</p>
                                </div>
                                </div>
                            </div>
                            </li>

                            <li>
                            <div class="space-y-4">
                                <div class="aspect-w-3 aspect-h-2">
                                <img class="object-cover shadow-lg rounded-lg" src="https://res.cloudinary.com/dannblackfish/image/upload/v1614902352/deadstarclothing/product-image/_DSC0059_it4ako.jpg" alt="" />
                                </div>

                                <div class="space-y-2">
                                <div class="text-lg leading-6 font-medium space-y-1">
                                    <h3>Peluchitos Pink Dress</h3>
                                    <p class="text-indigo-600">$42.60</p>
                                </div>
                                </div>
                            </div>
                            </li>

                            <li>
                            <div class="space-y-4">
                                <div class="aspect-w-3 aspect-h-2">
                                <img class="object-cover shadow-lg rounded-lg" src="https://res.cloudinary.com/dannblackfish/image/upload/v1614902350/deadstarclothing/product-image/_DSC0019_nlhirn.jpg" alt="" />
                                </div>
                                <div class="space-y-2">
                                <div class="text-lg leading-6 font-medium space-y-1">
                                    <h3>Set bralette and panties</h3>
                                    <p class="text-indigo-600">$10.00</p>
                                </div>
                                </div>
                            </div>
                            </li> */}

                            {/* <!-- More items... --> */}
                        </ul>
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
