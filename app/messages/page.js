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
                <div className="max-w-2xl mx"
            )