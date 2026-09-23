import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import weddingData from '../data/weddingData'

const FloralDivider = () => (
  <svg viewBox="0 0 200 60" className="w-32 md:w-40 opacity-40 mx-auto" aria-hidden="true">
    <g fill="none" stroke="#9CAF88" strokeWidth="0.8">
      <path d="M100,50 Q70,30 40,35 Q60,15 80,10 Q60,0 100,5 Q140,0 120,10 Q140,15 160,35 Q130,30 100,50Z" />
      <circle cx="100" cy="25" r="2" fill="#D4A5A5" opacity="0.5" />
      <circle cx="85" cy="20" r="1.5" fill="#D4A5A5" opacity="0.3" />
      <circle cx="115" cy="20" r="1.5" fill="#D4A5A5" opacity="0.3" />
    </g>
  </svg>
)

export default function Footer() {
  return (
    <footer className="py-20 md:py-28 bg-gradient-to-b from-beige-50 via-dusty-pink-50 to-beige-100">
      <div className="max-w-lg mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FloralDivider />

          <motion.div
            className="my-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="font-sans text-xs tracking-[0.3em] text-dusty-pink-400 uppercase mb-4">
              Terima Kasih
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-6 leading-relaxed">
              {weddingData.closingText}
            </h2>

            <div className="max-w-sm mx-auto p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-dusty-pink-100 mb-8">
              <p className="font-serif text-sm md:text-base text-gray-600 italic leading-relaxed">
                "{weddingData.closingPrayer}"
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="font-serif text-3xl md:text-4xl text-gray-800 mb-2">
              {weddingData.groom.nickname}
              <span className="font-script text-dusty-pink-300 mx-3 text-2xl md:text-3xl">&</span>
              {weddingData.bride.nickname}
            </p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-sans text-xs text-gray-400">
              {weddingData.groomSignature}
            </p>
            <Heart className="w-3 h-3 text-dusty-pink-300 fill-dusty-pink-300" />
            <p className="font-sans text-xs text-gray-400">
              {weddingData.brideSignature}
            </p>
          </motion.div>

          <motion.div
            className="pt-8 border-t border-dusty-pink-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="font-sans text-xs text-gray-400 mb-2">
              Wassalamu'alaikum Warahmatullahi Wabarakatuh
            </p>
            <p className="font-sans text-xs text-gray-300">
              &copy; {new Date().getFullYear()} Undangan Digital
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
