interface UseSignUpValidationParams {
  step: number;
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  email: string;
  age: string;
  part: string;
}

export default function useSignUpValidation({
  step,
  id,
  password,
  passwordConfirm,
  name,
  email,
  age,
  part,
}: UseSignUpValidationParams) {
  const isIdOverMaxLength = id.trim().length > 20;
  const isIdStepValid = Boolean(id.trim()) && !isIdOverMaxLength;
  const hasPasswordRequiredCharacters =
    /[A-Za-z]/.test(password) &&
    /\d/.test(password) &&
    /[^A-Za-z0-9]/.test(password);
  const hasPasswordWhitespace = /\s/.test(password);
  const isPasswordInvalidLength = Boolean(password.trim()) &&
    (password.trim().length < 8 || password.trim().length > 20);
  const isPasswordInvalidCombination = Boolean(password.trim()) && !hasPasswordRequiredCharacters;
  const isPasswordMismatch = Boolean(
    password.trim() &&
      passwordConfirm.trim() &&
      !hasPasswordWhitespace &&
      !isPasswordInvalidLength &&
      !isPasswordInvalidCombination &&
      password !== passwordConfirm,
  );
  const passwordErrorMessage = isPasswordInvalidLength
    ? "비밀번호는 8~20자로 입력해주세요."
    : hasPasswordWhitespace
      ? "비밀번호에는 공백을 사용할 수 없습니다."
      : isPasswordInvalidCombination
        ? "비밀번호는 영어, 숫자, 특수문자를 각각 1자 이상 포함해야 합니다."
        : "";
  const isPwStepValid = Boolean(
    password.trim() &&
      passwordConfirm.trim() &&
      !hasPasswordWhitespace &&
      !isPasswordInvalidLength &&
      !isPasswordInvalidCombination &&
      password === passwordConfirm,
  );
  const isNameTooLong = name.trim().length >= 10;
  const isEmailInvalidFormat = Boolean(email.trim()) &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isAgeInvalidFormat = Boolean(age.trim()) && Number.isNaN(Number(age));
  const isUserInfoStepValid = Boolean(
    name.trim() &&
      email.trim() &&
      age.trim() &&
      part.trim() &&
      !isNameTooLong &&
      !isEmailInvalidFormat &&
      !isAgeInvalidFormat,
  );
  const isCurrentStepValid =
    (step === 1 && isIdStepValid) ||
    (step === 2 && isPwStepValid) ||
    (step === 3 && isUserInfoStepValid);

  return {
    isCurrentStepValid,
    idErrorMessage: isIdOverMaxLength ? "아이디는 20글자 이하로 입력해주세요." : "",
    passwordErrorMessage,
    passwordConfirmErrorMessage: isPasswordMismatch ? "비밀번호가 일치하지 않습니다." : "",
    nameErrorMessage: isNameTooLong ? "이름은 10자 미만으로 입력해주세요." : "",
    emailErrorMessage: isEmailInvalidFormat ? "올바른 이메일 형식으로 입력해주세요." : "",
    ageErrorMessage: isAgeInvalidFormat ? "나이는 숫자로 입력해주세요." : "",
  };
}
