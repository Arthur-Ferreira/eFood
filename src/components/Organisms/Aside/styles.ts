import styled from "styled-components"

import close from "../../../public/close.svg"

const AsideOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
`

const AsideContainer = styled.aside`
  background-color: #E66767;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 2rem 0.5rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  
  @media(min-width: 48rem) {
    max-width: 22.5rem;
  }
`

const AsideList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const AsideClose = styled.button`
  background: url('${close}') transparent;
  border: none;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  height: 1rem;
  width: 1rem;
  cursor: pointer;
`

const AsideTotal = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const AsideTotalHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #FFEBD9;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const AsideTotalButton = styled.button`
  background-color: #FFEBD9;
  border: none;
  color: #E66767;
  cursor: pointer;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0.25rem 0;
`

export {
  AsideOverlay,
  AsideContainer,
  AsideList,
  AsideClose,
  AsideTotal,
  AsideTotalHeader,
  AsideTotalButton,
}