import { motion } from 'framer-motion'
import weddingData from '../data/weddingData'
import { OrnDivider, CornerFlourish, ArchCrest, BotanicalSpray } from './ornaments'

export default function Footer() {
  return (
    <footer className="relative py-24 md:py-32 bg-gradient-to-b from-beige-50 via-ivory to-cream-300 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-48 sm:h-60 text-bronze-200/30 pointer-events-none">
        <BotanicalSpray />
      </div>
      <div className="absolute bottom-0 right-0 w-24 sm:w-32 h-48 sm:h-60 text-bronze-200/30 pointer-events-none">
        <BotanicalSpray flip />
      </div>

      <div className="max-w-lg mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-24 text-bronze-500 mx-auto mb-8">
            <ArchCrest />
          </div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="font-sans text-xs tracking-[0.35em] text-bronze-500 uppercase mb-4">
              Terima Kasih
            </p>

            <h2 className="font-serif text-xl sm:text-2xl text-taupe-800 mb-6 leading-relaxed">
              {weddingData.closingText}
            </h2>

            <div className="relative max-w-sm mx-auto px-5 py-4 bg-cream-50/70 border border-bronze-300/60">
              <div className="absolute -top-2 -left-2 w-6 text-bronze-500"><CornerFlourish /></div>
              <div className="absolute -top-2 -right-2 w-6 text-bronze-500 rotate-90"><CornerFlourish /></div>
              <div className="absolute -bottom-2 -right-2 w-6 text-bronze-500 rotate-180"><CornerFlourish /></div>
              <div className="absolute -bottom-2 -left-2 w-6 text-bronze-500 -rotate-90"><CornerFlourish /></div>
              <p className="font-serif text-sm sm:text-base text-taupe-600 italic leading-relaxed">
                &ldquo;{weddingData.closingPrayer}&rdquo;
              </p>
            </div>
          </motion.div>

          <OrnDivider className="mb-8" />

          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="font-serif text-3xl sm:text-4xl text-taupe-800 mb-2">
              {weddingData.groom.nickname}
              <span className="font-script text-bronze-500 mx-2 text-2xl sm:text-3xl">&amp;</span>
              {weddingData.bride.nickname}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-sans text-xs text-taupe-400">
              {weddingData.groomSignature}
            </p>
            <p className="font-sans text-xs text-taupe-400">
              {weddingData.brideSignature}
            </p>
          </motion.div>

          <motion.div
            className="pt-8 border-t border-bronze-300/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="font-sans text-xs text-taupe-500 mb-2">
              Wassalamu&rsquo;alaikum Warahmatullahi Wabarakatuh
            </p>
            <p className="font-sans text-xs text-taupe-300">
              &copy; {new Date().getFullYear()} Undangan Digital
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
