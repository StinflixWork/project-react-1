import styled from "styled-components";

export const WrapperOrder = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const OrderHeader = styled.header`
  width: 100%;
  height: 80px;
`

export const OrderContent = styled.main`
  padding: 25px 0;
  flex: auto;
`

export const OrdersList = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 500px;
  overflow-y: auto;
`