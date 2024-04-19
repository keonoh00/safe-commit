import { RouteObject } from "react-router-dom";

import CreateAccountScreen from "../screens/CreateAccount";
import ResetPasswordScreen from "../screens/ResetPassword";
import ProfileScreen from "../screens/Profile";
import AnnouncementBoardScreen from "../screens/AnnouncementBoard";
import LoginScreen from "../screens/Login";
import HomeScreen from "../screens/Home";

export enum PATH {
  HOME = "/",
  CREATE_ACCOUNT = "create-account",
  LOGIN = "login",
  RESET_PASSWORD = "reset-password",
  PROFILE = "profile",
  BOARD = "board",
}

export const routes: RouteObject[] = [
  {
    path: PATH.HOME,
    element: <HomeScreen />,
  },
  {
    path: PATH.CREATE_ACCOUNT,
    element: <CreateAccountScreen />,
  },
  {
    path: PATH.LOGIN,
    element: <LoginScreen />,
  },
  {
    path: PATH.RESET_PASSWORD,
    element: <ResetPasswordScreen />,
  },
  {
    path: PATH.PROFILE,
    element: <ProfileScreen />,
  },
  {
    path: PATH.BOARD,
    element: <AnnouncementBoardScreen />,
  },
];
