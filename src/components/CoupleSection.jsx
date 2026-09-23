import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import weddingData from '../data/weddingData'

function PersonCard({ person, side }) {
  const isGroom = side === 'groom'

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, x: isGroom ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: isGroom ? 0 : 0.2 }}
    >
      <div className="relative mb-6">
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img
            src={person.photo}
            alt={`Foto ${person.nickname}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-dusty-pink-100 rounded-full flex items-center justify-center">
          <Heart className="w-3.5 h-3.5 text-dusty-pink-300" />
        </div>
      </div>

      <p className="font-sans text-xs tracking-[0.2em] text-dusty-pink-400 uppercase mb-2">
        {person.childOrder}
      </p>

      <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-1">
        {person.fullName}
      </h3>

      <p className="font-sans text-sm text-gray-500 mb-4">
        Putra/Ibu {person.motherName.split(' ').slice(1).join(' ')} & Bapak {person.fatherName.split(' ').slice(1).join(' ')}
      </p>

      <div className="flex items-center gap-2">
        <div className="w-8 h-px bg-dusty-pink-200" />
        <Heart className="w-3 h-3 text-dusty-pink-300 fill-dusty-pink-300" />
        <div className="w-8 h-px bg-dusty-pink-200" />
      </div>
    </motion.div>
  )
}

export default function CoupleSection() {
  return (
    <section id="couple" className="py-20 md:py-28 bg-gradient-to-b from-ivory via-beige-50 to-ivory">
      <div className="max-w-lg mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sans text-xs tracking-[0.3em] text-dusty-pink-400 uppercase mb-3">
            Insya Allah
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
            Kedua Mempelai
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-dusty-pink-200" />
            <Heart className="w-4 h-4 text-dusty-pink-300" />
            <div className="w-12 h-px bg-dusty-pink-200" />
          </div>
          <p className="font-sans text-sm text-gray-500 max-w-xs mx-auto">
            {weddingData.openingText}
          </p>
        </motion.div>

        <div className="space-y-16">
          <PersonCard person={weddingData.groom} side="groom" />

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <div className="w-16 h-16 rounded-full bg-dusty-pink-100 flex items-center justify-center shadow-lg border-4 border-white">
              <span className="font-script text-2xl text-dusty-pink-400">&</span>
            </div>
          </motion.div>

          <PersonCard person={weddingData.bride} side="bride" />
        </div>
      </div>
    </section>
  )
}
