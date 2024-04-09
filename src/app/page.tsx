"use client";

import { Box, Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";

import { AnimeCard } from "@/components/AnimeCard";
import { mediaTile } from "@/lib/fragments";
import type { Anime } from "@/lib/types";

export default function Home() {
  const { loading, error, data } = useQuery<GetAnimesData>(GET_ANIMES);

  if (loading) {
    return (
      <Flex height="100%" alignItems="center" justifyContent="center">
        <Spinner size="lg" color="purple.500" />
      </Flex>
    );
  }

  if (error) {
    console.log("An error occurred while fetching the animes:", error);
    return (
      <Flex height="100%" alignItems="center" justifyContent="center">
        <Text color="red.600" fontWeight="medium">
          An error occurred in the application. Please try again later.
        </Text>
      </Flex>
    );
  }

  return (
    <SimpleGrid
      as="ul"
      columns={{ base: 2, md: 3, lg: 5 }}
      spacing={{ base: 4, lg: 8 }}
      padding={{ base: 4, lg: 8 }}
    >
      {data?.Page.media.map((anime) => (
        <Box as="li" listStyleType="none" key={anime.id}>
          <AnimeCard anime={anime} />
        </Box>
      ))}
    </SimpleGrid>
  );
}

interface GetAnimesData {
  Page: { media: Anime[] };
}

const GET_ANIMES = gql`
  query getAnimes {
    Page(page: 0, perPage: 10) {
      media(sort: POPULARITY_DESC) {
        ...mediaTile
      }
    }
  }
  ${mediaTile}
`;
