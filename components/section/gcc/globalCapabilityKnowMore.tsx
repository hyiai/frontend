import CustomWrapper from "@/components/shared/customWrapper";
import Image from "next/image";
import globe from "@/assets/gcc/images/globe-with-code.webp";

export default function GlobalCapabilityKnowMore() {
  return (
    <CustomWrapper className="items-start" padding="px-4 my-0 py-6 md:py-3 ">
      <div className="flex flex-col justify-start md:flex-row-reverse items-start md:justify-center gap-12 md:py-6">
        {/* left Side - Text Content */}
        <div className="flex-1 space-y-6 z-10 md:pt-[8%]">
          <h2 className="hyi-h2">
            Know More About Building Global Capability Center
          </h2>

          <p className="hyi-p">
            Talent is the driving force of every high-performing Global
            Capability Center (GCC). But finding the right people is just the
            beginning. With HYI, you get more than recruitment, volume building
            and maintaining an active talent pool that can be developed to suit
            your business.
          </p>
        </div>

        {/* right Side - Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <Image
              src={globe}
              alt="Global Capability Center Globe"
              width={465}
              height={455}
            />
          </div>
        </div>
      </div>
    </CustomWrapper>
  );
}
