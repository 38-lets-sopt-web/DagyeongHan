import DropdownSection from "@/sections/DropdownSection";
import Header from "@/shared/components/Header";

export default function Main() {
  return (
    <main className="flex flex-col gap-10 px-10 py-10">
      <Header />
      <DropdownSection />
    </main>
  )
}
