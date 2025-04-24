'use client'
import { useState } from 'react'

export default function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you’d actually send the data to your backend or an email API.
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="max-w-xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-[#26547C] mb-2">Contact Us</h1>
      <p className="text-lg text-[#3D405B] mb-8">
        Got a question, a bug report, or a fandom rant? We want to hear it.
      </p>
      {submitted ? (
        <div className="bg-[#A9D6E5] text-[#212121] rounded p-6 text-lg text-center">
          Thanks for reaching out! We will get back to you faster than a plot twist on The O.C.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 bg-[#FAF3E0] p-6 rounded shadow-md">
          <div>
            <label className="block mb-1 font-medium text-[#26547C]">Name</label>
            <input
              type="text"
              className="w-full border border-[#90C8AC] px-3 py-2 rounded"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-[#26547C]">Email</label>
            <input
              type="email"
              className="w-full border border-[#90C8AC] px-3 py-2 rounded"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-[#26547C]">Message</label>
            <textarea
              className="w-full border border-[#90C8AC] px-3 py-2 rounded min-h-[100px]"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#FF6B6B] hover:bg-[#EF476F] text-white px-6 py-2 rounded font-semibold"
          >
            Send Message
          </button>
        </form>
      )}
      <div className="mt-8 text-[#8D99AE] text-sm">
        Prefer email? Hit us up at <a href="mailto:fantrove@gmail.com" className="underline text-[#26547C]">fantrove@gmail.com</a> 
        
      </div>
    </div>
  )
}
//that email will be live once i get this done. 