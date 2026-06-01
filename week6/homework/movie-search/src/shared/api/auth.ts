import { publicInstance } from '@/shared/api/axios'
import { API_ENDPOINTS } from '@/shared/api/endpoints'
import { GuestSessionSchema } from '@/shared/schemas/auth'

const GUEST_SESSION_KEY = 'guest_session_id'

export const getGuestSession = async (): Promise<string> => {
  const saved = localStorage.getItem(GUEST_SESSION_KEY)
  if (saved) return saved
  const response = await publicInstance.get(API_ENDPOINTS.AUTH.GUEST_SESSION)
  const session = GuestSessionSchema.parse(response.data)
  localStorage.setItem(GUEST_SESSION_KEY, session.guest_session_id)
  return session.guest_session_id
}
