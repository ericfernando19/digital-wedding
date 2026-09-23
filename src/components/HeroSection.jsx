import { motion } from 'framer-motion'
import weddingData from '../data/weddingData'
import { useGuestName } from '../hooks/useGuestName'
import { OrnatePhotoFrame, OrnDivider, BotanicalSpray, Pendopo } from './ornaments'

export default function HeroSection() {
  const guestName = useGuestName()

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-ivory to-cream-200" />

      <div className="absolute top-16 left-0 w-16 sm:w-24 h-56 sm:h-72 text-bronze-400/25 pointer-events-none">
        <BotanicalSpray />
      </div>
      <div className="absolute top-16 right-0 w-16 sm:w-24 h-56 sm:h-72 text-bronze-400/25 pointer-events-none">
        <BotanicalSpray flip />
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] max-w-xs sm:max-w-sm text-bronze-500/20 pointer-events-none">
        <Pendopo />
      </div>

      <div className="relative z-10 text-center px-8 max-w-md mx-auto pt-24 pb-60 sm:pb-72">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <OrnatePhotoFrame
            src={weddingData.couplePhoto}
            alt={`Foto ${weddingData.groom.nickname} & ${weddingData.bride.nickname}`}
            ratio="w-44 h-52 sm:w-52 sm:h-60"
            eager
          />
        </motion.div>

        <motion.p
          className="font-sans text-[10px] sm:text-xs tracking-[0.4em] text-bronze-500 uppercase mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          The Wedding Of
        </motion.p>

        <motion.h2
          className="font-serif text-4xl sm:text-5xl text-taupe-800 mb-3 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {weddingData.groom.nickname}
          <span className="font-script text-bronze-500 mx-2 text-3xl sm:text-4xl">&</span>
          {weddingData.bride.nickname}
        </motion.h2>

        <motion.p
          className="font-sans text-sm sm:text-base text-taupe-500 mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {weddingData.event.resepsi.day}, {weddingData.event.resepsi.date}
        </motion.p>

        <OrnDivider className="mb-6" />

        {guestName && (
          <motion.div
            className="mb-6 px-5 py-3.5 bg-cream-50/80 backdrop-blur-sm border border-bronze-300/60"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <p className="font-sans text-[10px] tracking-widest text-bronze-500 uppercase mb-1">
              Kepada Yth.
            </p>
            <p className="font-sans text-sm sm:text-base text-taupe-700 font-medium">
              Bapak/Ibu/Saudara/i {guestName}
            </p>
          </motion.div>
        )}

        <motion.div
          className="max-w-sm mx-auto px-5 py-4 bg-cream-50/70 backdrop-blur-sm border border-bronze-300/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="font-serif text-sm sm:text-[15px] text-taupe-600 italic leading-relaxed">
            &ldquo;{weddingData.quote}&rdquo;
          </p>
          <p className="font-sans text-xs text-bronze-500 mt-2">
            &mdash; {weddingData.quoteSource}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
