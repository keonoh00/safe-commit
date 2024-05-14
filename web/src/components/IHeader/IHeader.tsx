import { Avatar, Button, Flex, Image } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import IDrawer from "../IDrawer/IDrawer";
import { ASSETS } from "../../assets";
import { PATH } from "../../routes";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { AuthState } from "../../store/authStore";

export default function IHeader() {
  const authStore = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const pushToHome = () => {
    navigate("/");
  };
  const pushToLogin = () => {
    navigate("/login");
  };
  const pushToCreateAccount = () => {
    navigate("/create-account");
  };

  return (
    <Flex
      paddingBlock={6}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderColor={"gray.200"}
    >
      <Image
        src={ASSETS.logo}
        alt="logo"
        aspectRatio={2 / 1}
        width={20}
        onClick={pushToHome}
      />

      <Flex alignItems={"center"}>
        {authStore.authState === AuthState.AUTHENTICATED &&
        authStore.username ? (
          <Avatar mr={2} size={"sm"} name={authStore.username} />
        ) : (
          <>
            <Button
              mr={2}
              size={"sm"}
              colorScheme={"messenger"}
              onClick={pushToCreateAccount}
            >
              Create Account
            </Button>
            <Button
              mr={2}
              size={"sm"}
              colorScheme={"messenger"}
              onClick={pushToLogin}
            >
              Login
            </Button>
          </>
        )}
        <IDrawer title="Menu">
          <Button
            width={"100%"}
            marginBottom={"4"}
            onClick={() => navigate(PATH.HOME)}
          >
            Home
          </Button>
          <Button
            width={"100%"}
            marginBottom={"4"}
            onClick={() => navigate(PATH.LOGIN)}
          >
            Login
          </Button>
          <Button
            width={"100%"}
            marginBottom={"4"}
            onClick={() => navigate(PATH.CREATE_ACCOUNT)}
          >
            Create Account
          </Button>
          <Button
            width={"100%"}
            marginBottom={"4"}
            onClick={() => navigate(PATH.RESET_PASSWORD)}
          >
            Reset Password
          </Button>
        </IDrawer>
      </Flex>
    </Flex>
  );
}
