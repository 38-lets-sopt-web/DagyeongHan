import { useState } from "react"
import DropdownSection from "@/pages/main/sections/DropdownSection"
import MovieListSection from "@/pages/main/sections/MovieListSection"
import Header from "@/shared/components/Header"
import type { MovieFilter } from "@/shared/types/common"

const INITIAL_FILTER: MovieFilter = { rating: '' }

export default function Main() {
  const [filter, setFilter] = useState<MovieFilter>(INITIAL_FILTER)

  return (
    <main className="flex flex-col gap-10 px-50 py-10">
      <Header />
      <DropdownSection filter={filter} onChange={setFilter} />
      <MovieListSection filter={filter} />
    </main>
  )
}
