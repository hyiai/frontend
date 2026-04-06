import CustomWrapper from "@/components/shared/customWrapper";
import Link from "next/link";

import industryAvatar from "@/assets/application-solutions/images/industry-avatar.webp";
import startEnterpriseCharts from "@/assets/application-solutions/images/startup-enterprise-charts.webp";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HeroDataType } from "@/components/data/target-industries";
import shieldIcon from "@/assets/gcc/icons/whiteSheild.svg";

export interface HeroProps {
    data: HeroDataType
}


export default function Hero({ data }: HeroProps) {
    return (
        <CustomWrapper padding="px-4 py-6 pb-0 md:p-6 lg:py-4">
            <div className="w-full flex flex-col items-center justify-center mb-10 md:mb-20">
                {/* top row */}
                <div className="w-full flex flex-col items-center justify-center">
                    {/* Category tag */}
                    <div className="mb-3">
                        {/* gradient - purple */}

                        <p className={cn("hyi-p text-white px-4 py-2 rounded-full", "text-white px-4 py-2 rounded-full", "bg-gradient-to-r from-purple-400/20 to-purple-300/15 backdrop-blur-md border border-white/20")}>
                            {data.category.tag}
                        </p>
                    </div>

                    {/* Main heading */}
                    <h1 className="hyi-h1 text-center mb-3">
                        {data.heading.main}{" "}
                        <span className="bg-gradient-to-t from-[#7046E6] to-[#9777EE] bg-clip-text text-transparent">
                            {data.heading.gradient}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="hyi-p text-center mb-10 max-w-[90%] md:max-w-1/2 xl:max-w-[70%]">
                        {data.description}
                    </p>

                    {/* Button below description */}
                    <div>
                        <Link href={data.cta.link}>
                            <button className="bg-black text-gray-200 border border-gray-300 rounded-full px-6 py-3 text-sm font-medium hover:bg-gray-900 transition-colors duration-200 shadow-sm glass-gradient ">
                                <p className="hyi-p gradient-text">
                                    {data.cta.buttonText}
                                </p>
                            </button>
                        </Link>
                    </div>
                </div>
                {/* bottom row */}
                <div className="hidden lg:flex flex-col md:flex-row justify-between mt-3 relative gap-3 h-[200px] w-full">

                    {/* Left part - Image placeholder */}
                    <div className="flex flex-col items-start justify-end w-1/4 relative">

                        {/* 725M+ stats card - absolute positioned on md+ */}
                        <div className="md:absolute text-left md:bottom-full md:left-0 mb-6 p-6 pl-0 transform translate-y-[40%]">
                            <h3 className="hyi-h3 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent capitalize mb-2 ml-2">{data.stats.number}</h3>
                            <p className="hyi-p bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent capitalize mb-6 ml-2">{data.stats.label}</p>

                            {/* Profile avatars - single image clubbed together */}
                            <div className="flex items-start justify-center space-x-1">
                                <Image
                                    src={industryAvatar}
                                    alt="profile avatar"
                                    width={144}
                                    height={48}

                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col">

                            <h3 className="hyi-h3 font-semibold mb-5 text-start">
                                {data.leftSection.title}
                            </h3>

                            <p className="hyi-p font-normal">
                                {data.leftSection.subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Middle part - Large rectangular card */}
                    <div className="middle-card-div w-2/4 xl:w-150 mb-8 md:mb-0 gap-6 flex flex-col items-center justify-end relative pb-6">
                        {/* First Card - Top Left */}
                        <div className="self-center w-85 xl:w-115 h-25 flex items-center justify-center gap-7 bg-[url('/Card-bg-12.png')] bg-no-repeat bg-[length:100%_100%] lg:p-3 xl:p-4 rounded-xl">
                            {/* Shield Icon */}
                            <div className="flex-shrink-0 mt-1">
                                <Image src={shieldIcon} alt="shield icon" width={24} height={24} />
                            </div>
                            {/* Text Content */}
                            <div className="flex flex-col">
                                <p className="text-white text-lg font-medium leading-tight">
                                    {data.middleSection.topCard.title}
                                </p>
                            </div>
                        </div>

                        {/* Second Card - Bottom Right */}
                        {/* <div className="self-end w-95 xl:w-100 h-25 p-5 bg-[url('/Card-bg-11.png')] bg-no-repeat bg-[length:100%_100%] py-4 px-4 rounded-xl">
                            <div className="flex justify-between items-center  h-full"> */}
                                {/* Left Column - Label */}
                        {/* <h2 className={`hyi-h2  ${!data.middleSection.bottomCard.stats && !data.middleSection.bottomCard.statSubText ? "w-full text-start" : "max-w-1/2"}`}>
                                    {data.middleSection.bottomCard.title}
                                </h2> */}
                                {/* Right Column - Statistics */}
                        {/* <div className="flex flex-col items-start justify-start">
                                    {
                                        data.middleSection.bottomCard.stats && (
                                            <h2 className="hyi-h2 mb-1">
                                                {data.middleSection.bottomCard.stats}
                                            </h2>
                                        )
                                    }

                                    {
                                        data.middleSection.bottomCard.statSubText && (
                                            <p className="hyi-p text-sm font-normal">
                                                {data.middleSection.bottomCard.statSubText}
                                            </p>
                                        )
                                    }

                                </div> */}

                        {/* </div>
                        </div> */}
                    </div>

                    {/* Right side - Text block */}
                    <div className="w-1/4 text-center md:text-left flex flex-col items-center justify-between md:justify-end flex-1 realtive">
                        <div className="md:absolute md:right-5 md:top-0 md:transform md:translate-y-[-70px] rounded-xl">
                            <Image src={startEnterpriseCharts} alt="hero middle" width={222} height={149} />
                        </div>
                        <div>
                            <p className="hyi-p">
                                {data.rightSection.textOne}
                            </p>
                            <p className="hyi-p">
                                {data.rightSection.textTwo}
                            </p>
                        </div>

                    </div>
                </div>

                {/* Mobile-only row - visible on screens smaller than md */}
                <div className="flex lg:hidden flex-col mt-12 relative gap-2">
                    {/* Row 1: Stats card and Chart */}
                    <div className="flex flex-row gap-3">
                        {/* Col 1: 725M+ stats card */}
                        <div className="w-1/2 text-left p-6">
                            <h2 className="hyi-h2 text-white mb-2 ml-2">{data.stats.number}</h2>
                            <p className="hyi-p text-white mb-6 ml-2">{data.stats.label}</p>

                            {/* Profile avatars - single image clubbed together */}
                            <div className="flex items-start justify-center space-x-1">
                                <Image
                                    src={industryAvatar}
                                    alt="profile avatar"
                                    width={144}
                                    height={48}
                                />
                            </div>
                        </div>

                        {/* Col 2: Chart image */}
                        <div className="w-1/2 flex flex-col items-center justify-center gap-4">
                            <div className="rounded-xl">
                                <Image src={startEnterpriseCharts} alt="hero middle" width={222} height={149} />
                            </div>

                            <p className="hyi-p max-w-1/2">
                                {data.rightSection.textOne}
                            </p>
                        </div>


                    </div>

                    <div className="mt-4 w-full">
                        <h3 className="hyi-h3 mb-2">
                            {data.leftSection.title}
                        </h3>

                        <p className="hyi-p font-normal">
                            {data.leftSection.subtitle}
                        </p>
                    </div>

                    {/* Row 3: Middle part taking full width */}

                    <div className="middle-card-div w-full mb-8 md:mb-0 gap-6 flex flex-col items-center justify-center relative mt-10">
                        {/* First Card - Top Left */}
                        <div className="flex-1 self-center w-[90%] md:w-3/4 max-h-30 flex items-center justify-center gap-7 bg-[url('/Card-bg-12.png')] bg-no-repeat bg-[length:100%_100%] py-4 px-3 rounded-xl">
                            {/* Shield Icon */}
                            <div className="flex-shrink-0 mt-1 w-6 h-6">
                                <Image src={shieldIcon} alt="shield icon" width={24} height={24} />
                            </div>
                            {/* Text Content */}
                            <div className="flex flex-col">
                                <p className="text-white text-lg font-medium leading-tight">
                                    {data.middleSection.topCard.title}
                                </p>
                            </div>
                        </div>

                        {/* Second Card - Bottom Right */}
                        {/* <div className="flex-1 self-end w-full md:w-3/4 max-h-30 rounded-xl  bg-[url('/Card-bg-11.png')] bg-no-repeat bg-[length:100%_100%] py-4 px-3 flex justify-around items-start"> */}
                                {/* Left Column - Label */}
                        {/* <h2 className={`hyi-h2  md:w-3/4  ${!data.middleSection.bottomCard.stats && !data.middleSection.bottomCard.statSubText ? "w-full text-center" : "md:max-w-[40%] max-w-1/2"}`}>
                                    {data.middleSection.bottomCard.title}
                                </h2> */}
                                {/* Right Column - Statistics */}
                        {/* {
                                (data.middleSection.bottomCard.stats || data.middleSection.bottomCard.statSubText) && (
                                    <div className="flex flex-col items-start justify-start sm:max-w-1/2">
                                        <h2 className="hyi-h2 mb-1">
                                            {data.middleSection.bottomCard.stats}
                                        </h2>
                                        <p className="hyi-p text-sm font-normal ">
                                            {data.middleSection.bottomCard.statSubText}
                                        </p>
                                    </div>
                                )
                            } */}


                        {/* </div> */}
                    </div>
                </div>
            </div>
        </CustomWrapper>
    )
}
