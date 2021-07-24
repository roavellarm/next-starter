import { FadeLoader } from 'react-spinners'

import { css } from '@emotion/react'
import { useTheme } from 'styled-components'

const override = css`
  display: flex;
  margin: 0;
`

type LoaderProps = {
  loading: boolean
}

export function Loader({ loading }: LoaderProps) {
  const { palette } = useTheme()
  // className="sweet-loading"
  return (
    <FadeLoader
      css={override}
      height={10}
      width={15}
      radius={5}
      margin={10}
      color={palette.primary}
      loading={loading}
    />
  )
}
