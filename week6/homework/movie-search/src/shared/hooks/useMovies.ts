import { useInfiniteQuery } from '@tanstack/react-query'
import { getMovieList } from '@/shared/api/movie'
import type { MovieFilter } from '@/shared/types/common'

export const useMovies = (filter: MovieFilter) =>
  useInfiniteQuery({
    queryKey: ['movies', filter],
    queryFn: ({ pageParam }) => getMovieList(pageParam, filter),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
  })
