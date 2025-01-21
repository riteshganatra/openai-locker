"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Rocket } from "lucide-react"

export default function Home() {
  const [email, setEmail] = useState("")
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const future = new Date("2023-12-31T23:59:59") // Set your launch date here
      const diff = future.getTime() - now.getTime()

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center p-4 overflow-hidden">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mb-8"
      >
        <Image src="/openai-coin-logo.png" alt="OpenAI Coin Logo" width={200} height={200} className="rounded-full" />
      </motion.div>

      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-4xl md:text-6xl font-bold text-white mb-4 text-center"
      >
        OpenAI Coin
      </motion.h1>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl md:text-4xl font-bold text-yellow-300 mb-8 text-center"
      >
        Coming Soon to the Moon! 🌙
      </motion.div>

      <div className="flex space-x-4 mb-8">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="text-3xl font-bold text-white">{value}</div>
            <div className="text-sm text-white">{unit}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mb-8 w-full max-w-md">
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email for updates"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-4 py-2 rounded-l-full focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 text-purple-800 px-6 py-2 rounded-r-full font-bold hover:bg-yellow-300 transition-colors"
          >
            Notify Me!
          </button>
        </div>
      </form>

      <div className="flex space-x-4 mb-8">
        <a href="#" className="text-white hover:text-yellow-300 transition-colors">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Rocket size={32} />
          </motion.div>
        </a>
      </div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="text-lg text-white text-center"
      >
        Much Intelligence! Very AI! To the Moon!
      </motion.div>
    </main>
  )
}

