import { publicInstance } from './axios'
import { API_ENDPOINTS } from './endpoints'
import { MovieListResponseSchema, type MovieListResponse } from '@/shared/schemas/movie'

export const getMovieList = async (page: number): Promise<MovieListResponse> => {
  const response = await publicInstance.get(API_ENDPOINTS.MOVIE.LIST, { params: { page } })
  return MovieListResponseSchema.parse(response.data)
}
