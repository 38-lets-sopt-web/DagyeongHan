import DropdownSection from "@/sections/DropdownSection"
import MovieListSection from "@/sections/MovieListSection"
import Header from "@/shared/components/Header"

export default function Main() {
  return (
    <main className="flex flex-col gap-10 px-50 py-10">
      <Header />
      <DropdownSection />
      <MovieListSection />
    </main>
  )
}
