import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Music, Volume2, VolumeX } from 'lucide-react'
import weddingData from '../data/weddingData'

export default function MusicPlayer({ isPlaying, onToggle, audioRef }) {
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5
    }
  }, [audioRef])

  useEffect(() => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.log('Autoplay blocked:', err.message)
      })
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, audioRef])

  const handleMuteToggle = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }, [isMuted, audioRef])

  return (
    <>
      <motion.div
        className="fixed bottom-20 right-4 z-40 flex items-center gap-2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        {isPlaying && (
          <motion.button
            onClick={handleMuteToggle}
            className="p-2.5 rounded-full bg-cream-50/90 backdrop-blur-sm shadow-lg border border-bronze-300 text-taupe-600 hover:text-bronze-600 transition-colors focus:outline-none focus:ring-2 focus:ring-bronze-300"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            aria-label={isMuted ? 'Aktifkan suara' : 'Matikan suara'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </motion.button>
        )}

        <motion.button
          onClick={onToggle}
          className={`p-3 rounded-full shadow-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-bronze-300 ${
            isPlaying
              ? 'bg-taupe-700 text-cream-100 border-taupe-700 hover:bg-taupe-800'
              : 'bg-cream-50/90 backdrop-blur-sm text-taupe-600 border-bronze-300 hover:text-bronze-600'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={isPlaying ? { rotate: [0, 5, -5, 0] } : {}}
          transition={isPlaying ? { repeat: Infinity, duration: 2 } : {}}
          aria-label={isPlaying ? 'Jeda musik' : 'Putar musik'}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </motion.button>
      </motion.div>

      {isPlaying && (
        <motion.div
          className="fixed bottom-20 left-4 z-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-cream-50/90 backdrop-blur-sm shadow-md border border-bronze-300">
            <Music className="w-3.5 h-3.5 text-bronze-500 animate-pulse" />
            <span className="font-sans text-xs text-taupe-600 max-w-[120px] truncate">
              {weddingData.music.title}
            </span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-0.5 bg-bronze-400 rounded-full"
                  animate={{ height: ['4px', '12px', '4px'] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
