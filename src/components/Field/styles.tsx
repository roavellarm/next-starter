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

export const EyeContainer = styled.div`
  margin-top: 20px;
  float: right;
  margin-left: 95%;
  position: absolute;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    margin-top: 20px;
    float: right;
    margin-left: 82%;
  }

  @media screen and (min-width: 500px) and (max-width: 560px) {
    margin-top: 20px;
    float: right;
    margin-left: 90%;
  }

  @media screen and (min-width: 560px) and (max-width: 850px) {
    margin-top: 20px;
    float: right;
    margin-left: 90%;
  }
`
