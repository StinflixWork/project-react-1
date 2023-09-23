import styled from "styled-components";

export const FormOrderStyled = styled.div`
  padding: 25px 15px 50px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.bgSecondary};
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  font-family: ${props => props.theme.fonts.poppins};
  
  h2 {
    color: ${props => props.theme.colors.textPrimary};
    font-size: 24px;
    text-transform: capitalize;
    text-align: center;
  }
`
export const FormStyled = styled.form`
  flex: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 40px;
  margin-top: 25px;
`

export const FormInputsStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`

export const FormInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  label {
    color: ${props => props.theme.colors.textPrimary};
  }

  input {
    outline: none;
    padding: 0 10px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    width: 100%;
  }

  span {
    color: #ee3737;
    font-size: 12px;
  }
`

export const FormPriceStyled = styled.div`
  
  span {
    color: ${props => props.theme.colors.textPrimary};
  }

  button {
    padding: 10px 25px;
    background-color: #1E2423;
    color: ${props => props.theme.colors.textPrimary};
    border-radius: 10px;
    transition: background-color .3s ease-out;
    margin-left: 20px;

    &:hover {
      background-color: #2c3331;
    }
  }
`
