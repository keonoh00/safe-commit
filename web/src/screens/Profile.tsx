import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import ScreenBase from "./ScreenBase";

const ProfileScreen: React.FC = () => {
  return (
    <ScreenBase>
      <Flex>
        <Button onClick={() => {}}>Profile</Button>
      </Flex>
    </ScreenBase>
  );
};

export default ProfileScreen;
