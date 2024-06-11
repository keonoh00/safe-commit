import { RouteObject } from "react-router-dom";

import CreateAccountScreen from "../screens/CreateAccount";
import ResetPasswordScreen from "../screens/ResetPassword";
import ProfileScreen from "../screens/Profile";

import LoginScreen from "../screens/Login";
import HomeScreen from "../screens/Home";
import PostsScreen from "../screens/posts/Posts";
import CreatePostScreen from "../screens/posts/CreatePost";
import EditPostScreen from "../screens/posts/EditPost";
import PostDetailScreen from "../screens/posts/PostDetail";

export enum PATH {
  HOME = "/",
  CREATE_ACCOUNT = "/create-account",
  LOGIN = "/login",
  RESET_PASSWORD = "/reset-password",
  PROFILE = "/profile",
  POSTS = "/posts",
  CREATE_POST = "/create-post",
  EDIT_POST = "/edit-post",
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
    path: PATH.POSTS,
    element: <PostsScreen />,
  },
  {
    path: PATH.POSTS + "/:id",
    element: <PostDetailScreen />,
  },
  {
    path: PATH.CREATE_POST,
    element: <CreatePostScreen />,
  },
  {
    path: PATH.EDIT_POST,
    element: <EditPostScreen />,
  },
];
