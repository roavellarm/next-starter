import styled from 'styled-components'

interface ColumnProps {
  center?: boolean
  right?: boolean
}

const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ center, right }) => {
    if (center) return 'center'
    if (right) return 'flex-end'
    return 'flex-start'
  }};

  padding: 2rem;
`

export default Column
