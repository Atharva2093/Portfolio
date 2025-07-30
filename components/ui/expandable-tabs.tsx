"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Tab {
  title: string;
  icon: LucideIcon;
  type?: never;
}

interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
}

type TabItem = Tab | Separator;

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  hover: {
    gap: ".5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  hover: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: "spring" as const, bounce: 0, duration: 0.6 };

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-blue-400",
  onChange,
}: ExpandableTabsProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const outsideClickRef = React.useRef(null);

  useOnClickOutside(outsideClickRef, () => {
    setHoveredIndex(null);
  });

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index: number) => {
    onChange?.(index);
  };

  const Separator = () => (
    <div className="mx-1 h-[24px] w-[1.2px] bg-gray-700" aria-hidden="true" />
  );

  return (
    <div
      ref={outsideClickRef}
      className={cn(
        "flex flex-wrap items-center gap-2 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-1 shadow-lg",
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;
        const isHovered = hoveredIndex === index;
        
        return (
          <motion.button
            key={tab.title}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
            transition={transition}
            className={cn(
              "relative flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer",
              isHovered
                ? cn("bg-gray-800/80 border border-gray-700 shadow-lg", activeColor)
                : "text-gray-400 hover:bg-gray-800/50 hover:text-gray-300 hover:border-gray-700"
            )}
          >
            <Icon size={20} />
            <AnimatePresence initial={false}>
              {isHovered && (
                <motion.span
                  variants={spanVariants}
                  initial="initial"
                  animate="hover"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
} 