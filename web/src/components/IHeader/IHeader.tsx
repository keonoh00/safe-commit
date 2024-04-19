import { Box, Button, chakra, Flex, Image } from "@chakra-ui/react";

const RouteButton = chakra(Button, {
  baseStyle: {
    color: "black",
    marginRight: "5px",
  },
});

export default function IHeader() {
  return (
    <Flex
      paddingBlock={6}
      paddingInline={"5%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderColor={"gray.200"}
    >
      <Image
        // src={AssetSelector.logo}
        alt="logo"
        aspectRatio={6 / 1}
        // onClick={pushToHome}
      />

      <Box>
        <RouteButton colorScheme={"whiteAlpaka"} onClick={() => {}}>
          Home
        </RouteButton>
        <RouteButton colorScheme={"whiteAlpaka"} onClick={() => {}}>
          Demo
        </RouteButton>
      </Box>
    </Flex>
  );
}
