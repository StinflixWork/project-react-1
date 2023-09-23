import styled from "styled-components";

export const Container = styled.div`
  max-width: 1230px;
  padding: 0 15px;
  height: 100%;
  margin: 0 auto;
`

export const ContainerFlexRow = styled(Container)`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.alignItems};
  gap: ${props => `${props.gap !== undefined ? props.gap : 0}px`}
`