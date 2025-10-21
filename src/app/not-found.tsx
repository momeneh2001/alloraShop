import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Link from 'next/link'
import React from 'react'

function NotFound() {
    return (
        <>
            <Navbar isLogin={false} />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6">
                <h1 className="text-9xl font-bold text-gray-800 mb-4">404 Not Found</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Your visited page not found. You may go home page.
                </p>


                <Link className='bg-red-600 text-white py-4 px-12 rounded-md mt-11' href="/">Back to home page</Link>
            </div>
            <Footer />
        </>
    )
}

export default NotFound
