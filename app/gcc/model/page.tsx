import Hero from "@/components/section/gcc/hero";
import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";
import { gccModelData } from "@/components/data/gcc";
import Model from "@/components/section/gcc/model";

export default function Home() {
    return (
        <div className="relative w-full overflow-hidden" >
            {/* desktop gradience */}
            <div className="hidden md:flex overflow-visible pointer-events-none absolute top-[250px]  left-[20%] lg:top-[300px] lg:left-[25%] items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2">
                <div className="overflow-visible core-gradient w-[450px] h-[450px] lg:w-[1200px] lg:h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
            </div>

            {/* Mobile gradient overlay for soft hue effect */}
            {/* First gradient - purple */}
            <div className="md:hidden absolute pointer-events-none top-[160px] left-[30%]  transform -translate-x-1/2 -translate-y-1/2 z-0">
                <div className="w-[60vw] h-[550px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
            </div>

            {/* Second gradient - indigo */}
            <div className="md:hidden absolute pointer-events-none top-[120px] left-[80%]  transform -translate-x-1/2 -translate-y-1/2 z-0">
                <div className="w-[60vw] h-[550px] rounded-full bg-[radial-gradient(circle,_rgba(112,0,255,0.4)_0%,_transparent_70%)] blur-3xl" />
            </div>

            <Header />
            <Hero data={gccModelData} />
            <Model />
            <Footer />
        </div>
    )
}