import { motion } from 'framer-motion'
import weddingData from '../data/weddingData'
import { OrnatePhotoFrame, OrnDivider } from './ornaments'

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
      <div className="mb-7 flex justify-center">
        <OrnatePhotoFrame
          src={person.photo}
          alt={`Foto ${person.nickname}`}
          ratio="w-36 h-44 sm:w-44 sm:h-52"
        />
      </div>

      <p className="font-sans text-[10px] tracking-[0.3em] text-bronze-500 uppercase mb-2">
        {person.childOrder}
      </p>

      <h3 className="font-serif text-2xl sm:text-3xl text-taupe-800 mb-1.5">
        {person.fullName}
      </h3>

      <p className="font-sans text-sm text-taupe-400 max-w-xs leading-relaxed">
        Putra/Ibu {person.motherName.split(' ').slice(1).join(' ')} &amp; Bapak{' '}
        {person.fatherName.split(' ').slice(1).join(' ')}
      </p>

      <OrnDivider className="mt-5" />
    </motion.div>
  )
}

export default function CoupleSection() {
  return (
    <section id="couple" className="relative py-24 md:py-32 bg-gradient-to-b from-cream-200 via-ivory to-cream-100">
      <div className="max-w-lg mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-script text-bronze-500 text-3xl sm:text-4xl mb-5">
            Assalamualaikum Wr. Wb.
          </p>

          <p className="font-sans text-sm sm:text-[15px] text-taupe-500 max-w-sm mx-auto leading-relaxed mb-6">
            {weddingData.openingText}
          </p>

          <p className="font-sans text-xs tracking-[0.35em] text-bronze-500 uppercase mb-3">
            Insya Allah
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-taupe-800 mb-4">
            Kedua Mempelai
          </h2>

          <OrnDivider />
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
            <div className="w-14 h-14 rounded-full bg-cream-50 flex items-center justify-center shadow-md border border-bronze-300/70">
              <span className="font-script text-2xl text-bronze-500">&</span>
            </div>
          </motion.div>

          <PersonCard person={weddingData.bride} side="bride" />
        </div>
      </div>
    </section>
  )
}
