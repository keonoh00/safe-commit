import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import ScreenBase from "./ScreenBase";

const LoginScreen: React.FC = () => {
  return (
    <ScreenBase>
      <Flex>
        <Button onClick={() => {}}>Login</Button>
      </Flex>
    </ScreenBase>
  );
};

export default LoginScreen;
