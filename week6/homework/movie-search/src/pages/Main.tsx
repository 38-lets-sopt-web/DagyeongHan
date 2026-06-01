import DropdownSection from "@/sections/DropdownSection";
import Card from "@/shared/components/Card";
import Header from "@/shared/components/Header";

export default function Main() {
  return (
    <main className="flex flex-col gap-10 px-80 py-10">
      <Header />
      <DropdownSection />
      <Card />
    </main>
  )
}
