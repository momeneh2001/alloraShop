"use client"
import React, { useState } from 'react'
import swal from "sweetalert";

function SendMessage() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")


  const sendTicket = async () => {
    const ticket ={ name, message, phone, email }
    if (!ticket.name || !ticket.message || !ticket.phone || !ticket.email) {
      swal({
        title: "Please fill in all fields",
        icon: "warning",
        buttons: ["OK"],
      });
      return;
    }
    try {
      const res = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticket),
      });

      if (res.status === 200) {
        swal({
          title: "Ticket sent successfully!",
          icon: "success",
          buttons: ["OK"],
        });
        setName("")
        setMessage("")
        setEmail("")
        setPhone("")
      } else {
        swal({
          title: "Error sending ticket",
          text: "Something went wrong",
          icon: "error",
          buttons: ["OK"],
        });
      }
    } catch (err) {
      console.error(err);
      swal({
        title: "Network error",
        text: "Please try again later.",
        icon: "error",
        buttons: ["OK"],
      });
    }
  };


  return (
    <div className="w-full sm:w-[600px] md:w-[750px] lg:w-[900px] shadow-2xl rounded-md mx-auto">
      <div className="py-8 sm:py-10 px-4 sm:px-8">
        <form>

          <div className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-6 items-center justify-between mb-8">
            <input
              className="bg-gray-200 h-12 sm:h-14 w-full sm:w-[48%] lg:w-[235px] p-4 rounded outline-none"
              placeholder="Your Name *"
              value={name}
              onChange={event => setName(event.target.value)}
              type="text"
            />
            <input
              className="bg-gray-200 h-12 sm:h-14 w-full sm:w-[48%] lg:w-[235px] p-4 rounded outline-none"
              placeholder="Your Email *"
              value={email}
              onChange={event => setEmail(event.target.value)}
              type="email"
            />
            <input
              className="bg-gray-200 h-12 sm:h-14 w-full sm:w-[48%] lg:w-[235px] p-4 rounded outline-none"
              placeholder="Your Phone *"
              value={phone}
              onChange={event => setPhone(event.target.value)}
              type="tel"
            />
          </div>
          <textarea
            className="resize-none w-full h-[180px] sm:h-[200px] md:h-[220px] bg-gray-200 p-4 rounded outline-none"
            placeholder="Your Message"
            value={message}
            onChange={event => setMessage(event.target.value)}
          ></textarea>
        </form>
        <div className="flex items-center justify-center sm:justify-end mt-6">
          <button onClick={sendTicket} className="py-4 px-10 sm:px-12 text-white bg-red-600 rounded-md hover:bg-red-700 transition w-full sm:w-auto">
            Place Order
          </button>
        </div>
      </div>
    </div>

  )
}

export default SendMessage
