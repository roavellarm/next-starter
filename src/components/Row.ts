import styled from 'styled-components'

interface RowProps {
  center: boolean
  right: boolean
}

const Row = styled.div<RowProps>`
  display: flex;
  width: 100%;
  justify-content: ${({ center, right }) => {
    if (center) return 'center'
    if (right) return 'flex-end'
    return 'flex-start'
  }};
  align-items: center;
`

export default Row
