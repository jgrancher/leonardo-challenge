"use client";

import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { gql, useQuery } from "@apollo/client";

import { Pagination } from "@/components/Pagination";
import { AnimeItem } from "@/components/AnimeItem";
import { Loading } from "@/components/Loading";
import { mediaTile } from "@/lib/fragments";
import type { Anime } from "@/lib/types";

export const AnimesGrid = () => {
  // Get the page number from the URL query parameters
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page") ?? "1";
  const page = Math.max(1, parseInt(pageParam, 10)); // TODO: Improve this and handle NaN.

  // Fetch the popular animes from the GraphQL API
  const { loading, error, data } = useQuery<GetAnimesData>(GET_ANIMES, {
    variables: { page },
  });

  // Note: In the real world, we probably would want to handle an empty state (`!data`) somewhere here.
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
    <Flex as="section" flexDirection="column" flex={1} gap={{ base: 4, lg: 8 }}>
      <Flex flexDirection="column" flex={1} position="relative">
        {loading && <Loading />}
        <SimpleGrid
          as="ul"
          flex={1}
          columns={{ base: 2, md: 3, lg: 5 }}
          paddingX={{ base: 4, lg: 8 }}
          paddingTop={{ base: 4, lg: 8 }}
          spacing={{ base: 4, lg: 8 }}
        >
          {data?.Page.media.map((anime) => (
            <Box as="li" listStyleType="none" key={anime.id}>
              <AnimeItem anime={anime} />
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
      <Pagination currentPage={page} disabled={loading} />
    </Flex>
  );
};

// In the real world, you would probably want to move this query (and its types) to a separate file.
// I also like the idea of collocating the query with the component that uses it, so I'm not too fuss about it.

export interface GetAnimesData {
  Page: { media: Anime[] };
}

const GET_ANIMES = gql`
  query getAnimes($page: Int!) {
    Page(page: $page, perPage: 10) {
      media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
        ...mediaTile
      }
    }
  }
  ${mediaTile}
`;
