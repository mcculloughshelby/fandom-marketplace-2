// 'use client'
// import { useEffect, useState } from "react"
// import axios from "axios";

'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="text-center py-10">
      <h1 className="text-4xl font-bold text-[#3D405B]">Welcome to FanTrove!</h1>
      <p className="mt-4 text-[#26547C] max-w-xl mx-auto">
        Buy and sell merch from your favorite movies and shows. Curated chaos, one listing at a time.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <Link href="/listings" className="bg-[#FF6B6B] text-white px-4 py-2 rounded hover:bg-[#EF476F]">Browse Listings</Link>
        <Link href="/createlisting" className="bg-[#A9D6E5] text-[#212121] px-4 py-2 rounded hover:bg-[#90C8AC]">Sell Something</Link>
      </div>
    </main>
  )
}