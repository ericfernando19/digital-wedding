import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, AlertCircle, Loader2 } from 'lucide-react'
import { CornerFlourish, OrnDivider, Pendopo, WayangBackdrop } from './ornaments'

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

  const inputClass = (error) =>
    `w-full px-4 py-3 rounded-none border bg-cream-50 font-sans text-sm text-taupe-800 placeholder-taupe-300 focus:outline-none focus:ring-2 transition-all ${
      error
        ? 'border-red-300 focus:ring-red-200'
        : 'border-bronze-300/70 focus:ring-bronze-300 focus:border-bronze-400'
    }`

  return (
    <section id="rsvp" className="relative py-24 md:py-32 bg-gradient-to-b from-ivory via-cream-200 to-ivory overflow-hidden">
      <WayangBackdrop />
      <div className="relative z-10 max-w-lg mx-auto px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-44 sm:w-56 mx-auto text-bronze-500/70 mb-4">
            <Pendopo />
          </div>

          <p className="font-script text-bronze-500 text-3xl sm:text-4xl mb-3">
            Ucapan &amp; RSVP
          </p>

          <p className="font-sans text-xs tracking-[0.35em] text-bronze-500 uppercase mb-3">
            Konfirmasi
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl text-taupe-800 mb-4">
            Kehadiran Anda
          </h2>

          <OrnDivider className="mb-4" />

          <p className="font-sans text-sm text-taupe-400">
            Mohon konfirmasi kehadiran Anda
          </p>
        </motion.div>

        <motion.div
          className="relative bg-cream-50 p-6 sm:p-8 shadow-[0_18px_45px_-20px_rgba(61,52,46,0.4)] border border-bronze-300/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-2 -left-2 w-7 text-bronze-500"><CornerFlourish /></div>
          <div className="absolute -top-2 -right-2 w-7 text-bronze-500 rotate-90"><CornerFlourish /></div>
          <div className="absolute -bottom-2 -right-2 w-7 text-bronze-500 rotate-180"><CornerFlourish /></div>
          <div className="absolute -bottom-2 -left-2 w-7 text-bronze-500 -rotate-90"><CornerFlourish /></div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div className="w-16 h-16 rounded-full bg-bronze-100 border border-bronze-300 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-bronze-600" />
                </div>
                <h3 className="font-serif text-xl text-taupe-800 mb-2">
                  Terima Kasih!
                </h3>
                <p className="font-sans text-sm text-taupe-400">
                  Konfirmasi kehadiran Anda telah diterima.
                  <br />
                  <span className="text-xs text-taupe-300 mt-1 block">
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
                  <label htmlFor="rsvp-name" className="block font-sans text-sm text-taupe-600 mb-1.5">
                    Nama Lengkap <span className="text-bronze-500">*</span>
                  </label>
                  <input
                    id="rsvp-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap"
                    className={inputClass(errors.name)}
                  />
                  {errors.name && (
                    <p className="mt-1 font-sans text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-sans text-sm text-taupe-600 mb-1.5">
                    Konfirmasi Kehadiran <span className="text-bronze-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'hadir', label: 'Hadir' },
                      { value: 'tidak_hadir', label: 'Tidak Dapat Hadir' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`relative flex items-center justify-center p-3 rounded-full border cursor-pointer transition-all ${
                          formData.attendance === option.value
                            ? 'bg-taupe-700 border-taupe-700 shadow-sm'
                            : 'bg-cream-50 border-bronze-300/70 hover:border-bronze-400'
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
                        <span
                          className={`font-sans text-sm ${
                            formData.attendance === option.value
                              ? 'text-cream-100 font-medium'
                              : 'text-taupe-600'
                          }`}
                        >
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
                    <label htmlFor="guest-count" className="block font-sans text-sm text-taupe-600 mb-1.5">
                      Jumlah Tamu yang Hadir
                    </label>
                    <select
                      id="guest-count"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className={inputClass(false)}
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
                  <label htmlFor="rsvp-message" className="block font-sans text-sm text-taupe-600 mb-1.5">
                    Ucapan &amp; Doa <span className="text-taupe-300">(Opsional)</span>
                  </label>
                  <textarea
                    id="rsvp-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis ucapan atau doa untuk kedua mempelai..."
                    rows={3}
                    className={`${inputClass(false)} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 rounded-full bg-taupe-700 text-cream-100 font-sans text-sm font-medium shadow-lg hover:shadow-xl hover:bg-taupe-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-bronze-400 focus:ring-offset-2 focus:ring-offset-cream-50"
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

                <p className="text-center font-sans text-xs text-taupe-300">
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
