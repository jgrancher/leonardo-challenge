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
      padding={{ base: 4, lg: 8 }}
      // _selection={{ backgroundColor: "white", color: "purple.500" }}
    >
      <Flex as="hgroup" alignItems="center" gap={2}>
        <Image
          alt="Logo of Leonardo.ai"
          src="/images/leonardo-logo.svg"
          width={12}
          height={12}
        />
        <Text as="h1" fontWeight="bold" fontSize={{ lg: "2xl" }}>
          My anime list
        </Text>
      </Flex>
      <Link display="flex" alignItems="center" gap={2} href="/profile">
        <UserCircleIcon width={24} />
        <Text
          as="span"
          display={{ base: "none", lg: "inline" }}
          fontWeight="medium"
        >
          Update my profile
        </Text>
      </Link>
    </Flex>
  );
};
