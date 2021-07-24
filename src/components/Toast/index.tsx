import { toast } from 'react-toastify'

import { StyledToast } from './styles'

export const showToast = (type: 'success' | 'warn' | 'error' | 'info', message: string) => {
  switch (type) {
    case 'success':
      toast.success(message)
      break
    case 'warn':
      toast.warn(message)
      break
    case 'error':
      toast.error(message)
      break
    default:
      toast.info(message)
  }
}

export function Toast() {
  return <StyledToast />
}
