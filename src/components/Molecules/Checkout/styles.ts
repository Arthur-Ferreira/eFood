import styled from "styled-components"

const CheckoutDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0 1.5rem;
`

const CheckoutButton = styled.button`
  width: 100%;
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
  CheckoutDescription,
  CheckoutButton,
}