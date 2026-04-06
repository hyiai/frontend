"use client"
import { GccHero } from '@/components/util/interface';
import CustomWrapper from '@/components/shared/customWrapper';
import Image from 'next/image';
import WorldMap from "@/assets/gcc/images/world map_opt.json";
import Lottie from 'lottie-react';

interface HeroProps {
    data: GccHero;
    splitTitle?: boolean;
}

export default function Hero({ data, splitTitle = true }: HeroProps) {
    return (
        <CustomWrapper className="h-fit" padding="px-4 pt-2 my-0 py-15 md:py-4 md:pb-0">
            <div className="relative h-auto overflow-visible">
                {/* Desktop Gradient - only visible on md+ */}
                <div className="hidden md:block absolute top-[50%] left-[75%] lg:left-[74%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-[370px] h-[450px] lg:w-[870px] lg:h-[550px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
                </div>

                {/* Second gradient - indigo */}

                <div className="hidden md:block absolute top-[60%] left-[85%] lg:top-[65%] lg:left-[90%] transform -translate-x-1/2 -translate-y-3/4 pointer-events-none">
                    <div className="w-[270px] h-[250px] lg:w-[670px] lg:h-[350px] rounded-full bg-[radial-gradient(circle,_rgba(112,0,255,0.4)_0%,_transparent_70%)]  blur-3xl" />
                </div>

                {/* Mobile Background Image - only visible below md */}
                {data.mobileViewImage && (
                    <div className="md:hidden absolute inset-0 z-0 pointer-events-none select-none">
                        <Image
                            src={data.mobileViewImage.image}
                            alt={data.mobileViewImage.alt}
                            fill
                            className="object-contain object-top"
                            priority

                        />
                    </div>
                )}

                {/* Main Content Container */}
                <div className="relative z-10 px-4 pb-0 top-8 md:top-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center text-center md:text-left">

                        {/* Text Content */}
                        <div className="flex-1 md:max-w-[80%] space-y-2 md:space-y-4">
                            <div className="space-y-0 md:space-y-2">
                                {splitTitle ? (
                                    <>
                                        <h1 className="hyi-h1 gradient-text bg-clip-text leading-tight mb-0">
                                            {data.title}
                                        </h1>

                                        {data.titleHighlighted && (
                                            <h1 className="hyi-h1 bg-gradient-to-t from-brand-600 to-brand-500 bg-clip-text text-transparent normal-case leading-tight">
                                                {`${data.titleHighlighted} ${data.titleHighlighted2 || ''}`}
                                            </h1>
                                        )}
                                    </>
                                ) :
                                    (
                                        <h1 >
                                            <span className='hyi-h1 gradient-text bg-clip-text leading-tight'>
                                                {data.title}
                                            </ span >
                                            {data.titleHighlighted && (
                                                <span className="hyi-h1 bg-gradient-to-t from-brand-600 to-brand-500 bg-clip-text text-transparent normal-case leading-tight">
                                                    {`${data.titleHighlighted} ${data.titleHighlighted2 || ''}`}
                                                </span>
                                            )}
                                        </h1>
                                    )}
                            </div>

                            {data.description && (
                                <div className="max-w-full text-center md:text-left">
                                    <p className="hyi-p text-dark_mode-300">
                                        {data.description}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Desktop Image - only visible on md+ */}
                        {data.mdViewAnimation && (
                            <div className="flex-1 hidden md:block relative aspect-[4/3] lg:aspect-[5/4] xl:aspect-[7/5] w-full">
                                <Lottie animationData={WorldMap} loop autoplay />
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </CustomWrapper>
    );
}