import { useState, useCallback, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import InvitationCover from './components/InvitationCover'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CoupleSection from './components/CoupleSection'
import Countdown from './components/Countdown'
import EventSection from './components/EventSection'
import GallerySection from './components/GallerySection'
import MusicPlayer from './components/MusicPlayer'
import RSVPSection from './components/RSVPSection'
import GiftSection from './components/GiftSection'
import WishesSection from './components/WishesSection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { useCountdown } from './hooks/useCountdown'
import weddingData from './data/weddingData'

export default function App() {
  const [isCoverOpen, setIsCoverOpen] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const audioRef = useRef(null)
  const timeLeft = useCountdown(weddingData.event.date)

  const handleOpenInvitation = useCallback(() => {
    setIsCoverOpen(true)
    // Start music after user interaction (required by browser autoplay policy)
    setTimeout(() => {
      setIsMusicPlaying(true)
    }, 600)
  }, [])

  const handleToggleMusic = useCallback(() => {
    setIsMusicPlaying((prev) => !prev)
  }, [])

  // Prevent body scroll when cover is open
  useEffect(() => {
    if (!isCoverOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isCoverOpen])

  return (
    <div className="min-h-screen bg-ivory">
      {/* Audio element always in DOM so it can preload */}
      <audio ref={audioRef} src={weddingData.music.src} loop preload="auto" />

      <AnimatePresence>
        {!isCoverOpen && (
          <InvitationCover onOpen={handleOpenInvitation} />
        )}
      </AnimatePresence>

      {isCoverOpen && (
        <div className="animate-fade-in">
          <Navbar />
          <main>
            <HeroSection />
            <CoupleSection />
            <Countdown timeLeft={timeLeft} />
            <EventSection />
            <GallerySection />
            <RSVPSection />
            <GiftSection />
            <WishesSection />
          </main>
          <Footer />
          <MusicPlayer
            isPlaying={isMusicPlaying}
            onToggle={handleToggleMusic}
            audioRef={audioRef}
          />
          <ScrollToTop />
        </div>
      )}
    </div>
  )
}
