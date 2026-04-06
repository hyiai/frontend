"use client";

// React Imports
import React, { useRef, useState } from "react";

// next Imports
import Link from "next/link";
import Image from "next/image";

// shadcn Imports
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Image Imports
import MobileNavIcon from "@/assets/arrowIcons/menu-03.svg";
import arrowDownIcon from "@/assets/arrowIcons/chevron-down.svg";
// import { ChevronRight } from "lucide-react";
import CustomButton from "@/components/shared/customButton";
import { ShimmerButton } from "@/components/shared/customShimmerButton";
// import HeaderButtons from "./headerButtons";
import { SubMenuNavProps } from "./headerLinks";
// import { useRouter } from "next/navigation";
import { X } from "lucide-react";

interface LinkItem {
  label: string;
  href: string;
  text?: string;
  icon?: string;
}

interface MobileNavProps {
  companyData: {
    value: string;
    title: string;
    heading?: string;
    paragraph?: string;
    outerPadding?: string;
    links?: LinkItem[];
    agiTraining?: { heading: string; links: LinkItem[] };
    itCourses?: { heading: string; links: LinkItem[] };
    plans?: LinkItem[];
    linkTo?: string;
    subMenu?: SubMenuNavProps[];
  }[];
}

// Extended type for nav items that can have subMenu
type ExtendedNavItem = {
  value: string;
  title: string;
  heading?: string;
  paragraph?: string;
  outerPadding?: string;
  links?: LinkItem[];
  linkTo?: string;
  subMenu?: SubMenuNavProps[];
};

