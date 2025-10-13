import Image from 'next/image'
import React from 'react'

function MobileMenu() {
    return (
        <div className="fixed p-1 top-0 bottom-0 -left-64  w-64 min-h-screen bg-red-800 z-20 transition-all">
            {/* navbar header  */}
            <div className="flex items-center justify-between border-b-2 border-grymlo-100">
                <div className="flex p-2 text-grymlo-100 items-center">
                    <div className=" w-14 h-14 ">
                        <Image
                            alt='logo'
                            width={50}
                            height={50}
                            src='/images/SparkNest.jpg' />
                    </div>
                    <span className="w-32 text-grymlo-100 text-2xl font-bold border-l pl-1 text-white">SparkNest</span>
                </div>
                <div className="nav-close-btn">
                    <svg className="w-6 h-6 m-1 text-red-700 cursor-pointer">
                        <use href="#x-mark"></use>
                    </svg>
                </div>
            </div>
            {/* navbar menu bodey */}
            <nav className="p-4 mt-3">
                <div className="child:p-2  flex flex-col child:text-lime-950-100 child:inline-flex child:gap-2 child:items-center">
                    <a className="font-bold underline" href="./home.html">
                        <svg className="w-5 h-5">
                            <use href="#home"></use>
                        </svg>
                        Home
                    </a>
                    <a href="./product.html">
                        <svg className="w-5 h-5">
                            <use href="#shopping-bag"></use>
                        </svg>
                        product
                    </a>
                    {/* <div className="absolute w-24 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible space-y-4 text-zinc-700 bg-red-200 border-t-[3px] border-t-lime-800 tracking-normal text-base transition-all  p-6 rounded-xl child:inline-block child:transition-colors child-hover:text-rose-400">
                        <a href="#">ros</a>
                        <a href="#">davod</a>
                        <a href="#">narjes</a>
                        <a href="#">aftab</a>
                    </div>  */}

                    <a href="./contact.html">
                        <svg className="w-5 h-5">
                            <use href="#phone-arrow-up-right"></use>
                        </svg>
                        contact
                    </a>

                    <a href="./abouyUs.html">
                        <svg className="w-5 h-5">
                            <use href="#user-group"></use>
                        </svg>
                        About us
                    </a>

                </div>
            </nav>

            <div className="flex flex-col border-t-2 child:text-grymlo-100 border-grymlo-100 mt-3 p-4 child-hover:text-yell-100">
                {/* profile ling  */}
                <a id="barlink" className="inline-flex p-2 items-center gap-2" href="./singin-up.html">
                    <svg className="w-5 h-5">
                        <use id="baricon" href="#arrow-left-end-on-rectangle"></use>
                    </svg>
                    Login
                </a>
                {/* loin link  */}
                {/* <!-- <a className="inline-flex p-2 items-center gap-2" href="./singin-up.html">
                    <svg className="w-5 h-5">
                        <use href="#arrow-left-end-on-rectangle"></use>
                    </svg>
                    Profile

                </a> --> */}
                {/* <!-- cart link --> */}
                <a className="inline-flex p-2 items-center gap-2" href="./cart.html">
                    <svg className="w-5 h-5">
                        <use href="#shopping-cart"></use>
                    </svg>
                    Cart
                </a>

            </div>
        </div>
    )
}

export default MobileMenu
