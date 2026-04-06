import CustomWrapper from "@/components/shared/customWrapper";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import purpleDisc from "@/assets/application-solutions/icons/purple-disc.svg";
import Image from "next/image";
import { AccordianDataType, AccordianItemType, SectionFourDataType } from "@/components/data/application-solution";

interface PortfolioProps {
  data: SectionFourDataType
}

export default function Portfolio({ data }: PortfolioProps) {
  return (
    <CustomWrapper padding="px-4 py-10 md:px-6">
      <div className="flex flex-col md:flex-row w-full md:gap-20 items-start">
        {/* Left section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 mb-10 md:mb-0">
          <h2 className="hyi-h2">{data.title1}<br className="hidden md:block" />{data.title2}</h2>
          <p className="hyi-p">{data.description}
          </p>
          <div className="mt-2">
            <Link href="/talk-to-our-expert">
              <button className="bg-black text-gray-200 border border-gray-300 rounded-full px-6 py-3 text-sm font-medium hover:bg-gray-900 transition-colors duration-200 shadow-sm glass-gradient ">
                <p className="hyi-p gradient-text">

                  Talk to our expert
                </p>
              </button>
            </Link>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center">
          {/* gradient - purple */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 w-full h-full">
            <div className="h-3/4 w-full rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
          </div>

          {/* Right side accordian */}
          <Accordion type="single" collapsible className="w-full z-10 border-t-1 border-dark_mode-700 sm:px-1">
            {data.accordianData.map((item: AccordianDataType) => (
              <AccordionItem key={item.id} value={item.id.toString()} className="border-b-1 border-dark_mode-700">
                <AccordionTrigger className="pt-4 pb-6 hover:cursor-pointer hover:no-underline data-[state=open]:pb-2 text-dark_mode-100 capitalize cursor-default text-xl font-semibold">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="w-full flex flex-col gap-4 items-start justify-start mt-3">
                    {/* list items */}
                    <ul className="flex flex-col gap-4 z-10">
                      {item.items.map((listItem: AccordianItemType, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Image src={purpleDisc} alt="disc" width={20} height={20} />
                          <span className="hyi-p">
                            {listItem.label && (
                              <span className="font-bold">{listItem.label} </span>
                            )}
                            {listItem.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {/* Result text */}
                    <p className="hyi-p font-normal z-10 italic">
                      Result: {item.result}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </CustomWrapper>
  );
}
