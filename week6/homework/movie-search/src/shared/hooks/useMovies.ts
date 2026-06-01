import { useQuery } from '@tanstack/react-query'
import { getMovieList } from '@/shared/api/movie'

export const useMovies = () =>
  useQuery({
    queryKey: ['movies'],
    queryFn: getMovieList,
  })
