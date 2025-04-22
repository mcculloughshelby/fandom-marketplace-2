'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Listings() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('/api/posts').then(res => setPosts(res.data))
  }, [])

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-3xl text-[#26547C] mb-6">All Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post.id} className="border rounded p-4 bg-[#FAF3E0]">
            <img src={post.image_url} alt={post.title} className="w-full h-40 object-cover mb-3 rounded" />
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-[#3D405B]">${post.price}</p>
            <button className="mt-2 bg-[#FF6B6B] text-white px-3 py-1 rounded hover:bg-[#EF476F]">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}
