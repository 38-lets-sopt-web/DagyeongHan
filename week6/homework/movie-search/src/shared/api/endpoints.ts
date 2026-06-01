export const API_ENDPOINTS = {
  MOVIE: {
    LIST: '/discover/movie',
    DETAIL: (movieId: number) => `/movie/${movieId}`,
    RATE: (movieId: number) => `/movie/${movieId}/rating`,
  },
  AUTH: {
    GUEST_SESSION: '/authentication/guest_session/new',
  },
  GUEST_SESSION: {
    RATED_MOVIES: (guestSessionId: string) => `/guest_session/${guestSessionId}/rated/movies`,
  },
} as const
