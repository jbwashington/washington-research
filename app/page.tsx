import { H1 } from "@/components/typography";

export default async function HomePage() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-8 text-center">
        <H1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Data and wisdom archive for the Washington family and its descendants.
        </H1>
      </div>
    </section>
  );
}
