import { Button, Flex, Image } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import IDrawer from "../IDrawer/IDrawer";
import { ASSETS } from "../../assets";
import { PATH } from "../../routes";

export default function IHeader() {
  const navigate = useNavigate();

  const pushToHome = () => {
    navigate("/");
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
  );
}
