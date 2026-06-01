import { z } from 'zod'

const MovieBaseSchema = z.object({
  id: z.number(),
  title: z.string(),
  original_title: z.string(),
  original_language: z.string(),
  overview: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
  release_date: z.string(),
  popularity: z.number(),
  vote_average: z.number(),
  vote_count: z.number(),
  adult: z.boolean(),
  video: z.boolean(),
})

export const MovieSchema = MovieBaseSchema.extend({
  genre_ids: z.array(z.number()),
})

export const MovieListResponseSchema = z.object({
  page: z.number(),
  results: z.array(MovieSchema),
  total_pages: z.number(),
  total_results: z.number(),
})

export type Movie = z.infer<typeof MovieSchema>
export type MovieListResponse = z.infer<typeof MovieListResponseSchema>

const GenreSchema = z.object({
  id: z.number(),
  name: z.string(),
})

const ProductionCompanySchema = z.object({
  id: z.number(),
  logo_path: z.string().nullable(),
  name: z.string(),
  origin_country: z.string(),
})

const ProductionCountrySchema = z.object({
  iso_3166_1: z.string(),
  name: z.string(),
})

const SpokenLanguageSchema = z.object({
  english_name: z.string(),
  iso_639_1: z.string(),
  name: z.string(),
})

const BelongsToCollectionSchema = z.object({
  id: z.number(),
  name: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
})

export const MovieDetailSchema = MovieBaseSchema.extend({
  belongs_to_collection: BelongsToCollectionSchema.nullable(),
  budget: z.number(),
  genres: z.array(GenreSchema),
  homepage: z.string(),
  imdb_id: z.string().nullable(),
  origin_country: z.array(z.string()),
  production_companies: z.array(ProductionCompanySchema),
  production_countries: z.array(ProductionCountrySchema),
  revenue: z.number(),
  runtime: z.number().nullable(),
  spoken_languages: z.array(SpokenLanguageSchema),
  status: z.string(),
  tagline: z.string(),
})

export type MovieDetail = z.infer<typeof MovieDetailSchema>
