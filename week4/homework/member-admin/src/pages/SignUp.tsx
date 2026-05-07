/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router";
import { useState } from "react";
import axios from "axios";
import Id from "@/components/signup/Id";
import Pw from "@/components/signup/Pw";
import UserInfo from "@/components/signup/UserInfo";
import Button from "@/components/Button";
import { postSignUpAPI } from "@/api/auth";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [part, setPart] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isIdOverMaxLength = id.trim().length > 20;
  const isIdStepValid = Boolean(id.trim()) && !isIdOverMaxLength;
  const isPasswordInvalidLength = Boolean(password.trim()) &&
    (password.trim().length < 8 || password.trim().length > 20);
  const isPasswordMismatch = Boolean(
    password.trim() &&
      passwordConfirm.trim() &&
      password !== passwordConfirm,
  );
  const isPwStepValid = Boolean(
    password.trim() &&
      passwordConfirm.trim() &&
      !isPasswordInvalidLength &&
      password === passwordConfirm,
  );
  const isUserInfoStepValid = Boolean(
    name.trim() &&
      email.trim() &&
      age.trim() &&
      !Number.isNaN(Number(age)) &&
      part.trim(),
  );
  const isCurrentStepValid =
    (step === 1 && isIdStepValid) ||
    (step === 2 && isPwStepValid) ||
    (step === 3 && isUserInfoStepValid);
  const isLastStep = step === 3;
  const buttonText = isLastStep ? "회원가입" : "다음";

  const handleNextStep = () => {
    if (!isCurrentStepValid || isLastStep) {
      return;
    }

    setStep((prevStep) => prevStep + 1);
  };

  const handleSignUp = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const loginPageHref = event.currentTarget.href;

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

      alert(`${name}님, ${response.message}`);
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

  return (
    <div css={rootContainerStyle}>
      <h2 css={titleStyle}>회원가입</h2>

      <div css={layoutStyle}>
        {step === 1 && (
          <Id
            id={id}
            errorMessage={isIdOverMaxLength ? "아이디는 20글자 이하로 입력해주세요." : ""}
            onIdChange={setId}
          />
        )}
        {step === 2 && (
          <Pw
            password={password}
            passwordConfirm={passwordConfirm}
            passwordErrorMessage={
              isPasswordInvalidLength ? "비밀번호는 8~20자 사이로 입력해주세요." : ""
            }
            passwordConfirmErrorMessage={
              isPasswordMismatch ? "비밀번호가 일치하지 않습니다." : ""
            }
            onPasswordChange={setPassword}
            onPasswordConfirmChange={setPasswordConfirm}
          />
        )}
        {step === 3 && (
          <UserInfo
            name={name}
            email={email}
            age={age}
            part={part}
            onNameChange={setName}
            onEmailChange={setEmail}
            onAgeChange={setAge}
            onPartChange={setPart}
          />
        )}
      </div>

      <label css={btnWrapStyle}>
        {isLastStep ? (
          <Link to="/login" css={btnStyle} onClick={handleSignUp}>
            <Button buttonText={buttonText} disabled={!isCurrentStepValid || isSubmitting} />
          </Link>
        ) : (
          <Button
            buttonText={buttonText}
            onClick={handleNextStep}
            disabled={!isCurrentStepValid}
          />
        )}
        <div css={routeWrapStyle}>
          <div css={messageStyle}>이미 계정이 있나요?</div>
          <Link to="/login" css={toLinkStyle}>
            로그인으로 돌아가기
          </Link>
        </div>
      </label>
    </div>
  );
}

const rootContainerStyle = css`
  width: min(30em, calc(100% - 2em));
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

const titleStyle = css`
  margin: 0;
`;

const layoutStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const btnWrapStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;

const btnStyle = css`
  width: 100%;
  text-decoration: none;
`;

const routeWrapStyle = css`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const messageStyle = css`
  text-decoration: none;
  color: #ccc;
  font-size: 0.75em;
  font-weight: 500;
`;

const toLinkStyle = css`
  text-decoration: none;
  color: #00ceff;
  font-size: 0.75em;
  font-weight: 500;
`;
