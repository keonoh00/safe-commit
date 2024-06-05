import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import ScreenBase from "./ScreenBase";

const AnnouncementBoardScreen: React.FC = () => {
  return (
    <ScreenBase>
      <Flex>
        <Button onClick={() => {}}>Announcements</Button>
      </Flex>
    </ScreenBase>
  );
};

export default AnnouncementBoardScreen;
