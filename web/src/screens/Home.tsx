import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import ScreenBase from "./ScreenBase";

const HomeScreen: React.FC = () => {
  return (
    <ScreenBase>
      <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
        <Text
          fontSize={"4xl"}
          fontWeight={"bold"}
          color={"black"}
          textAlign={"center"}
        >
          This is Home
        </Text>
      </Flex>
    </ScreenBase>
  );
};

export default HomeScreen;
