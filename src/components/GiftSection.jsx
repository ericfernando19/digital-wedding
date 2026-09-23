import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, Wallet, CreditCard, Smartphone } from 'lucide-react'
import weddingData from '../data/weddingData'
import { OrnDivider } from './ornaments'

function BankCard({ bank }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bank.accountNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = bank.accountNumber
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <motion.div
      className="bg-cream-50 rounded-2xl p-5 shadow-sm border border-bronze-300/60"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
          <CreditCard className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="font-sans text-xs text-taupe-300">{bank.name}</p>
          <p className="font-sans text-sm font-medium text-taupe-800">{bank.accountName}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-cream-100 rounded-xl px-4 py-3">
        <span className="font-mono text-lg tracking-wider text-taupe-800 flex-1 select-all">
          {bank.accountNumber}
        </span>
        <motion.button
          onClick={handleCopy}
          className={`p-2 rounded-lg transition-all ${
            copied
              ? 'bg-sage-100 text-sage-500'
              : 'bg-dusty-pink-100 text-dusty-pink-400 hover:bg-dusty-pink-200'
          }`}
          whileTap={{ scale: 0.9 }}
          aria-label="Salin nomor rekening"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Check className="w-4 h-4" />
              </motion.div>
            ) : (
              <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Copy className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.p
            className="mt-2 font-sans text-xs text-sage-500 text-center"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            Nomor rekening berhasil disalin!
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function EWalletCard({ ewallet }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ewallet.phoneNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      const textArea = document.createElement('textarea')
      textArea.value = ewallet.phoneNumber
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const colors = {
    GoPay: 'from-green-500 to-green-600',
    DANA: 'from-blue-500 to-blue-700',
    OVO: 'from-purple-500 to-purple-600',
    'ShopeePay': 'from-orange-500 to-red-500',
  }

  return (
    <motion.div
      className="bg-cream-50 rounded-2xl p-5 shadow-sm border border-bronze-300/60"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors[ewallet.name] || 'from-gray-500 to-gray-600'} flex items-center justify-center flex-shrink-0`}>
          <Smartphone className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="font-sans text-xs text-taupe-300">{ewallet.name}</p>
          <p className="font-sans text-sm font-medium text-taupe-800">{ewallet.accountName}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-cream-100 rounded-xl px-4 py-3">
        <span className="font-mono text-lg tracking-wider text-taupe-800 flex-1 select-all">
          {ewallet.phoneNumber}
        </span>
        <motion.button
          onClick={handleCopy}
          className={`p-2 rounded-lg transition-all ${
            copied
              ? 'bg-sage-100 text-sage-500'
              : 'bg-dusty-pink-100 text-dusty-pink-400 hover:bg-dusty-pink-200'
          }`}
          whileTap={{ scale: 0.9 }}
          aria-label="Salin nomor"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Check className="w-4 h-4" />
              </motion.div>
            ) : (
              <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Copy className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.p
            className="mt-2 font-sans text-xs text-sage-500 text-center"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            Nomor berhasil disalin!
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function GiftSection() {
  const { gift } = weddingData

  return (
    <section id="gift" className="py-20 md:py-28 bg-gradient-to-b from-ivory via-beige-50 to-ivory">
      <div className="max-w-lg mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-xs tracking-[0.3em] text-bronze-500 uppercase mb-3">
            Hadiah
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-taupe-800 mb-4">
            {gift.title}
          </h2>
          <OrnDivider className="mb-4" />
          <p className="font-sans text-sm text-taupe-400 max-w-xs mx-auto leading-relaxed">
            {gift.subtitle}
          </p>
        </motion.div>

        {gift.banks && gift.banks.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Wallet className="w-4 h-4 text-dusty-pink-300" />
              <p className="font-sans text-sm font-medium text-taupe-600">Transfer Bank</p>
            </div>
            <div className="space-y-3">
              {gift.banks.map((bank, index) => (
                <BankCard key={index} bank={bank} />
              ))}
            </div>
          </div>
        )}

        {gift.ewallet && gift.ewallet.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-4 h-4 text-dusty-pink-300" />
              <p className="font-sans text-sm font-medium text-taupe-600">E-Wallet</p>
            </div>
            <div className="space-y-3">
              {gift.ewallet.map((ewallet, index) => (
                <EWalletCard key={index} ewallet={ewallet} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
