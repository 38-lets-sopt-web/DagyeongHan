import { useNavigate } from "react-router";

export default function useLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    alert("로그아웃되었습니다.");
    navigate("/login");
  };

  return { handleLogout };
}
