export function ArchCrest({ className = '' }) {
  return (
    <svg viewBox="0 0 240 96" fill="none" className={`w-full ${className}`} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M120 6 C113 16 108 24 108 33 C108 42 113 50 120 58 C127 50 132 42 132 33 C132 24 127 16 120 6Z" />
        <path d="M108 40 C88 56 64 64 40 64 C26 64 14 60 6 52" />
        <path d="M112 52 C96 66 76 74 56 76 C44 77 32 75 22 70" />
        <path d="M132 40 C152 56 176 64 200 64 C214 64 226 60 234 52" />
        <path d="M128 52 C144 66 164 74 184 76 C196 77 208 75 218 70" />
        <path d="M62 64 C66 56 74 54 80 58" />
        <path d="M178 64 C174 56 166 54 160 58" />
        <path d="M92 72 C94 65 100 62 106 65" />
        <path d="M148 72 C146 65 140 62 134 65" />
        <path d="M6 52 C0 48 0 40 6 36 C10 33 14 34 15 38" />
        <path d="M234 52 C240 48 240 40 234 36 C230 33 226 34 225 38" />
      </g>
      <path
        d="M120 20 C116 26 114 30 114 34 C114 38 117 42 120 46 C123 42 126 38 126 34 C126 30 124 26 120 20Z"
        fill="currentColor"
        fillOpacity="0.35"
      />
      <circle cx="120" cy="66" r="2.6" fill="currentColor" />
      <circle cx="40" cy="64" r="1.8" fill="currentColor" />
      <circle cx="200" cy="64" r="1.8" fill="currentColor" />
      <circle cx="6" cy="52" r="1.5" fill="currentColor" />
      <circle cx="234" cy="52" r="1.5" fill="currentColor" />
    </svg>
  )
}

export function CornerFlourish({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`w-full ${className}`} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <path d="M46 4 C26 4 4 14 4 34" />
        <path d="M8 32 C8 20 14 12 26 9" />
        <path d="M14 30 C15 22 20 17 27 15 C22 20 18 25 17 32" />
        <path d="M30 4 C34 7 39 9 46 9" />
        <path d="M4 30 C7 35 9 40 9 46" />
        <path d="M22 20 C26 17 31 17 34 19" />
      </g>
      <circle cx="11" cy="11" r="1.6" fill="currentColor" />
      <circle cx="38" cy="7" r="1.3" fill="currentColor" />
      <circle cx="7" cy="38" r="1.3" fill="currentColor" />
    </svg>
  )
}

export function OrnateFrame({ tone = 'light' }) {
  const line = tone === 'dark' ? 'border-bronze-200/55' : 'border-bronze-500/50'
  const line2 = tone === 'dark' ? 'border-bronze-200/30' : 'border-bronze-500/25'
  const accent = tone === 'dark' ? 'text-bronze-200/90' : 'text-bronze-500'

  return (
    <div className="fixed inset-0 z-30 pointer-events-none" aria-hidden="true">
      <div className={`absolute inset-1 sm:inset-2 border ${line}`} />
      <div className={`absolute inset-[7px] sm:inset-[11px] border ${line2}`} />

      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-40 sm:w-56 ${accent}`}>
        <ArchCrest />
      </div>
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-40 sm:w-56 ${accent} rotate-180`}>
        <ArchCrest />
      </div>

      <div className={`absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 w-8 sm:w-11 ${accent}`}>
        <CornerFlourish />
      </div>
      <div className={`absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 w-8 sm:w-11 ${accent} rotate-90`}>
        <CornerFlourish />
      </div>
      <div className={`absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 w-8 sm:w-11 ${accent} rotate-180`}>
        <CornerFlourish />
      </div>
      <div className={`absolute bottom-1.5 left-1.5 sm:bottom-2.5 sm:left-2.5 w-8 sm:w-11 ${accent} -rotate-90`}>
        <CornerFlourish />
      </div>
    </div>
  )
}

