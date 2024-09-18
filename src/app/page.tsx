import Header from "@/header";
import { Phone } from "lucide-react";
import Loader from "~/components/loader";
import PhoneNumber from "~/components/phone";

export default function HomePage() {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center justify-center gap-12 pt-12 max-md:gap-12 max-md:pt-12 max-sm:gap-12 max-sm:pt-12 lg:gap-16 lg:pt-16">
        <section className="flex items-center justify-center">
          <div className="flex flex-col items-start gap-4 px-16 font-outfit text-ceres animate-in fade-in zoom-in max-md:items-center max-sm:items-center">
            <h1 className="text-2xl font-semibold max-md:text-center max-sm:text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              Phase 1 Environmental Site Assessment
            </h1>
            <h2 className="w-fit rounded-xl border-4 border-ceres p-4 px-8 text-5xl font-semibold max-md:p-2 max-md:px-4 max-sm:border-2 max-sm:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              ASTM E1527-21
            </h2>
          </div>
        </section>
        <section className="flex items-center justify-center gap-6 px-16 pb-16 align-middle animate-in fade-in zoom-in max-md:gap-3 max-sm:gap-2">
          <Phone className="icon-normal h-10 w-10 text-ceres max-md:h-10 max-md:w-10 max-sm:h-8 max-sm:w-8 lg:h-16 lg:w-16 lg:gap-6" />
          <PhoneNumber />
        </section>
      </div>
    </main>
  );
}
