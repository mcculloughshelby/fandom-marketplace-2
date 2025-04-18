// 'use client'
// import { useEffect, useState } from "react"
// import axios from "axios";

export default function Home(){
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to FanTrove!</h1>
      <p className="text-lg mb-8 bg-">Your one-stop solution for all your fan engagement needs.</p>
      <a href="/chatbot" className="bg-blue-500 text-white px-4 py-2 rounded">Chat with our AI</a>
    </div>
  )
}