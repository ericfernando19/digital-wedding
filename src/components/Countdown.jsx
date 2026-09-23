import { motion } from 'framer-motion'
import { Clock, Calendar, MapPin, ExternalLink } from 'lucide-react'
import weddingData from '../data/weddingData'

function CountdownUnit({ value, label }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-lg border border-beige-200 flex items-center justify-center mb-2">
        <span className="font-serif text-2xl md:text-3xl text-gray-800 font-semibold">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="font-sans text-xs text-gray-500 uppercase tracking-wider">{label}</span>
    </motion.div>
  )
}

export default function Countdown({ timeLeft }) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-ivory to-beige-50">
      <div className="max-w-lg mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-xs tracking-[0.3em] text-dusty-pink-400 uppercase mb-3">
            Hitung Mundur
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-gray-800">
            Menuju Hari Bahagia
          </h2>
        </motion.div>

        {timeLeft.isExpired ? (
          <motion.div
            className="text-center p-8 rounded-2xl bg-white shadow-lg border border-dusty-pink-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-dusty-pink-100 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-7 h-7 text-dusty-pink-400" />
            </div>
            <p className="font-serif text-xl text-gray-800 mb-2">
              Acara Sedang Berlangsung
            </p>
            <p className="font-sans text-sm text-gray-500">
              Semoga acara pernikahan berjalan dengan lancar
            </p>
          </motion.div>
        ) : (
          <div className="flex justify-center gap-4 md:gap-6">
            <CountdownUnit value={timeLeft.days} label="Hari" />
            <CountdownUnit value={timeLeft.hours} label="Jam" />
            <CountdownUnit value={timeLeft.minutes} label="Menit" />
            <CountdownUnit value={timeLeft.seconds} label="Detik" />
          </div>
        )}
      </div>
    </section>
  )
}
