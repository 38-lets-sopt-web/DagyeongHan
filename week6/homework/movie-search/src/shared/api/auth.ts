import { publicInstance } from '@/shared/api/axios'
import { API_ENDPOINTS } from '@/shared/api/endpoints'
import { GuestSessionSchema, type GuestSession } from '@/shared/schemas/auth'

export const getGuestSession = async (): Promise<GuestSession> => {
  const response = await publicInstance.get(API_ENDPOINTS.AUTH.GUEST_SESSION)
  return GuestSessionSchema.parse(response.data)
}
