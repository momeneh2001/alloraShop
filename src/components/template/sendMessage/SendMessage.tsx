import React from 'react'

function SendMessage() {
    return (
        <div className="w-full sm:w-[600px] md:w-[750px] lg:w-[900px] shadow-2xl rounded-md mx-auto">
        <div className="py-8 sm:py-10 px-4 sm:px-8">
          <form>
          
            <div className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-6 items-center justify-between mb-8">
              <input
                className="bg-gray-200 h-12 sm:h-14 w-full sm:w-[48%] lg:w-[235px] p-4 rounded outline-none"
                placeholder="Your Name *"
                type="text"
              />
              <input
                className="bg-gray-200 h-12 sm:h-14 w-full sm:w-[48%] lg:w-[235px] p-4 rounded outline-none"
                placeholder="Your Email *"
                type="email"
              />
              <input
                className="bg-gray-200 h-12 sm:h-14 w-full sm:w-[48%] lg:w-[235px] p-4 rounded outline-none"
                placeholder="Your Phone *"
                type="tel"
              />
            </div>
            <textarea
              className="resize-none w-full h-[180px] sm:h-[200px] md:h-[220px] bg-gray-200 p-4 rounded outline-none"
              placeholder="Your Message"
            ></textarea>
          </form>
          <div className="flex items-center justify-center sm:justify-end mt-6">
            <button className="py-4 px-10 sm:px-12 text-white bg-red-600 rounded-md hover:bg-red-700 transition w-full sm:w-auto">
              Place Order
            </button>
          </div>
        </div>
      </div>
      
    )
}

export default SendMessage
