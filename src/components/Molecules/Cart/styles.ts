import styled from "styled-components"

const AsideList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  AsideList,
  AsideTotal,
  AsideTotalHeader,
  AsideTotalButton,
}