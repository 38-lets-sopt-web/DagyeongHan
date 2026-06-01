import { z } from 'zod'
import { MovieSchema } from '@/shared/schemas/movie'

export const RateMovieResponseSchema = z.object({
  success: z.boolean(),
  status_code: z.number(),
  status_message: z.string(),
})

export type RateMovieResponse = z.infer<typeof RateMovieResponseSchema>

export const RatedMovieSchema = MovieSchema.extend({
  rating: z.number(),
})

export const RatedMoviesResponseSchema = z.object({
  page: z.number(),
  results: z.array(RatedMovieSchema),
  total_pages: z.number(),
  total_results: z.number(),
})

export type RatedMovie = z.infer<typeof RatedMovieSchema>
export type RatedMoviesResponse = z.infer<typeof RatedMoviesResponseSchema>
