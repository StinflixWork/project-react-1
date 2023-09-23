import styled from "styled-components";

export const Tag = styled.div`
  padding: 10px 30px;
  border-radius: 5px;
  background-color: #E2112A;

  color: ${props => props.theme.colors.textPrimary};
  font-family: ${props => props.theme.fonts.poppins};
  font-size: 1rem; // 16px
  line-height: 140%;
`