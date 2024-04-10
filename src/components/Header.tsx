import { Flex, Link, Text } from "@chakra-ui/react";

import { Image } from "@/components/Image";
import { UserCircleIcon } from "@/icons/UserCircle";

export const Header = () => {
  return (
    <Flex
      as="header"
      alignItems="center"
      backgroundColor="purple.500"
      color="white"
      justifyContent="space-between"
      paddingX={{ base: 4, lg: 8 }}
      height={{ base: 12, lg: 16 }}
    >
      <Link display="flex" alignItems="center" gap={2} href="/">
        <Image
          alt="Logo of Leonardo.ai"
          src="/images/leonardo-logo.svg"
          width={{ base: 8, lg: 10 }}
          height={{ base: 8, lg: 10 }}
        />
        <Text
          as="h1"
          fontWeight="bold"
          fontSize={{ lg: "xl" }}
          _selection={{ backgroundColor: "white", color: "purple.500" }}
        >
          My anime list
        </Text>
      </Link>
      <Link display="flex" alignItems="center" gap={2} href="/profile">
        <UserCircleIcon width={24} />
        <Text
          as="span"
          display={{ base: "none", lg: "inline" }}
          fontWeight="medium"
          _selection={{ backgroundColor: "white", color: "purple.500" }}
        >
          Profile
        </Text>
      </Link>
    </Flex>
  );
};
