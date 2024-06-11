import { Avatar, Button, Flex, Image, useDisclosure } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import IDrawer from "../IDrawer/IDrawer";
import { ASSETS } from "../../assets";
import { PATH } from "../../routes";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { requestLogout } from "../../api/auth";

export default function IHeader() {
  const authState = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const pushToHome = () => {
    navigate(PATH.HOME);
    onClose();
  };
  const pushToLogin = () => {
    navigate(PATH.LOGIN);
    onClose();
  };
  const pushToCreateAccount = () => {
    navigate(PATH.CREATE_ACCOUNT);
    onClose();
  };
  const onLogout = async () => {
    await requestLogout();
    navigate("/");
    onClose();
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
        {authState.isAuthenticated && authState.username ? (
          <>
            <Avatar mr={2} size={"sm"} name={authState.username} />
            <IDrawer
              title="Menu"
              footer={
                <Button
                  width={"100%"}
                  marginBottom={"4"}
                  colorScheme={"red"}
                  onClick={onLogout}
                >
                  Logout
                </Button>
              }
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            >
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
                onClick={() => navigate(PATH.PROFILE)}
              >
                Profile
              </Button>
              <Button
                width={"100%"}
                marginBottom={"4"}
                onClick={() => navigate(PATH.POSTS)}
              >
                Posts
              </Button>

              <Button
                width={"100%"}
                marginBottom={"4"}
                onClick={() => navigate(PATH.RESET_PASSWORD)}
              >
                Reset Password
              </Button>
            </IDrawer>
          </>
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
      </Flex>
    </Flex>
  );
}
