import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import ScreenBase from "./ScreenBase";

const ResetPasswordScreen: React.FC = () => {
  return (
    <ScreenBase>
      <Flex>
        <Button onClick={() => {}}>Reset Password</Button>
      </Flex>
    </ScreenBase>
  );
};

export default ResetPasswordScreen;
