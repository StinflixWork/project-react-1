import styled from "styled-components";

export const WrapperStaff = styled.section`
  padding: 40px 0 100px;
`

export const StaffBody = styled.div`
  margin: 0 auto;
  max-width: 728px;
  text-align: center;
  h2 {
    margin-bottom: 10px;
  }
`

export const StaffCards = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 90px;
  gap: 100px;
  flex-wrap: wrap;
`

export const StaffCard = styled.div`
  width: 300px;
  position: relative;

  
  >img {
    position: absolute;
    top: -40px;
    left: -35px;
  }
  
  @media(width < 500px) {
    >img {
      display: none;
    }
  }
`

export const StaffCardImg = styled.div`
  margin-bottom: 20px;
  position: relative;
  z-index: 5;
`

export const StaffCardBody = styled.div`
  font-family: ${props => props.theme.fonts.poppins};
  text-align: center;
  
  h6 {
    color: ${props => props.theme.colors.textPrimary};
    font-size: 1.25rem; // 20px
    margin-bottom: 5px;
  }
  
  p {
    color: ${props => props.theme.colors.textSecondary};
    font-size: 0.875rem; // 14px
    font-weight: 300;
  }
`