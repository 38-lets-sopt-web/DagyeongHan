import useSignUpFields from "@/hooks/useSignUpFields";
import useSignUpStep from "@/hooks/useSignUpStep";
import useSignUpSubmit from "@/hooks/useSignUpSubmit";
import useSignUpValidation from "@/hooks/useSignUpValidation";

export default function useSignUpForm() {
  const fields = useSignUpFields();
  const step = useSignUpStep();
  const currentStepValidation = useSignUpValidation({
    step: step.step,
    id: fields.id,
    password: fields.password,
    passwordConfirm: fields.passwordConfirm,
    name: fields.name,
    email: fields.email,
    age: fields.age,
    part: fields.part,
  });
  const submit = useSignUpSubmit({
    id: fields.id,
    password: fields.password,
    name: fields.name,
    email: fields.email,
    age: fields.age,
    part: fields.part,
    isCurrentStepValid: currentStepValidation.isCurrentStepValid,
  });
  const handleNextStep = () => {
    if (!currentStepValidation.isCurrentStepValid) {
      return;
    }

    step.moveToNextStep();
  };

  return {
    ...fields,
    ...currentStepValidation,
    ...step,
    ...submit,
    handleNextStep,
  };
}
