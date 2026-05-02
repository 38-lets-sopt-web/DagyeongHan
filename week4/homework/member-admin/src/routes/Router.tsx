import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyPage from "../pages/MyPage";

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
  },
]);

export default router;
