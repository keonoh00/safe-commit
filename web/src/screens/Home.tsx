import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../routes";

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Flex>
      <Button onClick={() => navigate(PATH.HOME)}>Home</Button>
      <Button onClick={() => navigate(PATH.LOGIN)}>Login</Button>
      <Button onClick={() => navigate(PATH.CREATE_ACCOUNT)}>
        Create Account
      </Button>
      <Button onClick={() => navigate(PATH.RESET_PASSWORD)}>
        Reset Password
      </Button>
      <Button onClick={() => navigate(PATH.PROFILE)}>Profile</Button>
      <Button onClick={() => navigate(PATH.BOARD)}>Board</Button>
    </Flex>
  );
};

export default HomeScreen;
