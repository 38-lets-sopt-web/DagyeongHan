import { publicInstance } from './axios'
import { API_ENDPOINTS } from './endpoints'
import { MovieListResponseSchema, type MovieListResponse } from '@/shared/schemas/movie'

export const getMovieList = async (): Promise<MovieListResponse> => {
  const response = await publicInstance.get(API_ENDPOINTS.MOVIE.LIST)
  return MovieListResponseSchema.parse(response.data)
}
