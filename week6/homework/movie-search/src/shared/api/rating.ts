import { publicInstance } from '@/shared/api/axios'
import { API_ENDPOINTS } from '@/shared/api/endpoints'
import { RatedMoviesResponseSchema, type RatedMoviesResponse } from '@/shared/schemas/rating'

export const getRatedMovies = async (guestSessionId: string): Promise<RatedMoviesResponse> => {
  const response = await publicInstance.get(API_ENDPOINTS.GUEST_SESSION.RATED_MOVIES(guestSessionId))
  return RatedMoviesResponseSchema.parse(response.data)
}