export default function MobileNav({ companyData }: MobileNavProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);
  const [dropDownLogin, setDropDownLogin] = useState(false);
  const [dropDownSignup, setDropDownSignup] = useState(false);
  // const router = useRouter();

  const handleLoginClick = () => {
    setDropDownSignup(false);
    setDropDownLogin(true);
  };
  const handleSignupClick = () => {
    setDropDownLogin(false);
    setDropDownSignup(true);
  };

  const handleClose = () => {
    setDropDownSignup(false);
    setDropDownLogin(false);
  };

  function handleClick(index: number) {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  const MobileNavData: ExtendedNavItem[] = [...companyData];

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="default" className="bg-background">
          <Image src={MobileNavIcon} alt="Side bar open icon" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className={`bg-background text-white z-50 transition-transform duration-300 ${
          isSheetOpen
            ? "animate-slide-in-from-right"
            : "animate-slide-out-to-right"
        }`}
      >
        <SheetHeader>
          <SheetTitle className="hidden">Mobile Nav Dropdown menu</SheetTitle>
          <SheetDescription className="hidden">
            To navigae to diffrent page click here
          </SheetDescription>
        </SheetHeader>
        <div className="w-full flex flex-col overflow-y-auto p-4">
          {MobileNavData.map((item, index) => {
            const isOpen = openIndex === index;
            const hasLinks = item?.links && item?.links.length > 0;
            const hasSubMenu = item?.subMenu && item?.subMenu.length > 0;
            return (
              <div key={index} className="py-2">
                {!item?.links ? (
                  <Link href={`${item?.linkTo}`}>
                    <div
                      className="w-full flex justify-between items-center gap-2"
                      onClick={() => handleClick(index)}
                    >
                      <h3 className="text-base text-white capitalize">
                        {item?.title}
                      </h3>
                    </div>
                  </Link>
                ) : (
                  <div
                    className="w-full flex justify-between items-center gap-2"
                    onClick={() => handleClick(index)}
                  >
                    <h3 className="text-base text-white capitalize">
                      {item?.title}
                    </h3>
                    {(hasLinks || hasSubMenu) && (
                      <span
                        className={`min-w-6 min-h-6 flex justify-center items-center transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <Image
                          src={arrowDownIcon}
                          alt="Arrow Down Icon"
                          width={24}
                          height={24}
                        />
                      </span>
                    )}
                  </div>
                )}
                {hasLinks && (
                  <div
                    ref={(el) => {
                      if (el) contentRefs.current[index] = el;
                    }}
                    className="transition-max-height overflow-hidden"
                    style={{
                      maxHeight: isOpen
                        ? `${contentRefs.current[index]?.scrollHeight}px`
                        : "0px",
                      transition: "max-height 0.3s ease",
                    }}
                    aria-hidden={!isOpen}
                    tabIndex={!isOpen ? -1 : 0}
                  >
                    <ul className="flex flex-col gap-2.5 px-2 py-3">
                      {item.links &&
                        item?.links.map((link, linkIndex) => (
                          <Link
                            href={link?.href}
                            key={`${linkIndex}-${link?.label}`}
                          >
                            <li className="text-sm text-white/80">
                              {link?.label}
                            </li>
                          </Link>
                        ))}
                    </ul>
                  </div>
                )}
                {hasSubMenu && (
                  <div
                    ref={(el) => {
                      if (el) contentRefs.current[index] = el;
                    }}
                    className="transition-max-height overflow-hidden"
                    style={{
                      maxHeight: isOpen
                        ? `${contentRefs.current[index]?.scrollHeight}px`
                        : "0px",
                      transition: "max-height 0.3s ease",
                    }}
                    aria-hidden={!isOpen}
                    tabIndex={!isOpen ? -1 : 0}
                  >
                    <div className="flex flex-col gap-3 py-2 ">
                      {item.subMenu &&
                        item?.subMenu.map((subMenu, subMenuIndex) => (
                          <div
                            key={`${subMenuIndex}-${subMenu?.heading}`}
                            className="w-full flex-col gap-2 "
                          >
                            <h4 className="text-sm text-white capitalize">
                              {subMenu?.heading}
                            </h4>
                            <ul className="flex flex-col gap-2.5 px-2 py-2">
                              {subMenu?.links &&
                                subMenu?.links.map((link, linkIndex) => (
                                  <Link
                                    href={link?.href}
                                    key={`${linkIndex}-${link?.label}`}
                                  >
                                    <li className="text-xs text-white/80">
                                      {link?.label}
                                    </li>
                                  </Link>
                                ))}
                            </ul>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <SheetFooter>
          <div className="w-full flex flex-col-reverse gap-4 pt-8">
            <div className="w-full h-full flex flex-col-reverse gap-4">
              <CustomButton
                onClick={handleSignupClick}
                otherCSSProperty="w-full"
              >
                Get Started
              </CustomButton>
              <ShimmerButton
                onClick={handleLoginClick}
                className="w-full btn-primary px-6"
              >
                Login
              </ShimmerButton>
              {(dropDownLogin || dropDownSignup) && (
                <div className="relative w-full flex flex-col bg-black/20 backdrop-blur-md rounded-lg border border-white/20 shadow-lg z-50 overflow-auto overflow-x-hidden transition-all duration-200 ease-out whitespace-nowrap">
                  <div
                    className={
                      "w-full flex flex-col justify-center rounded-md border border-white/0 hover:bg-white/7 p-4 px-3 py-2.5 gap-2.5"
                    }
                  >
                    <div>
                      <h2 className="text-sm font-medium bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                        {dropDownLogin ? "Login" : "Register"} as a
                        Talent/Freelancer
                      </h2>
                      <p className="text-[10px] text-dark_mode-300">
                        Showcase your skills. Highlight your expertise.
                      </p>
                    </div>
                    <div className="w-full flex items-center justify-between">
                      <Link
                        href={"https://youtu.be/n7BQfAV28tg?feature=shared"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark_mode-300 underline underline-offset-4"
                      >
                        <p className="text-xs font-medium bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                          Walkthrough Video
                        </p>
                      </Link>
                      <Link
                        href={`https://va.hyi.ai/talent-${
                          dropDownLogin ? "login" : "signup"
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CustomButton otherCSSProperty="text-[10px] px-5">
                          {dropDownLogin ? "Login" : "Register"}
                        </CustomButton>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full border-t-[1px] border-white/15" />
                  <div
                    className={
                      "w-full flex flex-col justify-center rounded-md border border-white/0 p-4 hover:bg-white/7 transition px-3 py-2.5 gap-2.5"
                    }
                  >
                    <div>
                      <h2 className="text-sm font-medium bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                        {dropDownLogin ? "Login" : "Register"} as a
                        Company/Startups
                      </h2>
                      <p className="text-[10px] text-dark_mode-300">
                        Hire easily remote, hybrid, or in-office employees.
                      </p>
                    </div>
                    <div className="w-full flex items-center justify-end">
                      <Link
                        href={`https://va.hyi.ai/company-${
                          dropDownLogin ? "login" : "signup"
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CustomButton otherCSSProperty="text-[10px] px-5">
                          {dropDownLogin ? "Login" : "Register"}
                        </CustomButton>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="absolute top-2 right-2 w-fit h-fit"
                    onClick={handleClose}
                  >
                    <X size={16} strokeWidth={1.5} className="text-white" />
                  </div>
                </div>
              )}
            </div>
            {/* <HeaderButtons /> */}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
