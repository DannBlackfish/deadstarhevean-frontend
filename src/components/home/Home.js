import React from 'react'
import Gallery from '../Carousel'

export default function Home() {
    return (
        <>
        <Gallery />
        
        <div class="bg-white">
        <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div class="space-y-12">
            <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">

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

            </ul>
            </div>
        </div>
        </div>
        </>
    )
    
}