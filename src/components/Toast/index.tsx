import { toast } from 'react-toastify'

import { StyledToast } from './styles'

export const showSuccess = (message: string) => toast.success(message)
export const showWarn = (message: string) => toast.warn(message)
export const showError = (message: string) => toast.error(message)
export const showInfo = (message: string) => toast.info(message)

export function Toast() {
  return <StyledToast />
}
