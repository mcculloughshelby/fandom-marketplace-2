// 'use client'

// import {useEffect, useState} from 'react'
// import axios from 'axios'

// export default function AdminPanel(){
//     const [users, setUsers] = useState([])  
//     const [posts, setPosts] = useState([])
//     const [orders, setOrders] = useState([])

//     useEffect(() => {
//         axios.get('/api/users').then(res => setUsers(res.data))
//         axios.get('/api/posts').then(res => setPosts(res.data))
//         axios.get('/api/orders').then(res => setOrders(res.data))
//     }, [])
//     return (
//         <div className="max-w-5xl mx-auto py-10">
//             <h1 className="text-3xl text-[#26547C] mb-6">Admin Panel</h1>
//             <table className='w-full border border-collapse text-sm bg-white shadow-md'>
//                 <thead>
//                     <tr className='bg-[#26547C] text-white'>
//                         <th className='border px-4 py-2'>User ID</th>
//                         <th className='border px-4 py-2'>Username</th>
//                         <th className='border px-4 py-2'>Email</th>
//                         <th className='border px-4 py-2'>Role</th> 
//                         </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id} className='border-b hover:bg-gray-100'>
//                             <td className='border px-4 py-2'>{user.id}</td>
//                             <td className='border px-4 py-2'>{user.username}</td>
//                             <td className='border px-4 py-2'>{user.email}</td>
//                             <td className='border px-4 py-2'>{user.role}</td>
//                         </tr>
//                     ))}
//                 </tbody>    
//             </table>
//             <h2 className="text-2xl text-[#26547C] mt-10 mb-6">Posts</h2>
//             <table className='w-full border border-collapse text-sm bg-white shadow-md'>
//                 <thead>
//                     <tr className='bg-[#26547C] text-white'>
//                         <th className='border px-4 py-2'>Post ID</th>
//                         <th className='border px-4 py-2'>Title</th>
//                         <th className='border px-4 py-2'>Price</th>
//                         <th className='border px-4 py-2'>Image URL</th> 
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {posts.map(post => (
//                         <tr key={post.id} className='border-b hover:bg-gray-100'>
//                             <td className='border px-4 py-2'>{post.id}</td>
//                             <td className='border px-4 py-2'>{post.title}</td>
//                             <td className='border px-4 py-2'>{post.price}</td>
//                             <td className='border px-4 py-2'>{post.image_url}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>    
//             <h2 className="text-2xl text-[#26547C] mt-10 mb-6">Orders</h2>
//             <table className='w-full border border-collapse text-sm bg-white shadow-md'>
//                 <thead>
//                     <tr className='bg-[#26547C] text-white'>
//                         <th className='border px-4 py-2'>Order ID</th>
//                         <th className='border px-4 py-2'>User ID</th>
//                         <th className='border px-4 py-2'>Post ID</th>
//                         <th className='border px-4 py-2'>Quantity</th> 
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {orders.map(order => (
//                         <tr key={order.id} className='border-b hover:bg-gray-100'>
//                             <td className='border px-4 py-2'>{order.id}</td>
//                             <td className='border px-4 py-2'>{order.user_id}</td>
//                             <td className='border px-4 py-2'>{order.post_id}</td>
//                             <td className='border px-4 py-2'>{order.quantity}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>    
//         </div>
//     )
// }

import pool from "../lib/db";

export const dynamic = "force-dynamic"; // always fresh data

export default async function AdminPanel() {
  // Get all users
  const { rows: users } = await pool.query(
    "SELECT id, username, email FROM users ORDER BY id ASC"
  );
  // Get all posts
  const { rows: posts } = await pool.query(
    "SELECT id, title, price, description, image_url, user_id FROM posts ORDER BY id DESC"
  );

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-[#26547C]">Admin Panel</h1>
      
      {/* USERS TABLE */}
      <h2 className="text-2xl font-semibold mb-4 text-[#3D405B]">All Users</h2>
      <table className="w-full mb-12 border shadow">
        <thead className="bg-[#FFE9C6] text-[#26547C]">
          <tr>
            <th className="py-2 px-2 text-left">ID</th>
            <th className="py-2 px-2 text-left">Username</th>
            <th className="py-2 px-2 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan={3} className="text-center py-4 text-[#8D99AE]">No users found.</td>
            </tr>
          )}
          {users.map(user => (
            <tr key={user.id} className="border-b">
              <td className="py-1 px-2">{user.id}</td>
              <td className="py-1 px-2">{user.username}</td>
              <td className="py-1 px-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* POSTS TABLE */}
      <h2 className="text-2xl font-semibold mb-4 text-[#3D405B]">All Posts</h2>
      <table className="w-full border shadow">
        <thead className="bg-[#FFE9C6] text-[#26547C]">
          <tr>
            <th className="py-2 px-2 text-left">ID</th>
            <th className="py-2 px-2 text-left">Title</th>
            <th className="py-2 px-2 text-left">Price</th>
            <th className="py-2 px-2 text-left">Description</th>
            <th className="py-2 px-2 text-left">Image</th>
            <th className="py-2 px-2 text-left">User ID</th>
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center py-4 text-[#8D99AE]">No posts found.</td>
            </tr>
          )}
          {posts.map(post => (
            <tr key={post.id} className="border-b">
              <td className="py-1 px-2">{post.id}</td>
              <td className="py-1 px-2">{post.title}</td>
              <td className="py-1 px-2">${Number(post.price).toFixed(2)}</td>
              <td className="py-1 px-2">{post.description}</td>
              <td className="py-1 px-2">
                {post.image_url ? (
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-20 h-16 object-cover rounded"
                  />
                ) : (
                  <span className="text-[#8D99AE]">No image</span>
                )}
              </td>
              <td className="py-1 px-2">{post.user_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
//


