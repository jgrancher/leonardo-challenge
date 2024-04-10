import {
  AspectRatio,
  Box,
  Button,
  Link,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { Image } from "@/components/Image";
import type { Anime } from "@/lib/types";
import { AnimeModal } from "./AnimeModal";

interface AnimeCardProps {
  anime: Anime;
}

export const AnimeItem = ({ anime }: AnimeCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Link
        cursor="help"
        display="flex"
        flexDir="column"
        gap={2}
        onClick={onOpen}
        position="relative"
        role="group"
      >
        <AspectRatio
          as="figure"
          background="purple.500"
          overflow="hidden"
          ratio={0.7}
          rounded={4}
        >
          <Image
            alt={anime.title.romaji}
            loading="lazy"
            maxHeight="inherit"
            overflow="hidden"
            src={anime.coverImage.large}
            transformOrigin="center"
            transition="transform 0.3s ease-in"
            _groupHover={{ transform: "scale(1.05)" }}
          />
        </AspectRatio>
        <Text
          as="h2"
          color="purple.800"
          fontSize="sm"
          fontWeight="medium"
          lineHeight="1.2"
        >
          {anime.title.english}
        </Text>
        <Tag
          background="whiteAlpha.700"
          backdropFilter="auto"
          backdropBlur="6px"
          color="purple.900"
          colorScheme="purple"
          fontSize="xs"
          position="absolute"
          right={2}
          rounded={2}
          top={2}
          zIndex={1}
        >
          {anime.averageScore}%
        </Tag>
      </Link>
      <AnimeModal isOpen={isOpen} onClose={onClose} anime={anime} />
    </>
  );
};
