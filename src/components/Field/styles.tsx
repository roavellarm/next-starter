import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 1.8rem 0;
  flex-direction: column;
  justify-content: flex-start;
`

export const Label = styled.label`
  position: absolute;
  margin-left: 0.8rem;
  width: fit-content;
  font-size: small;
  color: gray;
`

export const Input = styled.input`
  width: 100%;
  margin: 0px;
  padding: ${({ value }) => (value !== '' ? '1.2rem 1rem 0.8rem 3rem' : '1rem')};
`

export const Error = styled.span`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 110%);
  color: ${({ theme }) => theme.palette.error};
`
