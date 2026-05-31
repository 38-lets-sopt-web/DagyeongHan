import { useState } from "react";

export default function useSignUpStep() {
  const [step, setStep] = useState(1);
  const isLastStep = step === 3;
  const buttonText = isLastStep ? "회원가입" : "다음";

  const moveToNextStep = () => {
    if (isLastStep) {
      return;
    }

    setStep((prevStep) => prevStep + 1);
  };

  return {
    step,
    isLastStep,
    buttonText,
    moveToNextStep,
  };
}
