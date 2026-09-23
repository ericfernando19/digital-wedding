import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Check, AlertCircle, Loader2 } from 'lucide-react'

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    guestCount: '1',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Nama wajib diisi'
    if (!formData.attendance) newErrors.attendance = 'Konfirmasi kehadiran wajib dipilih'
    if (formData.attendance === 'hadir' && (!formData.guestCount || parseInt(formData.guestCount) < 1)) {
      newErrors.guestCount = 'Jumlah tamu minimal 1'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setStatus('success')
    setFormData({ name: '', attendance: '', guestCount: '1', message: '' })

    setTimeout(() => setStatus('idle'), 5000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="rsvp" className="py-20 md:py-28 bg-gradient-to-b from-ivory via-dusty-pink-50 to-ivory">
      <div className="max-w-lg mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-xs tracking-[0.3em] text-dusty-pink-400 uppercase mb-3">
            Konfirmasi
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
            RSVP
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-dusty-pink-200" />
            <Heart className="w-4 h-4 text-dusty-pink-300" />
            <div className="w-12 h-px bg-dusty-pink-200" />
          </div>
          <p className="font-sans text-sm text-gray-500">
            Mohon konfirmasi kehadiran Anda
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-beige-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-sage-400" />
                </div>
                <h3 className="font-serif text-xl text-gray-800 mb-2">
                  Terima Kasih!
                </h3>
                <p className="font-sans text-sm text-gray-500">
                  Konfirmasi kehadiran Anda telah diterima.
                  <br />
                  <span className="text-xs text-gray-400 mt-1 block">
                    (Data tersimpan sementara di browser)
                  </span>
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <label htmlFor="rsvp-name" className="block font-sans text-sm text-gray-700 mb-1.5">
                    Nama Lengkap <span className="text-dusty-pink-300">*</span>
                  </label>
                  <input
                    id="rsvp-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap"
                    className={`w-full px-4 py-3 rounded-xl border bg-beige-50/50 font-sans text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-300 focus:ring-red-200'
                        : 'border-beige-200 focus:ring-dusty-pink-200 focus:border-dusty-pink-300'
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
                  <label className="block font-sans text-sm text-gray-700 mb-1.5">
                    Konfirmasi Kehadiran <span className="text-dusty-pink-300">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'hadir', label: 'Hadir' },
                      { value: 'tidak_hadir', label: 'Tidak Dapat Hadir' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`relative flex items-center justify-center p-3 rounded-xl border cursor-pointer transition-all ${
                          formData.attendance === option.value
                            ? 'bg-dusty-pink-50 border-dusty-pink-300 shadow-sm'
                            : 'bg-beige-50/50 border-beige-200 hover:border-dusty-pink-200'
                        }`}
                      >
                        <input
                          type="radio"
                          name="attendance"
                          value={option.value}
                          checked={formData.attendance === option.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className={`font-sans text-sm ${
                          formData.attendance === option.value
                            ? 'text-dusty-pink-400 font-medium'
                            : 'text-gray-600'
                        }`}>
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.attendance && (
                    <p className="mt-1 font-sans text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.attendance}
                    </p>
                  )}
                </div>

                {formData.attendance === 'hadir' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <label htmlFor="guest-count" className="block font-sans text-sm text-gray-700 mb-1.5">
                      Jumlah Tamu yang Hadir
                    </label>
                    <select
                      id="guest-count"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-beige-50/50 font-sans text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-dusty-pink-200 focus:border-dusty-pink-300 transition-all"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num} Orang
                        </option>
                      ))}
                    </select>
                  </motion.div>
                )}

                <div>
                  <label htmlFor="rsvp-message" className="block font-sans text-sm text-gray-700 mb-1.5">
                    Ucapan & Doa <span className="text-gray-400">(Opsional)</span>
                  </label>
                  <textarea
                    id="rsvp-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis ucapan atau doa untuk kedua mempelai..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-beige-50/50 font-sans text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-dusty-pink-200 focus:border-dusty-pink-300 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 rounded-full bg-dusty-pink-300 text-white font-sans text-sm font-medium shadow-lg hover:shadow-xl hover:bg-dusty-pink-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-dusty-pink-300 focus:ring-offset-2"
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Mengirim...
                    </span>
                  ) : (
                    'Kirim Konfirmasi'
                  )}
                </motion.button>

                <p className="text-center font-sans text-xs text-gray-400">
                  Data hanya tersimpan sementara di browser ini
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
