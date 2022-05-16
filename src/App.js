/* eslint-disable jsx-a11y/anchor-is-valid */


function App() {






  return (
    <div className="App">
            <nav className="flex items-center justify-between px-5 bg-white py-3 border-b">
                <h1 className="text-2xl font-bold mb-10 cursor-pointer text-[#EC5252] duration-150">#My-Code</h1>
                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md space-x-3 w-96">
                    <input type="text" placeholder="search" className="bg-gray-100 outline-none w-full" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer text-gray-500" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <div className="flex items-center space-x-4">
                    <img className="w-3 rounded-full" src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg" alt="Elon Musk" />
                    <p className="hidden md:block">Elon Musk</p>
                </div>
            </nav>




            <nav class="bg-gray-800 flex justify-between lg:justify-start items-center">
            <div class="logo flex-initial p-2 w-1/6">
                <img src="img/logo.png" width="100" alt=""/>
            </div>
            <div class="links lg:block hidden w-1/6 md:w-4/6">
                <ul class="flex menu items-center justify-center gap-5">
                    <li><a href="#" class="link">Home</a></li>
                    <li><a href="#" class="link">Play Together</a></li>
                    <li><a href="#"class="link">Explore</a></li>
                    <li><a href="#"class="border-4 border-yellow-400 text-white font-bold p-2 rounded-full align-middle transition duration-500 hover:bg-white hover:text-black">Browser Fury</a></li>
                    <li><a href="#"class="rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:bg-white hover:text-black transition duration-500">Buy Now</a></li>
                </ul>
            </div>

            <div class="block lg:hidden w-1/6 lg:w-4/6">
                <a href="#" class="link" id="mobile-menu">Menu</a>

                <ul class="mobile-links hidden w-full absolute z-50 left-0 text-center bg-gray-800">
                    <li><a href="#" class="link">Home</a></li>
                    <li><a href="#" class="link">Play Together</a></li>
                    <li><a href="#"class="link">Explore</a></li>
                    <li><a href="#"class="my-4 inline-block border-4 border-yellow-400 text-white font-bold p-2 rounded-full align-middle transition duration-500 hover:bg-white hover:text-black">Browser Fury</a></li>
                    <li><a href="#"class="my-4 inline-block rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:bg-white hover:text-black transition duration-500">Buy Now</a></li>
                </ul>
            </div>
        </nav>

            
    </div>
  );
}

export default App;
