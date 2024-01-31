import styled from "styled-components"


const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`

const FormLabel = styled.label`
  display: block;
  color: #FFEBD9;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0.5rem;
`

const FormInput = styled.input`
  display: block;
  width: 100%;
  color: #4B4B4B;
  background-color: #FFEBD9;
  border-color: #FFEBD9;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0.5rem;
  border-style: none;
`

const FormAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 2.125rem;
  color: #FFEBD9;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  div {
    width: 100%;
  }
`

const FormTotalActions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #FFEBD9;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 1.5rem;

  button:last-child {
    margin-top: 0.5rem;
  }
`

const FormTotalButton = styled.button`
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
  Form,
  FormLabel,
  FormInput,
  FormAddress,
  FormTotalActions,
  FormTotalButton,
}