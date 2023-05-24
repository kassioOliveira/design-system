import { useState } from 'react'
import { ToastContainer } from './styles'

import { X } from 'phosphor-react'

interface ToastProps {
  title: string
  description: string
  startClosed?: boolean
}

export function Toast({ title, description, startClosed = false }: ToastProps) {
  const [isOnpen, setIsOpen] = useState(startClosed)

  function close() {
    setIsOpen((state) => !state)
  }

  return (
    <ToastContainer style={{ display: !isOnpen ? 'flex' : 'none' }}>
      <X size={24} onClick={close} />
      <strong>{title}</strong>
      <span>{description}</span>
    </ToastContainer>
  )
}
