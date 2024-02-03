import styled from "styled-components"
import { Form } from "formik"
import { colors } from "../../Global/vars"


const FormSection = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`

const FormLabel = styled.label`
  display: block;
  color: ${colors.antiqueWhite};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0.5rem;
`

const FormInput = styled.input`
  display: block;
  width: 100%;
  color: ${colors.davysGray};
  background-color: ${colors.antiqueWhite};
  border-color: ${colors.antiqueWhite};
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
  color: ${colors.antiqueWhite};
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
  color: ${colors.antiqueWhite};
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
  background-color: ${colors.antiqueWhite};
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
  FormAddress,
  FormTotalActions,
  FormTotalButton,
}