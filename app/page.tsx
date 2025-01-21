"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Rocket } from "lucide-react"
import { Copy } from "lucide-react"

export default function Home() {
  const [email, setEmail] = useState("")
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [message, setMessage] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const future = new Date("2025-01-23T23:59:59") // Set your launch date here
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

//const handleSubmit = (e: React.FormEvent) => {
//  e.preventDefault();
//  console.log("Email submitted:", email);
//  setEmail("");
//  setMessage("Thank you for signing up!");
//};
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  alert("Email submitted: " + email);
  setEmail("");
  setMessage("Thank you for signing up!");
};

  const [copied, setCopied] = useState(false)
  const tokenAddress = "So1ana70kenAddre55111111111111111111111111111"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
            <div className="text-3xl font-bold text-white">{value.toString()}</div>
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
  className="flex-grow px-4 py-2 rounded-l-full focus:outline-none text-black"
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
      {message && (
  <div className="text-white mt-2">
    {message}
  </div>
)}

      <div className="bg-white bg-opacity-20 rounded-lg p-4 mt-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-white mb-2">Solana Token Address</h2>
        <div className="flex items-center bg-white bg-opacity-30 rounded p-2">
          <code className="text-sm text-white flex-grow overflow-x-auto">{tokenAddress}</code>
          <button
            onClick={copyToClipboard}
            className="ml-2 p-1 rounded hover:bg-white hover:bg-opacity-20 transition-colors"
          >
            <Copy size={20} color="white" />
          </button>
        </div>
        {copied && <p className="text-sm text-white mt-1">Copied to clipboard!</p>}
      </div>
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

