import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Heart, ZoomIn } from 'lucide-react'
import weddingData from '../data/weddingData'

function GalleryImage({ image, index, onClick }) {
  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md border border-beige-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      onClick={() => onClick(index)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm">
          <ZoomIn className="w-3.5 h-3.5 text-gray-700" />
          <span className="font-sans text-xs text-gray-700">Lihat</span>
        </div>
      </div>
    </motion.div>
  )
}

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Tutup galeri"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-2 md:left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Foto sebelumnya"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <motion.div
        className="max-w-4xl max-h-[80vh] mx-4"
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
      </motion.div>

      <button
        onClick={onNext}
        className="absolute right-2 md:right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Foto berikutnya"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex ? 'bg-white w-6' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <p className="font-sans text-sm text-white/70">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </motion.div>
  )
}

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : weddingData.gallery.length - 1))
  const nextImage = () => setLightboxIndex((prev) => (prev < weddingData.gallery.length - 1 ? prev + 1 : 0))

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gradient-to-b from-beige-50 to-ivory">
      <div className="max-w-lg mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-xs tracking-[0.3em] text-dusty-pink-400 uppercase mb-3">
            Momen Bahagia
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
            Galeri Foto
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-dusty-pink-200" />
            <Heart className="w-4 h-4 text-dusty-pink-300" />
            <div className="w-12 h-px bg-dusty-pink-200" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {weddingData.gallery.map((image, index) => (
            <GalleryImage
              key={index}
              image={image}
              index={index}
              onClick={openLightbox}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={weddingData.gallery}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
