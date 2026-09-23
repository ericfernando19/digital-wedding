import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { useGuestName } from '../hooks/useGuestName'
import weddingData from '../data/weddingData'
import { OrnateFrame, OrnatePhotoFrame, WayangBackdrop } from './ornaments'

export default function InvitationCover({ onOpen }) {
  const guestName = useGuestName()

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-taupe-600"
      exit={{ opacity: 0, scale: 1.08 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='none' stroke='%23EDE2CE' stroke-opacity='0.9' stroke-width='1'%3E%3Cpath d='M26 6 C20 22 15 38 17 54 C19 66 23 74 26 80 C29 74 33 66 35 54 C37 38 32 22 26 6Z'/%3E%3Cpath d='M26 18 C24 34 24 52 26 68'/%3E%3Cpath d='M76 44 C70 60 65 76 67 88 C69 94 73 98 76 100'/%3E%3Cpath d='M76 56 C74 68 74 80 76 92'/%3E%3C/g%3E%3Cg fill='%23EDE2CE' fill-opacity='0.9'%3E%3Ccircle cx='50' cy='28' r='1.6'/%3E%3Ccircle cx='12' cy='88' r='1.6'/%3E%3Ccircle cx='92' cy='18' r='1.6'/%3E%3Ccircle cx='50' cy='78' r='1.2'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      <WayangBackdrop tone="dark" />

      <OrnateFrame tone="dark" />

      <motion.div
        className="relative z-40 text-center px-8 max-w-sm mx-auto max-h-[100dvh] overflow-y-auto py-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-7 flex justify-center"
        >
          <OrnatePhotoFrame
            src={weddingData.couplePhoto}
            alt={`Foto ${weddingData.groom.nickname} & ${weddingData.bride.nickname}`}
            ratio="w-40 h-48 sm:w-44 sm:h-52"
            eager
          />
        </motion.div>

        <motion.p
          className="font-sans text-[10px] sm:text-xs tracking-[0.4em] text-bronze-200/90 uppercase mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          The Wedding Of
        </motion.p>

        <motion.h1
          className="font-serif text-3xl sm:text-4xl text-cream-100 mb-2 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {weddingData.groom.nickname}
          <span className="font-script text-bronze-200 mx-1.5 text-2xl sm:text-3xl">&</span>
          {weddingData.bride.nickname}
        </motion.h1>

        <motion.p
          className="font-sans text-xs sm:text-sm text-bronze-200/80 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {weddingData.event.resepsi.day}, {weddingData.event.resepsi.date}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mb-7 px-5 py-4 bg-cream-100/10 backdrop-blur-sm border border-bronze-200/40"
        >
          <p className="font-sans text-[10px] tracking-widest text-bronze-200/70 uppercase mb-1.5">
            Kepada Yth.
          </p>
          <p className="font-sans text-sm sm:text-base text-cream-50 font-medium">
            Bapak/Ibu/Saudara/i {guestName || ''}
          </p>
          {guestName && (
            <p className="font-sans text-[11px] text-bronze-200/70 mt-1">di Tempat</p>
          )}
        </motion.div>

        <motion.button
          onClick={onOpen}
          className="group inline-flex items-center gap-2.5 px-8 py-3 bg-cream-200 text-taupe-700 rounded-full font-sans text-sm font-medium tracking-wide shadow-[0_8px_25px_-6px_rgba(0,0,0,0.4)] hover:bg-cream-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-bronze-300 focus:ring-offset-2 focus:ring-offset-taupe-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Buka Undangan"
        >
          <BookOpen className="w-4 h-4" />
          <span>Buka Undangan</span>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
