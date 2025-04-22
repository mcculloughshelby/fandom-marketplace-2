'use client'

import {useEffect, useState} from 'react'
import axios from 'axios'

export default function AdminPanel(){
    const [users, setUsers] = useState([])  
    const [posts, setPosts] = useState([])
    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get('/api/users').then(res => setUsers(res.data))
        axios.get('/api/posts').then(res => setPosts(res.data))
        axios.get('/api/orders').then(res => setOrders(res.data))
    }, [])
    return (
        <div className="max-w-5xl mx-auto py-10">
            <h1 className="text-3xl text-[#26547C] mb-6">Admin Panel</h1>
            <table className='w-full border border-collapse text-sm bg-white shadow-md'>
                <thead>
                    <tr className='bg-[#26547C] text-white'>
                        <th className='border px-4 py-2'>User ID</th>
                        <th className='border px-4 py-2'>Username</th>
                        <th className='border px-4 py-2'>Email</th>
                        <th className='border px-4 py-2'>Role</th> 
                        </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} className='border-b hover:bg-gray-100'>
                            <td className='border px-4 py-2'>{user.id}</td>
                            <td className='border px-4 py-2'>{user.username}</td>
                            <td className='border px-4 py-2'>{user.email}</td>
                            <td className='border px-4 py-2'>{user.role}</td>
                        </tr>
                    ))}
                </tbody>    
            </table>
            <h2 className="text-2xl text-[#26547C] mt-10 mb-6">Posts</h2>
            <table className='w-full border border-collapse text-sm bg-white shadow-md'>
                <thead>
                    <tr className='bg-[#26547C] text-white'>
                        <th className='border px-4 py-2'>Post ID</th>
                        <th className='border px-4 py-2'>Title</th>
                        <th className='border px-4 py-2'>Price</th>
                        <th className='border px-4 py-2'>Image URL</th> 
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id} className='border-b hover:bg-gray-100'>
                            <td className='border px-4 py-2'>{post.id}</td>
                            <td className='border px-4 py-2'>{post.title}</td>
                            <td className='border px-4 py-2'>{post.price}</td>
                            <td className='border px-4 py-2'>{post.image_url}</td>
                        </tr>
                    ))}
                </tbody>
            </table>    
            <h2 className="text-2xl text-[#26547C] mt-10 mb-6">Orders</h2>
            <table className='w-full border border-collapse text-sm bg-white shadow-md'>
                <thead>
                    <tr className='bg-[#26547C] text-white'>
                        <th className='border px-4 py-2'>Order ID</th>
                        <th className='border px-4 py-2'>User ID</th>
                        <th className='border px-4 py-2'>Post ID</th>
                        <th className='border px-4 py-2'>Quantity</th> 
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id} className='border-b hover:bg-gray-100'>
                            <td className='border px-4 py-2'>{order.id}</td>
                            <td className='border px-4 py-2'>{order.user_id}</td>
                            <td className='border px-4 py-2'>{order.post_id}</td>
                            <td className='border px-4 py-2'>{order.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>    
        </div>
    )
}