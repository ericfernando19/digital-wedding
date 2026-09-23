import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import weddingData from '../data/weddingData'
import { useGuestName } from '../hooks/useGuestName'

export default function HeroSection() {
  const guestName = useGuestName()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-beige-50 via-ivory to-dusty-pink-50" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-dusty-pink-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-sage-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gold-100 rounded-full blur-2xl opacity-20" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-lg mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <img
              src={weddingData.couplePhoto}
              alt={`Foto ${weddingData.groom.nickname} & ${weddingData.bride.nickname}`}
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-2xl mx-auto"
              loading="eager"
            />
            <motion.div
              className="absolute -bottom-2 -right-2 w-12 h-12 bg-dusty-pink-300 rounded-full flex items-center justify-center shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart className="w-5 h-5 text-white fill-white" />
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          className="font-sans text-xs md:text-sm tracking-[0.3em] text-dusty-pink-400 uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          The Wedding Of
        </motion.p>

        <motion.h2
          className="font-serif text-4xl md:text-6xl text-gray-800 mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {weddingData.groom.nickname}
          <span className="font-script text-dusty-pink-300 mx-3 text-3xl md:text-5xl">&</span>
          {weddingData.bride.nickname}
        </motion.h2>

        <motion.p
          className="font-sans text-sm md:text-base text-gray-500 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {weddingData.event.resepsi.date}
        </motion.p>

        {guestName && (
          <motion.div
            className="mb-6 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-dusty-pink-100"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <p className="font-sans text-xs text-gray-400 mb-1">Kepada Yth.</p>
            <p className="font-sans text-sm md:text-base text-gray-700 font-medium">
              Bapak/Ibu/Saudara/i {guestName}
            </p>
          </motion.div>
        )}

        <motion.div
          className="max-w-sm mx-auto p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-beige-200 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="font-serif text-sm md:text-base text-gray-600 italic leading-relaxed">
            "{weddingData.quote}"
          </p>
          <p className="font-sans text-xs text-dusty-pink-400 mt-2">
            — {weddingData.quoteSource}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
