import { ToastContainer } from 'react-toastify'

import styled from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

export const StyledToast = styled(ToastContainer)`
  .Toastify__toast--info {
    background: ${({ theme }) => theme.palette.info};
  }
  .Toastify__toast--success {
    background: ${({ theme }) => theme.palette.success};
  }
  .Toastify__toast--warning {
    background: ${({ theme }) => theme.palette.warning};
  }
  .Toastify__toast--error {
    background: ${({ theme }) => theme.palette.error};
  }
`
