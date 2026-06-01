import DropdownSection from "@/sections/DropdownSection"
import Card from "@/shared/components/Card"
import Header from "@/shared/components/Header"
import { useMovies } from "@/shared/hooks/useMovies"

export default function Main() {
  const { data } = useMovies()

  return (
    <main className="flex flex-col gap-10 px-30 py-10">
      <Header />
      <DropdownSection />
      <ul className="flex flex-wrap gap-4">
        {data?.results.map((movie) => (
          <li key={movie.id}>
            <Card {...movie} />
          </li>
        ))}
      </ul>
    </main>
  )
}
