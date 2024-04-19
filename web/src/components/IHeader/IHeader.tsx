import { Flex, Image } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import IDrawer from "../IDrawer/IDrawer";

export default function IHeader() {
  const navigate = useNavigate();

  const pushToHome = () => {
    navigate("/");
  };

  return (
    <Flex
      paddingBlock={6}
      paddingInline={"5%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderColor={"gray.200"}
    >
      <Image alt="logo" aspectRatio={6 / 1} onClick={pushToHome} />

      <IDrawer />
    </Flex>
  );
}
