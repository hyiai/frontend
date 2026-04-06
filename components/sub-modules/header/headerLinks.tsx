"use client";

// React Imports
import React, { ReactNode, useState } from "react";

// Next Imports
import Link from "next/link";
import Image from "next/image";

// Lib Import
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

// Image/Icon Import
// import ArrowDownIcon from "@/assets/arrowIcons/chevron-down.svg";
// import ArrowRightIcon from "@/assets/arrowIcons/brand-arrow-right.svg";

// Type/Interface declaration
interface LinkItem {
  label: string;
  href: string;
  text?: string;
  icon?: string;
}

export interface SubMenuNavProps {
  heading: string;
  paragraph?: string;
  outerPadding?: string;
  links?: LinkItem[];
  gridCol?: string;
  grid?: boolean;
}

interface SubMenuWithNoOfColumns extends SubMenuNavProps {
  colCount: number;
}

interface NavProps {
  value: string;
  title: string;
  heading?: string;
  paragraph?: string;
  outerPadding?: string;
  links?: LinkItem[];
  subMenu?: SubMenuNavProps[];
}

interface LinkListProps {
  links: LinkItem[];
  gap?: string;
  grid?: boolean;
  gridColumn?: string;
  linksItemClassName?: string;
}

interface HeaderLinksProps {
  className?: string;
  navItems?: NavProps;
  mainLinkDestination?: string;
  gapBetweendropDown?: string;
  hasDropdownContent?: boolean;
  headingWrap?: boolean;
  relativeCSS?: string;
  children: ReactNode;
  css?: string;
  gridColumn?: string;
  subItems?: SubMenuNavProps[];
}

interface MultipleSubMenuHeaderLinksProps {
  subMenu: SubMenuNavProps[];
  headingWrap?: boolean;
  gapBetweendropDown: string;
}

interface NavLinkProps {
  link: LinkItem;
  className?: string;
}

const NavLink = ({ link, className = "" }: NavLinkProps) => {
  return (
    <Link
      href={link.href}
      className={cn(
        "w-full flex flex-col justify-center rounded-md border border-white/0 p-4 hover:bg-white/2 hover:border-white/10 transition px-3 py-2.5 gap-0.5",
        link?.text && "max-w-[280px] text-wrap",
        className
      )}
    >
      <div className="w-full flex gap-2">
        {link.icon && (
          <Image src={link.icon} alt="icon" width={20} height={20} />
        )}
        <span className="text-base font-medium bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent break-words">
          {link.label}
        </span>
      </div>
      {link.text && <p className="text-sm text-dark_mode-300">{link.text}</p>}
    </Link>
  );
};

const LinkList = ({
  links = [],
  gap = "",
  grid = true,
  gridColumn,
  linksItemClassName = "",
}: LinkListProps) => {
  if (!links.length) return null;

  const getGridCols = (linkCount: number): string => {
    switch (true) {
      case linkCount <= 5:
        return "grid-cols-1";
      case linkCount <= 8:
        return "grid-cols-2";
      case linkCount <= 9:
        return "grid-cols-3";
      case linkCount <= 12:
        return "min-[1024px]:grid-cols-3 min-[1400px]:grid-cols-4";
      default:
        return "min-[1024px]:grid-cols-3 min-[1400px]:grid-cols-4";
    }
  };

  const gridCols = getGridCols(links.length);
  let ulClassName = "w-full ";

  if (grid) {
    if (gridColumn?.length !== 0) {
      ulClassName += `grid ${gridColumn}`;
    } else {
      ulClassName += `grid ${gridCols}`;
    }
  } else {
    ulClassName += "flex flex-col";
  }

  return (
    <ul className={cn(ulClassName, gap)}>
      {links.map((link, index) => (
        <NavLink key={index} link={link} className={linksItemClassName} />
      ))}
    </ul>
  );
};

const SectionHeader = ({
  heading,
  paragraph,
  headingWrap,
  css = ""
}: {
  heading?: string;
  paragraph?: string;
  headingWrap?: boolean;
    css?: string;
}) => {
  if (!heading) return null;
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-1",
        headingWrap && "max-w-[440px] text-wrap", css
      )}
    >
      <h2 className="text-base font-semibold text-dark_mode-100 capitalize">
        {heading}
      </h2>
      {paragraph && (
        <p className="max-w-4xl text-sm text-wrap text-dark_mode-300">
          {paragraph}
        </p>
      )}
    </div>
  );
};

