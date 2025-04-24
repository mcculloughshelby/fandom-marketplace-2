'use client'

import {useEffect, useState} from 'react'
import Link from 'next/link'
import axios from 'axios'

export default function MessagePage() {
    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        axios.get('/api/messages')
            .then(response => {
                setMessages(response.data)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })

            return (
                <div className="max-w-2xl mx-auto py-10">
                    <h1 className="text-2xl font-bold mb-4">Your Messages!</h1>
                    <ul className="space-y-4">
                        {messages.map((message) => (
                            <li key={message.id} className="p-4 border rounded bg-[#FAF3E0] shadow-md">
                                <Link href={'messages/${message.id}'} className="text-[#3D405B] font-semibold">
                                Message with <strong>{message.sender}</strong>:
                                </Link>
                                </li>
                        ))}
                    </ul>
                </div>
    )}
)}