// React Imports
import React from "react";

// Next Imports
import Image from "next/image";
import Link from "next/link";

// Components Imports
import HeaderLinks, {
  SubMenuNavProps,
} from "@/components/sub-modules/header/headerLinks";
import MobileNav from "@/components/sub-modules/header/mobileNav";

// Data Imports
import {
  getTechnologiesSubMenuItems,
  getIndustriesSubMenuItems,
  headerData,
} from "@/components/data/header";

// Image Imports
import logo from "@/assets/shared/logo.svg";
import {
  ForCompaniesPageAPI,
  ForIndustriesPageAPI,
  ForTechnologiesPageAPI,
} from "@/lib/services/api";
import HeaderLogin from "@/components/sub-modules/header/headerLogin";

interface LinkItem {
  label: string;
  href: string;
  text?: string;
  icon?: string;
}

interface NavProps {
  value: string;
  title: string;
  heading?: string;
  paragraph?: string;
  outerPadding?: string;
  linkTo?: string;
  links?: LinkItem[];
  agiTraining?: { heading: string; links: LinkItem[] };
  itCourses?: { heading: string; links: LinkItem[] };
  plans?: LinkItem[];
  subMenu?: SubMenuNavProps[];
}

export default async function Header() {
  // const response = await companyTabAPI.getheaderData();
const companyResponse = await ForCompaniesPageAPI.getCompanyHeaderData();

// ✅ SAFE FIX
const companyData = Array.isArray(companyResponse)
  ? companyResponse
  : companyResponse?.data || [];

const companyDynamicLinks = companyData.map(
  (item: { title: string; navTitle: string; slug: string }) => ({
    label: `Hire ${item.title || ""}`,
    href: `/${item.slug || ""}`,
    text: item.navTitle || "",
  })
);

  const technologiesDynamicLinks = await ForTechnologiesPageAPI.getRoutes();
  const technologiesSubMenuItems = getTechnologiesSubMenuItems(
    technologiesDynamicLinks
  );

  const industriesDynamicLinks = await ForIndustriesPageAPI.getRoutes();
  const industriesSubMenuItems = getIndustriesSubMenuItems(
    industriesDynamicLinks
  );

  const consultingHeaderItems = {
    ...headerData.nav[3],
    subMenu: [technologiesSubMenuItems, industriesSubMenuItems],
  } as NavProps;

  // const dynamicLinks = await companyDynamicLinks.map(
  //   (item: {
  //     slug: string;
  //     bannerHeading: string;
  //     bannerHeadingHighlighted: string;
  //     navSubtitle: string;
  //     navT: string;
  //   }) => ({
  //     label: item.navT,
  //     href: `/${item.slug}`,
  //     text: item.navSubtitle,
  //   })
  // );

  return (
    <header className="w-full flex justify-center px-8 pt-6 pb-5 z-100">
      <section className="w-full max-w-[1280px] flex justify-between items-center">
        {/* ----------Logo Section---------- */}
        <section className="relative z-10">
          <Link href="/">
            <Image src={logo} alt="Logo" />
          </Link>
        </section>
        {/* ----------Header Link Section---------- */}
        <section className="w-fit hidden min-[1360px]:flex">
          <HeaderLinks
            navItems={
              { ...headerData.nav[0], links: companyDynamicLinks } as NavProps
            }
            relativeCSS="-left-[35%] min-[1150px]:-left-[50%] min-[1400px]:-left-[60%]"
            gapBetweendropDown="gap-0.5"
          >
            {headerData.nav[0].title}
          </HeaderLinks>
          <HeaderLinks
            navItems={headerData.nav[1]}
            gapBetweendropDown="gap-0.5"
            css="left-0 min-[1150px]:-left-[150%] min-[1250px]:left-[280%]"
            gridColumn="grid-cols-3"
          >
            {headerData.nav[1].title}
          </HeaderLinks>
          {/* <HeaderLinks
            mainLinkDestination={headerData.nav[2].linkTo}
            hasDropdownContent={false}
          >
            {headerData.nav[2].title}
          </HeaderLinks> */}
          <HeaderLinks
            navItems={headerData.nav[2]}
            gapBetweendropDown="gap-0.5"
            gridColumn="grid-cols-3"
            css="left-0 min-[1250px]:left-50"
          >
            {headerData.nav[2].title}
          </HeaderLinks>
          <HeaderLinks
            navItems={consultingHeaderItems}
            gapBetweendropDown="gap-0.5"
            css="left-0 min-[1250px]:left-0 whitespace-normal w-[1024px] min-[1250px]:left-20"
          >
            {headerData.nav[3].title}
          </HeaderLinks>
          <HeaderLinks
            navItems={headerData.nav[4]}
            mainLinkDestination={headerData.nav[4].linkTo}
            gapBetweendropDown="gap-0.5"
            gridColumn="grid-cols-2"
            css="left-0 lg:max-w-[500px]"
            hasDropdownContent={false}
          >
            {headerData.nav[4].title}
          </HeaderLinks>
        </section>
        {/* ----------SignUp and SignIn Section---------- */}
        <HeaderLogin />
        {/* ----------Mobile and Tab navigation Section---------- */}
        <section className="flex min-[1360px]:hidden">
          <MobileNav
            companyData={[
              { ...headerData.nav[0], links: companyDynamicLinks } as NavProps,
              headerData.nav[1],
              headerData.nav[2],
              consultingHeaderItems,
              headerData.nav[4],
            ]}
          />
        </section>
      </section>
    </header>
  );
}
