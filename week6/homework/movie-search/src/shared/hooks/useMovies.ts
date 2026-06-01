import { useInfiniteQuery } from '@tanstack/react-query'
import { getMovieList } from '@/shared/api/movie'

export const useMovies = () =>
  useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: ({ pageParam }) => getMovieList(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
  })
