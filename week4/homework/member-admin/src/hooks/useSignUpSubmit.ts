import { useState } from "react";
import axios from "axios";
import { postSignUpAPI } from "@/api/auth";

interface UseSignUpSubmitParams {
  id: string;
  password: string;
  name: string;
  email: string;
  age: string;
  part: string;
  isCurrentStepValid: boolean;
}

export default function useSignUpSubmit({
  id,
  password,
  name,
  email,
  age,
  part,
  isCurrentStepValid,
}: UseSignUpSubmitParams) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignUp = async (loginPageHref: string) => {
    if (!isCurrentStepValid || isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await postSignUpAPI({
        loginId: id.trim(),
        password: password.trim(),
        name: name.trim(),
        email: email.trim(),
        age: Number(age),
        part: part.trim(),
      });

      console.log("회원가입 성공:", response);

      alert(`${name}님 ${response.message}`);
      window.location.href = loginPageHref;
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message ?? "회원가입에 실패했습니다."
        : "회원가입에 실패했습니다.";

      console.error("회원가입 실패:", error);
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    handleSignUp,
  };
}
