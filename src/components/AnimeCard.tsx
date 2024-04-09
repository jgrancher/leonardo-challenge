import { AspectRatio, Link, Text } from "@chakra-ui/react";

import { Image } from "@/components/Image";
import type { Anime } from "@/lib/types";

interface AnimeCardProps {
  anime: Anime;
}

export const AnimeCard = ({ anime }: AnimeCardProps) => {
  return (
    <Link display="flex" flexDir="column" gap={2} role="group" shadow="none">
      <AspectRatio
        background="purple.500"
        borderRadius={4}
        overflow="hidden"
        ratio={0.7}
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
        color="purple.800"
        fontSize="sm"
        fontWeight="medium"
        lineHeight="1.2"
      >
        {anime.title.english}
      </Text>
    </Link>
  );
};
