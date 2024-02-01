import styled from "styled-components"

const FormSection = styled.section`
  margin-bottom: 0.5rem;
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

const FormCardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2.125rem;
  color: #FFEBD9;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  div:first-child {
    width: 100%;
  }

  div:last-child {
    width: 40%;
  }
`

const FormDate = styled.div`
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
  FormSection,
  FormLabel,
  FormInput,
  FormCardInfo,
  FormDate,
  FormAddress,
  FormTotalActions,
  FormTotalButton,
}