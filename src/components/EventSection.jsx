import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, ExternalLink, Heart } from 'lucide-react'
import weddingData from '../data/weddingData'

export default function EventSection() {
  const event = weddingData.event.resepsi

  return (
    <section id="event" className="py-20 md:py-28 bg-gradient-to-b from-beige-50 via-ivory to-beige-50">
      <div className="max-w-lg mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-xs tracking-[0.3em] text-dusty-pink-400 uppercase mb-3">
            Waktu & Tempat
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
            Informasi Acara
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-dusty-pink-200" />
            <Heart className="w-4 h-4 text-dusty-pink-300" />
            <div className="w-12 h-px bg-dusty-pink-200" />
          </div>
        </motion.div>

        <motion.div
          className="relative bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-beige-200 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-dusty-pink-300 to-dusty-pink-200" />

          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-sans tracking-wide mb-4 bg-dusty-pink-50 text-dusty-pink-400">
              <Calendar className="w-3.5 h-3.5" />
              Resepsi
            </div>

            <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
              {event.venue}
            </h3>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-beige-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Calendar className="w-4 h-4 text-gray-500" />
              </div>
              <div>
                <p className="font-sans text-sm text-gray-800 font-medium">{event.day}</p>
                <p className="font-sans text-sm text-gray-500">{event.date}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-beige-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-4 h-4 text-gray-500" />
              </div>
              <div>
                <p className="font-sans text-sm text-gray-800 font-medium">
                  {event.startTime} — {event.endTime} WIB
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-beige-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-gray-500" />
              </div>
              <div>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">
                  {event.address}
                </p>
              </div>
            </div>
          </div>

          <motion.a
            href={event.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans text-sm text-white shadow-md hover:shadow-lg transition-all bg-dusty-pink-300 hover:bg-dusty-pink-400"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MapPin className="w-4 h-4" />
            Lihat Lokasi
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
