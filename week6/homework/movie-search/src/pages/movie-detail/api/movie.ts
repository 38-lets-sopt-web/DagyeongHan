import { publicInstance } from '@/shared/api/axios'
import { API_ENDPOINTS } from '@/shared/api/endpoints'
import { MovieDetailSchema, type MovieDetail } from '@/shared/schemas/movie'

export const getMovieDetail = async (movieId: number): Promise<MovieDetail> => {
  const response = await publicInstance.get(API_ENDPOINTS.MOVIE.DETAIL(movieId))
  return MovieDetailSchema.parse(response.data)
}
