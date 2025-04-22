'use client'
import { useState } from 'react'
import axios from 'axios'

export default function CreateListing() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user_id = 1 // Replace with logged-in user logic
    await axios.post('/api/posts', { title, price, image_url: imageUrl, user_id })
    alert('Listing created!')
    setTitle('')
    setPrice('')
    setImageUrl('')
  }

  return (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-2xl font-semibold text-[#26547C] mb-4">Create a New Listing</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Item Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit" className="bg-[#FF6B6B] text-white px-4 py-2 rounded hover:bg-[#EF476F]">
          Post Listing
        </button>
      </form>
    </div>
  )
}
