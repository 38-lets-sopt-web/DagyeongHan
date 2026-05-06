import { createBrowserRouter, Navigate } from "react-router";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import MyPage from "@/pages/MyPage";
import CheckMembers from "@/components/mypage/CheckMembers";
import CheckMyInfo from "@/components/mypage/CheckMyInfo";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/mypage",
    Component: MyPage,
    children: [
      {
        index: true,
        element: <Navigate to="userinfo" replace />,
      },
      {
        path: "userinfo",
        Component: CheckMyInfo,
      },
      {
        path: "checkmembers",
        Component: CheckMembers,
      }
    ]
  },
]);

export default router;
