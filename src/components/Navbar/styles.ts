import styled from 'styled-components'

const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.palette.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`

export default Container
