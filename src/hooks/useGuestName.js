import { useState, useEffect } from 'react'
import { getGuestName } from '../utils/helpers'

export function useGuestName() {
  const [guestName, setGuestName] = useState('')

  useEffect(() => {
    setGuestName(getGuestName())
  }, [])

  return guestName
}
