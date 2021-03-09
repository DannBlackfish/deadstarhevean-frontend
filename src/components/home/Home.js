import React from 'react'

export default function Home() {
    return (

        //<!--
        // This example requires Tailwind CSS v2.0+ 
        
        // This example requires some changes to your config:
        
        // ```
        // // tailwind.config.js
        // module.exports = {
        //     // ...
        //     plugins: [
        //     // ...
        //     require('@tailwindcss/aspect-ratio'),
        //     ]
        // }
        // ```
        // -->
        <div class="bg-white">
        <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div class="space-y-12">
            <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">STORE</h2>
                <p class="text-xl text-gray-500">Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.</p>
            </div>
            <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">

                <li>
                <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                    <img class="object-cover shadow-lg rounded-lg" src="/product-image/_DSC0001.jpg" alt="" />
                    </div>

                    <div class="space-y-2">
                    <div class="text-lg leading-6 font-medium space-y-1">
                        <h3>Join th cult - pink</h3>
                        <p class="text-indigo-600">$16.50</p>
                    </div>
                    </div>
                </div>
                </li>

                <li>
                <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                    <img class="object-cover shadow-lg rounded-lg" src="/product-image/_DSC0005.jpg" alt="" />
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
                    <img class="object-cover shadow-lg rounded-lg" src="/product-image/_DSC0015.jpg" alt="" />
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
                    <img class="object-cover shadow-lg rounded-lg" src="/product-image/_DSC0020.jpg" alt="" />
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
                    <img class="object-cover shadow-lg rounded-lg" src="/product-image/_DSC0059.jpg" alt="" />
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
                    <img class="object-cover shadow-lg rounded-lg" src="/product-image/_DSC0018.jpg" alt="" />
                    </div>
                    <div class="space-y-2">
                    <div class="text-lg leading-6 font-medium space-y-1">
                        <h3>Set bralette and panties</h3>
                        <p class="text-indigo-600">$10.00</p>
                    </div>
                    </div>
                </div>
                </li>

                {/* <!-- More items... --> */}
            </ul>
            </div>
        </div>
        </div>

    )
}