import Image from "next/image";
import CustomButton from "@/components/shared/customButton";
import HeroImage from "@/assets/investor/investorHeroImage.png";

export default function InvestorHeroSection() {
  return (
    <section className="relative w-full flex justify-center items-start overflow-hidden min-h-[40vh] md:min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_20%)] blur-3xl z-0"></div>
      <div className="absolute inset-0 top-50 hidden md:flex justify-center items-start z-0">
        <Image
          src={HeroImage}
          alt="Hero Image"
          width={1000}
          height={600}
          className="object-contain"
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 md:mt-20">
        <div className="flex flex-col items-center justify-center gap-4 max-w-3xl">
          <div className="text-white text-lg md:text-xl lg:text-3xl font-bold">
            Investing in the Future of <br />
            <span className="text-brand-500">Human + AI Collaboration</span>
          </div>
          <div className="text-dark_mode-300 text-base max-w-xl">
            HYI.AI is building next-generation artificial intelligence solutions
            that empower businesses and people to achieve more with less. We are
            transforming the way industries leverage AI safely, efficiently, and
            at scale.
          </div>
          <a
            href="https://hyvadata.s3.ap-south-1.amazonaws.com/Assets/Website_Invester_document.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton otherCSSProperty="mt-2">
              Download Investor Deck
            </CustomButton>
          </a>
        </div>
      </div>
    </section>
  );
}
