import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { postLoginAPI } from "@/api/auth";

export default function useLoginForm() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isLoginEnabled = Boolean(id.trim() && password.trim());

  const handleLogin = async () => {
    if (!isLoginEnabled || isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await postLoginAPI({
        loginId: id.trim(),
        password: password.trim(),
      });

      console.log("로그인 성공:", response);

      if (response.data) {
        localStorage.setItem("userId", String(response.data.userId));
      }

      navigate("/mypage");
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message ?? "로그인에 실패했습니다."
        : "로그인에 실패했습니다.";

      console.error("로그인 실패:", error);
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    id,
    password,
    isLoginEnabled,
    isSubmitting,
    setId,
    setPassword,
    handleLogin,
  };
}
