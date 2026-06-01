import { z } from 'zod'

export const MovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  original_title: z.string(),
  original_language: z.string(),
  overview: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.number()),
  release_date: z.string(),
  popularity: z.number(),
  vote_average: z.number(),
  vote_count: z.number(),
  adult: z.boolean(),
  video: z.boolean(),
})

export const MovieListResponseSchema = z.object({
  page: z.number(),
  results: z.array(MovieSchema),
  total_pages: z.number(),
  total_results: z.number(),
})

export type Movie = z.infer<typeof MovieSchema>
export type MovieListResponse = z.infer<typeof MovieListResponseSchema>
