import { z } from 'zod'

export const RateMovieResponseSchema = z.object({
  success: z.boolean(),
  status_code: z.number(),
  status_message: z.string(),
})

export type RateMovieResponse = z.infer<typeof RateMovieResponseSchema>
