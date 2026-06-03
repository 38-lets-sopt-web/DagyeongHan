import { useQuery } from '@tanstack/react-query'
import { getMovieDetail } from '@/pages/movie-detail/api/movie'

export const useMovieDetail = (movieId: number) =>
  useQuery({
    queryKey: ['movie-detail', movieId],
    queryFn: () => getMovieDetail(movieId),
    enabled: !isNaN(movieId),
  })
