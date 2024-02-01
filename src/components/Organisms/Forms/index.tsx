import type React from "react"
import { useState } from "react"

import {
  useAppDispatch,
  useAppSelector,
  selectStep,
  selectFormData,
} from "../../../app/hooks"
import { setStep, setFormData } from "../../../features/form/formSlice"

import Delivery from "../../Molecules/Delivery"
import Payment from "../../Molecules/Payment"
import Checkout from "../../Molecules/Checkout"

const MultiStepForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const step = useAppSelector(selectStep)
  const formData = useAppSelector(selectFormData)

  const [order, setOrder] = useState<string>("")

  const nextStep = () => {
    dispatch(setStep(step + 1))
  }

  const prevStep = () => {
    dispatch(setStep(step - 1))
  }

  const primaryStep = () => {
    dispatch(setStep(step - 2))
  }

  const handleChange = (data: any) => {
    dispatch(setFormData({ ...formData, ...data }))
  }

  const handleOrderComplete = (orderData: string) => {
    setOrder(orderData)
  }

  return (
    <>
      {step === 1 && (
        <Delivery nextStep={nextStep} handleChange={handleChange} />
      )}
      {step === 2 && (
        <Payment
          prevStep={prevStep}
          nextStep={nextStep}
          formData={formData}
          onOrderComplete={handleOrderComplete}
        />
      )}
      {step === 3 && <Checkout order={order} primaryStep={primaryStep} />}
    </>
  )
}

export default MultiStepForm
