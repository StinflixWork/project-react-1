import styled from "styled-components";

const StyledButton = styled.button`
  padding: 15px 30px;
  border-radius: 25px;
  background: linear-gradient(96deg, #F6253E 0.58%, rgba(137, 7, 216, 0.71) 100%);

  color: ${props => props.theme.colors.textPrimary};
  font-family: ${props => props.theme.fonts.poppins};
  font-size: 1rem; // 16px
  line-height: 120%;
  text-transform: capitalize;
  transition: all .3s ease-out;

  &:hover {
    background-color: rgb(255, 0, 31);
  }
`

const Button = (props) =>
    <StyledButton {...props}>{props.children}</StyledButton>

export default Button;