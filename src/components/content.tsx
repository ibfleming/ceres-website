import { Phone } from "lucide-react";
import PhoneNumber from "@/phone";

export default function Content() {
  return (
    <div className="p-12 animate-in fade-in zoom-in lg:py-24">
      <div className="flex flex-col items-center justify-center">
        <section className="flex items-center justify-center">
          <div className="flex flex-col items-start justify-center gap-4 font-outfit text-ceres max-md:items-center max-sm:items-center 2xl:gap-8">
            <h1 className="text-2xl font-semibold max-md:text-center max-sm:text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              Phase 1 Environmental Site Assessment
            </h1>
            <h2 className="w-fit rounded-xl border-4 border-ceres p-4 px-8 text-5xl font-semibold shadow-md max-md:p-2 max-md:px-4 max-sm:border-2 max-sm:text-xl sm:text-2xl xl:text-4xl 2xl:border-8 2xl:text-5xl">
              ASTM E1527-21
            </h2>
          </div>
        </section>
        <section className="flex items-center justify-center gap-2 pt-12 md:gap-3 lg:pt-24 xl:gap-4 2xl:gap-6">
          <Phone className="icon-normal max-sm:icon-thin h-10 w-10 text-ceres max-md:h-10 max-md:w-10 max-sm:h-6 max-sm:w-6 lg:h-12 lg:w-12 xl:h-16 xl:w-16" />
          <PhoneNumber />
        </section>
        <section className="container flex flex-col pt-12 sm:px-8 md:px-12 lg:pt-24 2xl:px-24">
          <div className="flex flex-col items-center justify-center gap-8 text-lg sm:text-xl lg:gap-12 lg:text-2xl xl:text-3xl">
            <p className="font-rubik text-left text-ceres">
              To reduce the risk of environmental liability, a Phase I ESA is
              conducted prior to real property financial transactions. It is
              very important for the client to understand the experience and
              knowledge of the consultant, as well as what can be expected to be
              found within the context of the proposed scope of work. All CERES
              Phase I ESAs are conducted under the direction of a Registered
              Environmental Property Assessor (REPA).
            </p>
            <p className="font-rubik text-left text-ceres">
              CERES&apos; Phase I ESAs are designed to follow Standard E1527-21,
              set forth by the American Society for Testing and Materials
              (ASTM). CERES can expand the scope of this Standard if desired, or
              comply with specific institutional standards.
            </p>
          </div>
          <div className="flex items-center justify-center py-12 lg:py-24">
            <h1 className="rounded-lg bg-ceres p-6 font-outfit text-2xl font-semibold text-background shadow-md xl:text-4xl">
              The best does not have to be expensive
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 text-lg sm:text-xl lg:gap-12 lg:text-2xl xl:text-3xl">
            <p className="font-rubik text-left text-ceres">
              CERES is a full-service environmental consulting company. With
              General, Professional, and Pollution Liability insurance of
              $1,000,000, CERES provides services in the western United States.
            </p>
            <p className="font-rubik text-left text-ceres">
              CERES&apos; Phase I ESAs are designed to follow Standard E1527-21,
              set forth by the American Society for Testing and Materials
              (ASTM). CERES can expand the scope of this Standard if desired, or
              comply with specific institutional standards.
            </p>
            <p className="font-rubik text-left text-ceres">
              CERES utilizes dedicated environmental, technical, and
              administrative professionals who approach project management with
              energy, skill, and experience.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
