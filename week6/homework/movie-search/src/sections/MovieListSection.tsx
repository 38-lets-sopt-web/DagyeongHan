import { useEffect, useRef } from 'react'
import Card from '@/shared/components/Card'
import { useMovies } from '@/shared/hooks/useMovies'

export default function MovieListSection() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useMovies()

  const observerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage) fetchNextPage()
    })
    if (observerRef.current) observer.observe(observerRef.current)
    return () => observer.disconnect()
  }, [hasNextPage, fetchNextPage])

  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.pages.flatMap((page) => page.results).map((movie) => (
          <li key={movie.id}>
            <Card {...movie} />
          </li>
        ))}
        <div ref={observerRef} />
      </ul>
      {isFetchingNextPage && <p className="flex justify-center items-center text-neutral-300">Loading...</p>}
    </>
  )
}