function MultipleSubMenuHeaderLinks({
  subMenu,
  headingWrap = false,
}: MultipleSubMenuHeaderLinksProps) {

  const subMenuWithNoOfColumns: SubMenuWithNoOfColumns[] = subMenu.map((menu) => {
    const linkCount = menu.links?.length || 0;
    let columns = menu.gridCol ? Number(menu.gridCol) : 0;

    if (!menu.gridCol) {
      if (linkCount <= 6) {
        columns = 1;
      } else if (linkCount <= 9) {
        columns = 2;
      } else {
        columns = 3;
      }
    } else {
      const splitText = (menu.gridCol ?? "").split("-");
      const lastPart = splitText[splitText.length - 1];
      const parsedColumns = Number(lastPart);

      if (!isNaN(parsedColumns) && parsedColumns > 0) {
        columns = parsedColumns;
      } else {
        columns = 1;
      }
    }
    return {
      colCount: columns,
      ...menu,
    };
  });

  // Generate grid template columns with fixed-width spacers
  const generateGridTemplateColumns = (menus: SubMenuWithNoOfColumns[]) => {
    let template = '';

    menus.forEach((menu, index) => {
      template += `repeat(${menu.colCount}, 1fr) `;

      // for spacer
      if (index < menus.length - 1) {
        template += '60px';
      }
    });

    return template.trim();
  };

  return (
    <div
      className="w-full grid gap-2 auto-rows-[fit-content]"
      style={{
        gridTemplateColumns: generateGridTemplateColumns(subMenuWithNoOfColumns),
      }}
    >
      {/* First row - Headings span their respective column counts */}
      {subMenuWithNoOfColumns.map((menu, index) => {
        let startCol = 1;

        if (index > 0) {
          startCol = subMenuWithNoOfColumns
            .slice(0, index)
            .reduce((acc, m) => acc + m.colCount + 1, 1); // +1 for each spacer column
        }

        return (
          <div
            key={`heading-${index}`}
            className="w-full mb-2 pr-2"
            style={{
              gridColumn: `${startCol} / span ${menu.colCount}`,
            }}
          >
            <SectionHeader
              heading={menu.heading}
              paragraph={menu.paragraph}
              headingWrap={headingWrap}
              css="w-11/12"
            />
          </div>
        );
      })}

      {/* Subsequent rows - Links positioned in their respective columns */}
      {subMenuWithNoOfColumns.map((menu, menuIndex) => {
        let startCol = 1;

        if (menuIndex > 0) {
          // Calculate start column including spacer columns
          startCol = subMenuWithNoOfColumns
            .slice(0, menuIndex)
            .reduce((acc, m) => acc + m.colCount + 1, 1); // +1 for each spacer column
        }

        return (menu.links || []).map((link, linkIndex) => {
          const row = Math.floor(linkIndex / menu.colCount) + 2; // +2 because row 1 is for headings
          const col = startCol + (linkIndex % menu.colCount);

          return (
            <div
              key={`link-${menuIndex}-${linkIndex}`}
              className="w-full flex items-center justify-center"
              style={{
                gridRow: row,
                gridColumn: col,
              }}
            >
              <NavLink link={link} />
            </div>
          );
        });
      })}
    </div>
  );
}

export default function HeaderLinks({
  className = "flex items-center gap-1 p-2.5 pb-3.5",
  navItems,
  mainLinkDestination = "#",
  gapBetweendropDown = "gap-0.5",
  headingWrap = false,
  hasDropdownContent = true,
  relativeCSS = "left-1/2 -translate-x-1/2",
  css = "",
  gridColumn = "",
  children,
  ...props
}: HeaderLinksProps) {
  const [dropDown, setDropDown] = useState(false);
  // const hasDropdownContent =
  //   navItems?.links?.length ||
  //   navItems?.agiTraining?.links.length;

  return (
    <div className="relative z-50 flex flex-col rounded">
      <Link
        href={mainLinkDestination}
        className={className}
        {...props}
        onMouseEnter={() => setDropDown(true)}
        onMouseLeave={() => setDropDown(false)}
      >
        <span className="w-fit flex text-base font-medium text-dark_mode-300">
          {children}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "text-dark_mode-300",
            hasDropdownContent ? "flex" : "hidden",
            "transition-transform duration-300",
            dropDown ? "rotate-180" : "rotate-0"
          )}
        />
      </Link>

      {dropDown && hasDropdownContent && (
        <div
          className={cn(
            "absolute top-full w-max max-w-[85vw] xl:max-w-[1024px] 2xl:max-w-[1280px] flex flex-col bg-black/50 backdrop-blur-md rounded-lg border border-white/20 shadow-lg z-50 overflow-auto overflow-x-hidden transition-all duration-200 ease-out whitespace-nowrap gap-4",
            relativeCSS,
            css,
            navItems?.outerPadding === "large"
              ? "px-6 pt-5 pb-6"
              : navItems?.outerPadding === "medium"
              ? "p-4"
              : "p-2"
          )}
          onMouseEnter={() => setDropDown(true)}
          onMouseLeave={() => setDropDown(false)}
        >
          <SectionHeader
            heading={navItems?.heading}
            paragraph={navItems?.paragraph}
            headingWrap={headingWrap}
          />

          <div className={cn("w-full flex", gapBetweendropDown)}>
            {!navItems?.subMenu ? (
              <LinkList
                links={navItems?.links || []}
                gap={gapBetweendropDown}
                gridColumn={gridColumn}
                linksItemClassName="justify-start"
              />
            ) : (
              <MultipleSubMenuHeaderLinks
                subMenu={navItems?.subMenu || []}
                gapBetweendropDown={gapBetweendropDown}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
