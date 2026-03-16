"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {

  return (

    <section className="py-20 bg-[#f6f8fc]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-[#1e3a5f]">
            Contact Vidya Vridhi
          </h2>

          <p className="text-gray-600 mt-3">
            Get expert guidance for colleges, courses and career decisions.
          </p>

        </div>


        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Left Side Image */}

          <div>

            <img
              src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d"
              alt="contact"
              className="rounded-xl shadow-lg w-full object-cover"
            />

          </div>


          {/* Contact Form */}

          <div className="bg-white p-8 rounded-xl shadow-lg">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:border-[#1e3a5f] text-black"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:border-[#1e3a5f] text-black"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:border-[#1e3a5f] text-black"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:border-[#1e3a5f] text-black"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium transition"
              >
                Send Message
              </button>

            </form>


            {/* Contact Info Cards */}

            <div className="grid grid-cols-3 gap-4 mt-8">

              <div className="border rounded-lg p-4 text-center">

                <Mail className="mx-auto text-[#1e3a5f]" />

                <p className="text-sm text-gray-600 mt-2">
                  info@vidyavridhi.com
                </p>

              </div>


              <div className="border rounded-lg p-4 text-center">

                <Phone className="mx-auto text-[#1e3a5f]" />

                <p className="text-sm text-gray-600 mt-2">
                  +91 98765 43210
                </p>

              </div>


              <div className="border rounded-lg p-4 text-center">

                <MapPin className="mx-auto text-[#1e3a5f]" />

                <p className="text-sm text-gray-600 mt-2">
                  India
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}