import { publicInstance } from './axios'
import { API_ENDPOINTS } from './endpoints'
import { MovieDetailSchema, MovieListResponseSchema, type MovieDetail, type MovieListResponse } from '@/shared/schemas/movie'
import type { MovieFilter } from '@/shared/types/common'

export const getMovieList = async (page: number, filter: MovieFilter): Promise<MovieListResponse> => {
  const response = await publicInstance.get(API_ENDPOINTS.MOVIE.LIST, {
    params: {
      page,
      sort_by: 'popularity.desc',
      'vote_average.gte': filter.rating || undefined,
      'vote_average.lte': filter.rating ? Number(filter.rating) + 0.9 : undefined,
    },
  })
  return MovieListResponseSchema.parse(response.data)
}

export const getMovieDetail = async (movieId: number): Promise<MovieDetail> => {
  const response = await publicInstance.get(API_ENDPOINTS.MOVIE.DETAIL(movieId))
  return MovieDetailSchema.parse(response.data);
}