export function OrnatePhotoFrame({
  src,
  alt,
  className = '',
  ratio = 'aspect-[4/5]',
  eager = false,
  crest = true,
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <div className="bg-gradient-to-b from-bronze-100 to-bronze-200 p-1.5 sm:p-2 shadow-[0_14px_35px_-10px_rgba(61,52,46,0.5)]">
        <div className="bg-cream-50 p-1">
          <div className={`relative overflow-hidden border border-bronze-400/60 ${ratio}`}>
            <img
              src={src}
              alt={alt}
              loading={eager ? 'eager' : 'lazy'}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute -top-2 -left-2 w-7 sm:w-9 text-bronze-500 pointer-events-none">
        <CornerFlourish />
      </div>
      <div className="absolute -top-2 -right-2 w-7 sm:w-9 text-bronze-500 rotate-90 pointer-events-none">
        <CornerFlourish />
      </div>
      <div className="absolute -bottom-2 -right-2 w-7 sm:w-9 text-bronze-500 rotate-180 pointer-events-none">
        <CornerFlourish />
      </div>
      <div className="absolute -bottom-2 -left-2 w-7 sm:w-9 text-bronze-500 -rotate-90 pointer-events-none">
        <CornerFlourish />
      </div>

      {crest && (
        <div className="absolute -top-[26px] left-1/2 -translate-x-1/2 w-16 sm:w-20 text-bronze-500 pointer-events-none">
          <ArchCrest />
        </div>
      )}
    </div>
  )
}

export function Pendopo({ className = '', opacity = 'opacity-100' }) {
  return (
    <svg viewBox="0 0 480 200" className={`w-full ${opacity} ${className}`} aria-hidden="true">
      <g fill="currentColor">
        <circle cx="240" cy="8" r="4" />
        <rect x="238.5" y="12" width="3" height="16" />
        <path d="M240 26 L212 56 L268 56 Z" />
        <path d="M240 50 L194 84 L286 84 Z" />
        <path d="M240 76 L158 118 L322 118 Z" />
        <path d="M158 118 Q144 120 136 132 L152 124 L162 120 Z" />
        <path d="M322 118 Q336 120 344 132 L328 124 L318 120 Z" />
        <rect x="152" y="120" width="176" height="7" />
        <rect x="164" y="127" width="6" height="50" />
        <rect x="206" y="127" width="6" height="50" />
        <rect x="268" y="127" width="6" height="50" />
        <rect x="310" y="127" width="6" height="50" />
        <rect x="230" y="132" width="4" height="45" fillOpacity="0.5" />
        <rect x="246" y="132" width="4" height="45" fillOpacity="0.5" />
        <rect x="140" y="177" width="200" height="7" />
        <rect x="150" y="184" width="180" height="6" fillOpacity="0.8" />
        <rect x="216" y="190" width="48" height="5" fillOpacity="0.6" />
      </g>
    </svg>
  )
}

export function BotanicalSpray({ className = '', flip = false }) {
  return (
    <svg
      viewBox="0 0 140 340"
      fill="none"
      className={`w-full ${flip ? '-scale-x-100' : ''} ${className}`}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.12">
        <path d="M70 340 C64 280 68 220 62 160 C56 100 64 50 70 8" />
        <path d="M64 290 C48 278 34 280 26 292 C40 300 56 300 64 290Z" />
        <path d="M66 258 C84 246 100 248 108 260 C94 268 78 268 66 258Z" />
        <path d="M62 222 C46 210 32 212 24 224 C38 232 54 232 62 222Z" />
        <path d="M64 186 C82 174 98 176 106 188 C92 196 76 196 64 186Z" />
        <path d="M60 150 C44 138 30 140 22 152 C36 160 52 160 60 150Z" />
        <path d="M62 114 C80 102 96 104 104 116 C90 124 74 124 62 114Z" />
        <path d="M60 78 C46 66 32 68 25 80 C38 88 52 88 60 78Z" />
        <path d="M64 46 C80 34 96 36 103 48 C89 56 75 56 64 46Z" />
        <path d="M66 22 C54 12 42 14 36 24 C47 31 59 31 66 22Z" />
        <circle cx="26" cy="292" r="2.5" />
        <circle cx="108" cy="260" r="2.5" />
        <circle cx="24" cy="224" r="2.5" />
        <circle cx="106" cy="188" r="2.5" />
        <circle cx="22" cy="152" r="2.5" />
        <circle cx="104" cy="116" r="2.5" />
        <circle cx="36" cy="24" r="2" />
        <circle cx="70" cy="8" r="3" />
      </g>
    </svg>
  )
}

export function OrnDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-bronze-400/80" />
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-bronze-500" fill="currentColor">
        <path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" />
      </svg>
      <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-bronze-400/80" />
    </div>
  )
}

export function ScriptHeading({ children, className = '' }) {
  return (
    <p className={`font-script text-bronze-500 leading-none ${className}`}>{children}</p>
  )
}
