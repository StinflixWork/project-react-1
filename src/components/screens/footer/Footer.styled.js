import styled from "styled-components";

export const WrapperFooter = styled.footer`
  height: 160px;
  background-color: #000;
  padding-top: 30px;
  padding-bottom: 50px;
  
  @media(width < 800px) {
    height: 100%;
  }
`

export const FooterBody = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 35px;
  flex-wrap: wrap;
`

export const FooterContent = styled.div`
  width: 300px;

  @media (width < 760px) {
    width: 100%;
    text-align: center;
  }
`

export const FooterCopyRight = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-family: ${props => props.theme.fonts.poppins};
  font-size: 0.75rem; // 12px
  line-height: 120%;
  margin-top: 10px;
`
export const FooterContacts = styled.address`
`
export const FooterContact = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  color: ${props => props.theme.colors.textPrimary};
  font-family: ${props => props.theme.fonts.poppins};
  font-size: 0.75rem; // 12px
  font-style: normal;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
  
  a:hover {
    text-decoration: underline;
  }

  img:hover {
    opacity: .7;
  }
`

export const FooterNavigation = styled.div`
  display: flex;
  gap: 100px;

  @media (width < 760px) {
    width: 100%;
    justify-content: space-around;
  }
  
  @media(width < 470px) {
    gap: 50px;
  }
  
  @media(width < 380px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FooterSocials = styled.div`
  p {
    color: ${props => props.theme.colors.textPrimary};
    font-family: ${props => props.theme.fonts.poppins};
    font-size: 0.875rem; // 14px
    font-weight: 500;
    line-height: 120%;
  }
`

export const SocialsLinks = styled.div`
  margin-top: 10px;
  display: flex;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
  transition: opacity .3s ease-out;
  
  img:hover {
    opacity: .7;
  }
`