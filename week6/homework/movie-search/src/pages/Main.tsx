import DropdownSection from "@/sections/DropdownSection"
import Card from "@/shared/components/Card"
import Header from "@/shared/components/Header"
import { useMovies } from "@/shared/hooks/useMovies"
import { useEffect, useRef } from "react"

export default function Main() {
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
    <main className="flex flex-col gap-10 px-50 py-10">
      <Header />
      <DropdownSection />
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.pages.flatMap((page) => page.results).map((movie) => (
          <li key={movie.id}>
            <Card {...movie} />
          </li>
        ))}
        <div ref={observerRef} />
      </ul>
      {isFetchingNextPage && <p className="flex justify-center items-center text-neutral-300">Loading...</p>}
    </main>
  )
}
