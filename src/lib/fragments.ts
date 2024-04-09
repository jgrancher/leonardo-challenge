import { gql } from "@apollo/client";

export const mediaTile = gql`
  fragment mediaTile on Media {
    id
    title {
      romaji
      english
    }
    coverImage {
      large
      medium
      color
    }
  }
`;
