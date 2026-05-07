/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router";
import Id from "@/components/signup/Id";
import Pw from "@/components/signup/Pw";
import UserInfo from "@/components/signup/UserInfo";
import Button from "@/components/Button";
import useSignUpForm from "@/hooks/useSignUpForm";

export default function SignUp() {
  const {
    step,
    id,
    password,
    passwordConfirm,
    name,
    email,
    age,
    part,
    isSubmitting,
    isCurrentStepValid,
    isLastStep,
    buttonText,
    idErrorMessage,
    passwordErrorMessage,
    passwordConfirmErrorMessage,
    nameErrorMessage,
    emailErrorMessage,
    ageErrorMessage,
    setId,
    setPassword,
    setPasswordConfirm,
    setName,
    setEmail,
    setAge,
    setPart,
    handleNextStep,
    handleSignUp,
  } = useSignUpForm();

  const handleSignUpClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    void handleSignUp(event.currentTarget.href);
  };

  return (
    <main css={rootContainerStyle}>
      <h2 css={titleStyle}>회원가입</h2>

      <form css={layoutStyle} onSubmit={(event) => event.preventDefault()}>
        {step === 1 && (
          <Id
            id={id}
            errorMessage={idErrorMessage}
            onIdChange={setId}
          />
        )}
        {step === 2 && (
          <Pw
            password={password}
            passwordConfirm={passwordConfirm}
            passwordErrorMessage={passwordErrorMessage}
            passwordConfirmErrorMessage={passwordConfirmErrorMessage}
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
            nameErrorMessage={nameErrorMessage}
            emailErrorMessage={emailErrorMessage}
            ageErrorMessage={ageErrorMessage}
            onNameChange={setName}
            onEmailChange={setEmail}
            onAgeChange={setAge}
            onPartChange={setPart}
          />
        )}
      </form>

      <section css={btnWrapStyle}>
        {isLastStep ? (
          <Link to="/login" css={btnStyle} onClick={handleSignUpClick}>
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
      </section>
    </main>
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
