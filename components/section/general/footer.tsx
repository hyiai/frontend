// React Imports
import React from "react";

// Next Imports
import Image from "next/image";
import Link from "next/link";

// Component Imports
import CustomWrapper from "@/components/shared/customWrapper";

// Data Imports
import { footer, footerSections } from "@/components/data/footer";

// Image/Icon Imports
import Logo from "@/assets/shared/logo.svg";
import linkedin from "@/assets/footer/linkedin.svg";
import twitter from "@/assets/footer/twitter.svg";
import instagram from "@/assets/footer/instagram.svg";
import facebook from "@/assets/footer/facebook.svg";
import youtube from "@/assets/footer/youtube.svg";
import CustomSeparator from "@/components/shared/customSeparator";
import { ForTechnologiesPageAPI } from "@/lib/services/api";
import { getTechnologiesSubMenuItems } from "@/components/data/header";

export default async function Footer() {

  const technologiesDynamicLinks = await ForTechnologiesPageAPI.getRoutes();
  const technologiesSubMenuItems = getTechnologiesSubMenuItems(
    technologiesDynamicLinks
  );

  const footerData = {
    ...footerSections,
    ConsultingAndSolutions: {
      ...footerSections.ConsultingAndSolutions,
      links: [
        ...technologiesSubMenuItems.links.map((item) => ([
          item.label,
          item.href,
        ])),
      ],
    }
  }

  return (
    <CustomWrapper
      gapBetween="gap-6 md:gap-8"
      divStyle="footer-radial-gradient"
      padding="px-8 pt-6 md:px-6 md:pt-6 lg:pt-8"
    >
      {/* ----------Footer Link Section---------- */}
      <section>
        <CustomSeparator margin_Y="my-0" from="from-0%" to="to-100%" />
        <div className="w-full flex flex-col gap-4 py-5 md:gap-8 md:pb-10 md:pt-6">
          <section className="w-full grid grid-cols-7 gap-y-6 gap-x-4 md:gap-6 md:grid-cols-3 lg:grid-cols-5">
            {footer.dynamicLinks.map((key, index) => {
              const section =
                footerData[key as keyof typeof footerSections];
              return (
                <div
                  key={index}
                  className={`flex flex-col gap-3 ${
                    index % 2 !== 0
                      ? "col-span-3 md:col-auto"
                      : "col-span-4 md:col-auto"
                  }`}
                >
                  <h2 className="text-lg font-semibold text-dark_mode-100 capitalize cursor-default">
                    {section.heading}
                  </h2>
                  <ul className="w-full flex flex-col gap-2">
                    {section.links.map((link, i) => (
                      <li
                        key={i}
                        className="w-full text-sm font-medium text-dark_mode-100 hover:scale-110 transition duration-200 ease-in-out will-change-contents md:w-fit"
                      >
                        <Link href={link[1]}>{link[0]}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </section>
          {/* ----------Copyrights and Logo Section---------- */}
          <section>
            <CustomSeparator margin_Y="my-3" from="from-0%" to="to-100%" />
            <div className="w-full flex flex-col items-center text-center pt-4 gap-4 md:flex-row md:justify-between">
              <div className="w-fit h-fit">
                <Image src={Logo} alt="Logo" />
              </div>
              <p className="text-sm font-normal cursor-default text-dark_mode-100">
                © 2025 HYI.AI All rights reserved.
              </p>
              <ul className="flex items-center gap-4 lg:gap-8">
                <li className="hover:scale-120 transition duration-500 ease-in-out will-change-contents">
                  <Link href="https://www.x.com/HyiAiOfficial" target="_blank">
                    <Image
                      src={twitter}
                      width={24}
                      height={42}
                      alt="Twitter Icon"
                      className="min-w-6 min-h-[42px]"
                    />
                  </Link>
                </li>
                <li className="hover:scale-120 transition duration-500 ease-in-out will-change-contents">
                  <Link
                    href="https://www.youtube.com/@HYI.AI_Official"
                    target="_blank"
                  >
                    <Image
                      src={youtube}
                      alt="Youtube Icon"
                      width={32}
                      height={42}
                      className="min-w-8 min-h-[42px]"
                    />
                  </Link>
                </li>
                <li className="hover:scale-120 transition duration-500 ease-in-out will-change-contents">
                  <Link
                    href="https://www.instagram.com/hyi_ai/"
                    target="_blank"
                  >
                    <Image
                      src={instagram}
                      width={24}
                      height={42}
                      alt="Instagram Icon"
                      className="min-w-6 min-h-[42px]"
                    />
                  </Link>
                </li>
                <li className="hover:scale-120 transition duration-500 ease-in-out will-change-contents">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61574004945155"
                    target="_blank"
                  >
                    <Image
                      src={facebook}
                      width={24}
                      height={42}
                      alt="Facebook Icon"
                      className="min-w-6 min-h-[42px]"
                    />
                  </Link>
                </li>
                <li className="hover:scale-120 transition duration-500 ease-in-out will-change-contents">
                  <Link
                    href="https://www.linkedin.com/company/hyiai/"
                    target="_blank"
                  >
                    <Image
                      src={linkedin}
                      width={24}
                      height={42}
                      alt="LinkedIn Icon"
                      className="min-w-6 min-h-[42px]"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </CustomWrapper>
  );
}
