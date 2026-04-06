import partnerWithUs from "@/assets/application-solutions/images/partner-with-us-globally.png";
import purpleDisc from "@/assets/application-solutions/icons/purple-disc.svg";
import Image from "next/image";
import CustomWrapper from "@/components/shared/customWrapper";
import { PartnerWithUs } from "@/components/data/application-solution";

interface PartnerWithUsGloballyProps {
    data: PartnerWithUs
}

export default function PartnerWithUsGlobally({ data }: PartnerWithUsGloballyProps) {


    return (
        <CustomWrapper padding="px-4 py-6 md:py-10 pb-0">
            <div className="w-full flex flex-col md:flex-row-reverse items-start justify-center gap-10">
                {/* content section */}
                <div className=" w-full md:w-1/2 flex flex-col gap-4 md:mt-6">
                    <h2 className="hyi-h2">{data.title}</h2>
                    <p className="hyi-p">
                        {data.description}
                    </p>
                    {/* list items */}
                    <ul className="mt-2 flex flex-col gap-3">
                        {
                            data.items.map((item, index) => (
                                <li className="flex items-start gap-3" key={index}>
                                    <Image src={purpleDisc} alt="disc" width={20} height={20} />
                                    <span className="hyi-p">{item.label}</span>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                {/* image section */}
                <div className="w-full md:w-1/2 max-w-[644px]">
                    <Image src={partnerWithUs} alt="partner with us" className="w-full h-auto" />
                </div>


            </div>
        </CustomWrapper>)
}


