import { Box, Flex, SkeletonText } from "@chakra-ui/react";

const ILoading = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Box padding="6" boxShadow="lg" bg="white" width={"50%"}>
        <SkeletonText
          marginBlock={"12"}
          marginInline={"8"}
          noOfLines={4}
          spacing="8"
          skeletonHeight="6"
        />

        <SkeletonText
          marginBlock={"12"}
          marginInline={"8"}
          noOfLines={4}
          spacing="8"
          skeletonHeight="6"
        />
      </Box>
    </Flex>
  );
};

export default ILoading;
