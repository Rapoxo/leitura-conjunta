import { Flex, Skeleton, SkeletonCircle, useColorMode, Spacer } from "@chakra-ui/react";

const LeaderBoardPlaceHolder = () => {
  const colorModeValue = useColorMode();

  return (
    <Flex m=".8em" alignContent="flex-start" w="70%" borderRadius="md" p="1em" bg={!colorModeValue ? "white" : "gray.700"} flexDirection="row" minW="300px">
      <SkeletonCircle size="10" /> <Skeleton ml={5} alignSelf="center" height="20px" width="40%" /> <Spacer /> <Skeleton alignSelf="center" height="20px" width="10%" />
    </Flex>
  );
};

export default LeaderBoardPlaceHolder;