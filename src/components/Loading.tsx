import { Flex, Spinner } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Flex
      alignItems="center"
      inset={0}
      justifyContent="center"
      position="absolute"
      zIndex={2}
    >
      <Spinner
        color="purple.500"
        emptyColor="gray.200"
        size="lg"
        thickness="2px"
      />
    </Flex>
  );
};
