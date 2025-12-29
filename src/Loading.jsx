import React from 'react'
import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center w-full relative overflow-hidden">
      
      {/* Background Glow for Glassy Feel */}
      <div className="absolute w-[400px] h-[400px] bg-lime-500/10 rounded-full blur-[120px] animate-pulse"></div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: 1 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative z-10"
      >
        <img 
          src="https://i.postimg.cc/Dw0hg6pd/logo5-removebg-preview.png" 
          alt="loading"
          // Size control: w-64 (256px) or w-80 (320px)
          className="w-64 md:w-80 h-auto drop-shadow-[0_0_30px_rgba(163,230,53,0.3)]" 
        />
      </motion.div>

      {/* Loading Text (Optional) */}
      <div className="absolute bottom-10">
        <p className="text-gray-500 font-mono text-[10px] tracking-[0.5em] uppercase animate-pulse">
          Crafting Experience...
        </p>
      </div>
    </div>
  )
}