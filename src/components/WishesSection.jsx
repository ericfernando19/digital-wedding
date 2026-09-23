import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MessageCircle, Loader2, AlertCircle } from 'lucide-react'
import { OrnDivider, WayangBackdrop } from './ornaments'

function WishCard({ wish, index }) {
  return (
    <motion.div
      className="bg-cream-50 rounded-2xl p-5 shadow-sm border border-bronze-300/60"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dusty-pink-200 to-dusty-pink-100 flex items-center justify-center flex-shrink-0">
          <span className="font-serif text-sm text-dusty-pink-500 font-semibold">
            {wish.name.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-sans text-sm font-medium text-taupe-800 truncate">
              {wish.name}
            </h4>
            {wish.time && (
              <span className="font-sans text-xs text-taupe-300 flex-shrink-0">
                {wish.time}
              </span>
            )}
          </div>
          <p className="font-sans text-sm text-taupe-500 leading-relaxed">
            {wish.message}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function WishesSection() {
  const [wishes, setWishes] = useState([
    {
      id: 1,
      name: 'Budi Santoso',
      message: 'Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, wa rahmah. Barakallahu lakuma wa baraka alaikuma.',
      time: '2 jam lalu',
    },
    {
      id: 2,
      name: 'Rina Wati',
      message: 'Bahagia selalu untuk kalian berdua! Semoga selalu diberi kelancaran dan keberkahan dalam menjalani bahtera rumah tangga.',
      time: '5 jam lalu',
    },
  ])

  const [formData, setFormData] = useState({ name: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Nama wajib diisi'
    if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newWish = {
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      time: 'Baru saja',
    }

    setWishes((prev) => [newWish, ...prev])
    setFormData({ name: '', message: '' })
    setStatus('idle')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="wishes" className="relative py-20 md:py-28 bg-gradient-to-b from-ivory to-beige-50 overflow-hidden">
      <WayangBackdrop />
      <div className="relative z-10 max-w-lg mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-xs tracking-[0.3em] text-bronze-500 uppercase mb-3">
            Ucapan &amp; Doa
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-taupe-800 mb-4">
            Kirim Ucapan
          </h2>
          <OrnDivider />
        </motion.div>

        <motion.div
          className="bg-cream-50 rounded-3xl p-6 md:p-8 shadow-lg border border-bronze-300/60 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="wish-name" className="block font-sans text-sm text-taupe-600 mb-1.5">
                Nama <span className="text-dusty-pink-300">*</span>
              </label>
              <input
                id="wish-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama Anda"
                className={`w-full px-4 py-3 rounded-xl border bg-cream-50/60 font-sans text-sm text-taupe-800 placeholder-taupe-300 focus:outline-none focus:ring-2 transition-all ${
                  errors.name
                    ? 'border-red-300 focus:ring-red-200'
                    : 'border-bronze-300/70 focus:ring-bronze-300 focus:border-bronze-400'
                }`}
              />
              {errors.name && (
                <p className="mt-1 font-sans text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="wish-message" className="block font-sans text-sm text-taupe-600 mb-1.5">
                Ucapan & Doa <span className="text-dusty-pink-300">*</span>
              </label>
              <textarea
                id="wish-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tulis ucapan dan doa untuk kedua mempelai..."
                rows={4}
                className={`w-full px-4 py-3 rounded-xl border bg-cream-50/60 font-sans text-sm text-taupe-800 placeholder-taupe-300 focus:outline-none focus:ring-2 transition-all resize-none ${
                  errors.message
                    ? 'border-red-300 focus:ring-red-200'
                    : 'border-bronze-300/70 focus:ring-bronze-300 focus:border-bronze-400'
                }`}
              />
              {errors.message && (
                <p className="mt-1 font-sans text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.message}
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3.5 rounded-full bg-taupe-700 text-cream-100 font-sans text-sm font-medium shadow-lg hover:shadow-xl hover:bg-taupe-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-bronze-400 focus:ring-offset-2 flex items-center justify-center gap-2"
              whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
              whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Mengirim...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Kirim Ucapan
                </>
              )}
            </motion.button>

            <p className="text-center font-sans text-xs text-taupe-300">
              Ucapan tersimpan sementara di browser ini
            </p>
          </form>
        </motion.div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="w-4 h-4 text-dusty-pink-300" />
            <span className="font-sans text-sm text-taupe-500">
              {wishes.length} Ucapan
            </span>
          </div>

          <AnimatePresence>
            {wishes.map((wish, index) => (
              <WishCard key={wish.id} wish={wish} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
