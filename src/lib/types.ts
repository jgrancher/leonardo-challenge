export interface Anime {
  id: number;
  title: {
    romaji: string;
    english: string;
  };
  coverImage: {
    medium: string;
    large: string;
    color: string;
  };
}
