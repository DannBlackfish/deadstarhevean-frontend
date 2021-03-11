import React from 'react'

export default function Cart() {
    return (

<div class="fixed inset-0 overflow-hidden">
  <div class="absolute inset-0 overflow-hidden">
    <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16" aria-labelledby="slide-over-heading">
      {/* <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      --> */}
      <div class="w-screen max-w-md">
        <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
          <div class="px-4 py-6 sm:px-6 bg-pink-200">
            <div class="flex items-start justify-between">
              <h2 id="slide-over-heading" class="text-2xl font-medium text-gray-900">
                SHOPPING BAG
              </h2>
              <div class="ml-3 h-7 flex items-center">
                <button class="bg-pink-200 rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500">
                  <span class="sr-only">Close panel</span>
                  {/* <!-- Heroicon name: outline/x --> */}
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Main --> */}
          <div>
            <div class="pb-1 sm:pb-6">
              <div>

        <div class="divide-y divide-gray-200">
            <div class="pb-6">
              <div class="h-24 sm:h-20 lg:h-28"></div>
              <div class="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-15">

                <div>
                <div class="-m-1 flex">
                    <div class="inline-flex rounded-lg overflow-hidden">
                      <img class="flex-shrink-0 h-auto w-24 sm:w-40 lg:w-48 " src="https://res.cloudinary.com/dannblackfish/image/upload/v1615349423/deadstarclothing/product-image/shooting-image/_DSC0031_gijgci.png" alt="" />

                        <div class="mt-6 sm:ml-6 sm:flex-1">
                        <div>
                            <div class="flex items-center">
                            <h3 class="font-bold text-xl text-gray-900 sm:text-2xl">Product name</h3>
                            </div>
                            <p class="text-sm text-gray-500">Size</p>
                            

                                <div class="relative inline-block text-left">
                                <div>
                                    <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-expanded="true" aria-haspopup="true">
                                    Quantity
                                    {/* <!-- Heroicon name: solid/chevron-down --> */}
                                    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                    </button>
                                </div>
                                {/* 
                                <!--
                                    Dropdown menu, show/hide based on menu state.

                                    Entering: "transition ease-out duration-100"
                                    From: "transform opacity-0 scale-95"
                                    To: "transform opacity-100 scale-100"
                                    Leaving: "transition ease-in duration-75"
                                    From: "transform opacity-100 scale-100"
                                    To: "transform opacity-0 scale-95"
                                --> */}
                                <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <div class="py-1" role="none">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">1</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">2</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">3</a>
                                    <form method="POST" action="#" role="none">
                                        <button type="submit" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                        Sign out
                                        </button>
                                    </form>
                                    </div>
                                </div>
                                </div>
                        </div>
                        </div>





                  </div>
                </div>
                </div>
                </div>
            </div>
        </div>


                <div class="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                  <div class="sm:flex-1">
                    <div>
                      <div class="flex items-center">
                        <h3 class="font-bold text-xl text-gray-900 sm:text-2xl">Subtotal</h3>

                      </div>
                      <p class="text-sm text-gray-500">Shipping to:</p>
                    </div>

                    <div class="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                      <button type="button" class="flex-shrink-0 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-400 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:flex-1">
                        Check out
                      </button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</div>

    )
}
