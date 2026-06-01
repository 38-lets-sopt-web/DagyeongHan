import { z } from 'zod'

export const GuestSessionSchema = z.object({
  success: z.boolean(),
  guest_session_id: z.string(),
  expires_at: z.string(),
})

export type GuestSession = z.infer<typeof GuestSessionSchema>
