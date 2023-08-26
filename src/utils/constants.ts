export const ANIME_URL = "https://api.consumet.org/meta/anilist";
export const ENIME_URL = "https://api.enime.moe";
export const ANIME_NEWS_URL = "https://api.consumet.org/news/ann";

export const BASE_URL = `${process.env.NODE_ENV === "production" ? "https" : "http"}://${process.env.VERCEL_URL}/api`;
