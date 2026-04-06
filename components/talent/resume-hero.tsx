import Image from "next/image";
import { resumeBuilderData } from "../data/landingPage";

export default function RightHeroVisual() {
  return (
    <div
      className="
        relative w-full flex items-center justify-center
        rounded-sm
        bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.6)_0%,rgba(217,70,239,0.25)_35%,transparent_70%)]
      "
    >
      <div className="w-full flex flex-col gap-2 md:w-4/5">
        <Image
          src={resumeBuilderData.image}
          width={666}
          height={476}
          alt="Resume Builder price"
        />
        <p className="text-sm text-dark_mode-300">
          Deny, Ethan and{" "}
          <span className="font-bold text-dark_mode-100">
            hundreds of thousands
          </span>{" "}
          of Talents have succeeded get hired and accelerating their careers
          with HYI.AI
        </p>
      </div>
    </div>
  );
}
