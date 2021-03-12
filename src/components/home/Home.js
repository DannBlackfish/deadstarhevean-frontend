import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <>
        <div class="bg-white">
        <div class="relative ">
        <div class="absolute inset-x-0 bottom-0 h-1/2 " ></div>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div class="absolute inset-0">
              <img class="h-full w-full object-cover" src="https://res.cloudinary.com/dannblackfish/image/upload/v1615344178/deadstarclothing/shooting-image/_DSC0384_pwuwku.jpg" alt="DeadstarhEVEAN"/>
              
            </div>
            <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span class="block text-white">Made for angels</span>
                <span class="block text-indigo-200">made in hevean</span>
              </h1>
              
              <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid  sm:gap-5">
                 
                  <a href="/aboutus" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                    About Us
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div class="space-y-12">
            <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">

                <Link to="/category/Shirt and top">
                <li>
                <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                    <img class="object-cover shadow-lg rounded-lg" src="https://res.cloudinary.com/dannblackfish/image/upload/v1614902346/deadstarclothing/product-image/_DSC0001_zy6gao.jpg" alt="" />
                    </div>
                    <div class="space-y-2">
                    <div>
                        <h3 class="text-2xl text-center text-pink-400 font-medium space-y-1">SHIRTS</h3>
                    </div>
                    </div>
                </div>
                </li>
                </Link>

                <Link to="/category/Accesories">
                <li>
                <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                    <img class="object-cover shadow-lg rounded-lg" src="https://res.cloudinary.com/dannblackfish/image/upload/v1614902347/deadstarclothing/product-image/_DSC0034_ifnogx.jpg" alt="" />
                    </div>
                    <div class="space-y-2">
                    <div>
                        <h3 class="text-2xl text-center text-pink-400 font-medium space-y-1">ACCESORIES</h3>
                    </div>
                    </div>
                </div>
                </li>
                </Link>
                
                <Link to="/category/Lengerie">
                <li>
                <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                    <img class="object-cover shadow-lg rounded-lg" src="https://res.cloudinary.com/dannblackfish/image/upload/v1614902350/deadstarclothing/product-image/_DSC0015_j6qqto.jpg" alt="" />
                    </div>
                    <div class="space-y-2">
                    <div>
                        <h3 class="text-2xl text-center text-pink-400 font-medium space-y-1">LENGERIE</h3>
                    </div>
                    </div>
                </div>
                </li>
                </Link>

                <Link to="/category/Hoodies">
                <li>
                <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                    <img class="object-cover shadow-lg rounded-lg" src="https://res.cloudinary.com/dannblackfish/image/upload/v1614902346/deadstarclothing/product-image/_DSC0005_zecc0x.jpg" alt="" />
                    </div>
                    <div class="space-y-2">
                    <div>
                        <h3 class="text-2xl text-center text-pink-400 font-medium space-y-1">HOODIES</h3>
                    </div>
                    </div>
                </div>
                </li>
                </Link>
                
                <Link to="/category/Dresses and skirts">
                <li>
                <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                    <img class="object-cover shadow-lg rounded-lg" src="https://res.cloudinary.com/dannblackfish/image/upload/v1614902352/deadstarclothing/product-image/_DSC0059_it4ako.jpg" alt="" />
                    </div>
                    <div class="space-y-2">
                    <div class="text-lg leading-6 font-medium space-y-1">
                        <h3 class="text-2xl text-center text-pink-400 font-medium space-y-1">DRESSES</h3>
                    </div>
                    </div>
                </div>
                </li>
                </Link>

                <Link to="/category/Sale">
                <li>
                <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                    <img class="object-cover shadow-lg rounded-lg" src="https://res.cloudinary.com/dannblackfish/image/upload/v1614902349/deadstarclothing/product-image/_DSC0013_ugpnej.jpg" alt="" />
                    </div>
                    <div class="space-y-2">
                    <div>
                        <h3 class="text-2xl text-center text-pink-400 font-medium space-y-1">SALE</h3>
                    </div>
                    </div>
                </div>
                </li>
                </Link>

            </ul>
            </div>
        </div>
        </div>

        {/* <!-- Blog section --> */}
      <div class="relative bg-pink-50 py-16 sm:py-24 lg:py-32">
        <div class="relative">
          <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <p class="mt-2 text-3xl font-extrabold text-pink-500 tracking-tight sm:text-4xl">
              FOLLOW US ON INSTAGRAM
            </p>
            <p class="mt-5 mx-auto max-w-prose text-xl text-pink-400">
            Share your photos with our clothes through networks
            </p>
          </div>
          <div class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">


          <a href="https://www.instagram.com/p/CMSlPyUh3_k/">
                <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                    <img class="object-cover shadow-lg rounded-2xl" src="/foto1.png" alt="" />
                    </div>
                </div>
                </a>

                <a href="https://www.instagram.com/p/CMP6_8gBdpd/">
                <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                    <img class="object-cover shadow-lg rounded-2xl" src="/foto2.png" alt="" />
                    </div>
                </div>
                </a>
                
                <a href="https://www.instagram.com/p/CMPtBmIhnRV/">
                <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                    <img class="object-cover shadow-lg rounded-2xl" src="/foto3.png" alt="" />
                    </div>
                </div>
                </a>
        
          </div>
        </div>
      </div>
        </>
    )
    
}