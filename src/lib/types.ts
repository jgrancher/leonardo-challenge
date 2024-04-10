export interface Date {
  year: number;
  month: number;
  day: number;
}

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
  averageScore: number;
  description: string;
  episodes: number;
  startDate: Date;
  endDate: Date;
  status:
    | "FINISHED"
    | "RELEASING"
    | "NOT_YET_RELEASED"
    | "CANCELLED"
    | "HIATUS";
}
