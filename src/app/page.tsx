import Header from "@/header";

export default function HomePage() {
  return (
    <main>
      <Header />
      <section className="flex items-center justify-center pt-16 max-sm:pt-8">
        <div className="font-outfit flex flex-col items-start gap-4 px-16 text-ceres animate-in fade-in zoom-in max-sm:items-center max-sm:justify-center max-sm:px-8">
          <h1 className="text-2xl font-semibold max-sm:text-center sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Phase 1 Environmental Site Assessment
          </h1>
          <h2 className="w-fit rounded-xl border-4 border-ceres p-4 px-8 text-5xl font-semibold max-sm:p-3 max-sm:px-4 max-sm:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            ASTM E1527-21
          </h2>
        </div>
      </section>
    </main>
  );
}
