import { publicInstance } from '@/shared/api/axios'
import { API_ENDPOINTS } from '@/shared/api/endpoints'
import { MovieDetailSchema, type MovieDetail } from '@/shared/schemas/movie'
import { RateMovieResponseSchema, type RateMovieResponse } from '@/shared/schemas/rating'

export const getMovieDetail = async (movieId: number): Promise<MovieDetail> => {
  const response = await publicInstance.get(API_ENDPOINTS.MOVIE.DETAIL(movieId))
  return MovieDetailSchema.parse(response.data)
}

export const rateMovie = async (
  movieId: number,
  value: number,
  guestSessionId: string,
): Promise<RateMovieResponse> => {
  const response = await publicInstance.post(
    API_ENDPOINTS.MOVIE.RATE(movieId),
    { value },
    { params: { guest_session_id: guestSessionId } },
  )
  return RateMovieResponseSchema.parse(response.data)
}

export const deleteMovieRating = async (
  movieId: number,
  guestSessionId: string,
): Promise<RateMovieResponse> => {
  const response = await publicInstance.delete(
    API_ENDPOINTS.MOVIE.RATE(movieId),
    { params: { guest_session_id: guestSessionId } },
  )
  return RateMovieResponseSchema.parse(response.data)
}
