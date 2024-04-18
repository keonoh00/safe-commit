import { RouteObject } from "react-router-dom";
import App from "../App";
import CreateAccountScreen from "../screens/CreateAccount";
import ResetPasswordScreen from "../screens/ResetPassword";
import ProfileScreen from "../screens/Profile";
import AnnouncementBoardScreen from "../screens/AnnouncementBoard";
import LoginScreen from "../screens/Login";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "create-account",
    element: <CreateAccountScreen />,
  },
  {
    path: "login",
    element: <LoginScreen />,
  },
  {
    path: "reset-password",
    element: <ResetPasswordScreen />,
  },
  {
    path: "profile",
    element: <ProfileScreen />,
  },
  {
    path: "board",
    element: <AnnouncementBoardScreen />,
  },
];
