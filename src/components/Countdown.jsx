import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import weddingData from '../data/weddingData'
import { OrnDivider, CornerFlourish, WayangBackdrop } from './ornaments'

function CountdownUnit({ value, label }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] bg-cream-50 border border-bronze-400/60 shadow-[0_6px_18px_-8px_rgba(61,52,46,0.4)] flex flex-col items-center justify-center">
        <span className="font-serif text-2xl sm:text-[28px] text-taupe-800 font-semibold leading-none">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="font-sans text-[11px] text-taupe-400 uppercase tracking-[0.2em] mt-2">
        {label}
      </span>
    </motion.div>
  )
}

export default function Countdown({ timeLeft }) {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-cream-100 to-cream-200 overflow-hidden">
      <WayangBackdrop />
      <div className="relative z-10 max-w-lg mx-auto px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-xs tracking-[0.35em] text-bronze-500 uppercase mb-3">
            Hitung Mundur
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-taupe-800 mb-3">
            Menuju Hari Bahagia
          </h2>
          <p className="font-sans text-sm text-taupe-400 max-w-xs mx-auto">
            Kami akan menikah, dan kami ingin Anda menjadi bagian dari hari istimewa kami
          </p>
        </motion.div>

        {timeLeft.isExpired ? (
          <motion.div
            className="relative text-center p-8 bg-cream-50 border border-bronze-400/60"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-2 -left-2 w-7 text-bronze-500"><CornerFlourish /></div>
            <div className="absolute -top-2 -right-2 w-7 text-bronze-500 rotate-90"><CornerFlourish /></div>
            <div className="absolute -bottom-2 -right-2 w-7 text-bronze-500 rotate-180"><CornerFlourish /></div>
            <div className="absolute -bottom-2 -left-2 w-7 text-bronze-500 -rotate-90"><CornerFlourish /></div>
            <div className="w-14 h-14 rounded-full bg-bronze-100 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-bronze-500" />
            </div>
            <p className="font-serif text-xl text-taupe-800 mb-2">
              Acara Sedang Berlangsung
            </p>
            <p className="font-sans text-sm text-taupe-400">
              Semoga acara pernikahan berjalan dengan lancar
            </p>
          </motion.div>
        ) : (
          <>
            <div className="flex justify-center gap-3 sm:gap-5">
              <CountdownUnit value={timeLeft.days} label="Hari" />
              <CountdownUnit value={timeLeft.hours} label="Jam" />
              <CountdownUnit value={timeLeft.minutes} label="Menit" />
              <CountdownUnit value={timeLeft.seconds} label="Detik" />
            </div>

            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="font-serif text-lg sm:text-xl text-taupe-700 mb-4">
                {weddingData.event.resepsi.day}, {weddingData.event.resepsi.date}
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-taupe-700 text-cream-100 font-sans text-xs tracking-[0.2em] uppercase shadow-lg">
                <Calendar className="w-3.5 h-3.5" />
                Save The Date
              </div>
            </motion.div>
          </>
        )}

        <OrnDivider className="mt-14" />
      </div>
    </section>
  )
}
