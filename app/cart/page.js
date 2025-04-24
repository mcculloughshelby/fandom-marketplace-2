'use client'

import { useEffect, useState } from 'react'
//import pool from '../lib/db'
import axios from 'axios'

export default function Cart(){
    const [items, setItems]=useState([]);

    useEffect(()=>{
        axios.get('/api/cart?user_id=1').then(res=> setItems(res.data))},[])

        return(
            <div className="max-w-2xl mx-auto mt-10"> 
            <h1 className="text-2xl font-bold mb-4">Your Shopping Cart!</h1>
            {items.length === 0 ? (
                <p className="text-[#3D405B]">Why is your cart empty?? Add some stuff!</p>
            ):(
                <ul className="space-y-4">
                    {items.map((item) => (
                        <li key={item.id} className="p=4 border rounded bg-[#F7F7F7] shadow-md">
                            <p>The item ID is: {item.post_id}</p>
                            </li>
                    ))}
                </ul>
            )}
            </div>
        )
    }