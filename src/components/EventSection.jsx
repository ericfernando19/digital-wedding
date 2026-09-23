import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react'
import weddingData from '../data/weddingData'
import { CornerFlourish, OrnDivider, ArchCrest } from './ornaments'

export default function EventSection() {
  const event = weddingData.event.resepsi

  return (
    <section id="event" className="relative py-24 md:py-32 bg-gradient-to-b from-cream-200 via-ivory to-cream-200">
      <div className="max-w-lg mx-auto px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-xs tracking-[0.35em] text-bronze-500 uppercase mb-3">
            Waktu &amp; Tempat
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-taupe-800 mb-4">
            Informasi Acara
          </h2>
          <OrnDivider />
        </motion.div>

        <motion.div
          className="relative bg-cream-50 p-7 sm:p-9 shadow-[0_18px_45px_-20px_rgba(61,52,46,0.4)] border border-bronze-300/60"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-2.5 -left-2.5 w-8 text-bronze-500"><CornerFlourish /></div>
          <div className="absolute -top-2.5 -right-2.5 w-8 text-bronze-500 rotate-90"><CornerFlourish /></div>
          <div className="absolute -bottom-2.5 -right-2.5 w-8 text-bronze-500 rotate-180"><CornerFlourish /></div>
          <div className="absolute -bottom-2.5 -left-2.5 w-8 text-bronze-500 -rotate-90"><CornerFlourish /></div>

          <div className="absolute -top-[26px] left-1/2 -translate-x-1/2 w-20 text-bronze-500 bg-ivory px-2 box-content">
            <ArchCrest />
          </div>

          <div className="text-center mb-7 pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-sans tracking-[0.2em] uppercase mb-4 bg-bronze-100 text-bronze-600 border border-bronze-300/70">
              <Calendar className="w-3.5 h-3.5" />
              Resepsi
            </div>

            <p className="font-script text-bronze-500 text-3xl sm:text-4xl mb-2">
              {event.day}
            </p>
            <h3 className="font-serif text-xl sm:text-2xl text-taupe-800 uppercase tracking-wide mb-1.5">
              {event.date}
            </h3>
            <p className="font-sans text-sm text-taupe-500">
              Pukul {event.startTime} &ndash; {event.endTime} WIB
            </p>
          </div>

          <OrnDivider className="mb-6" />

          <div className="text-center mb-7">
            <div className="inline-flex items-start gap-2.5 text-left">
              <MapPin className="w-4 h-4 text-bronze-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-serif text-base sm:text-lg text-taupe-800 mb-1">
                  {event.venue}
                </p>
                <p className="font-sans text-sm text-taupe-400 leading-relaxed">
                  {event.address}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-taupe-500 mb-7">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-bronze-500" />
              {event.day}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-bronze-500" />
              {event.startTime} &ndash; {event.endTime} WIB
            </span>
          </div>

          <div className="text-center">
            <motion.a
              href={event.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-sans text-sm text-cream-100 shadow-lg hover:shadow-xl transition-all bg-taupe-700 hover:bg-taupe-800"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MapPin className="w-4 h-4" />
              Lihat Maps
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
