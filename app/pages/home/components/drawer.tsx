import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "~/lib/utils";

interface DrawerProps {
  isOpen: boolean;
  handleOpen: () => void;
  children: ReactNode;
}

export default function Drawer({ isOpen, handleOpen, children }: DrawerProps) {
  return (
    <div
      className={cn([
        "relative flex h-full border-l-2 shadow-xl transition-all-300",
        isOpen ? "w-[240px]" : "w-[28px]",
      ])}
    >
      <button
        className={cn([
          "absolute left-[1px] top-[2px] btn-ghost-accent",
          isOpen && "border-foreground bg-accent/85",
        ])}
        onClick={handleOpen}
      >
        {isOpen ? (
          <ChevronRight size={20} strokeWidth={3} />
        ) : (
          <ChevronLeft size={20} strokeWidth={3} />
        )}
      </button>
      <aside
        className={cn([
          "overflow-hidden transition-all-300",
          isOpen ? "w-[240px] opacity-100" : "w-0 opacity-0",
        ])}
      >
        {children}
      </aside>
    </div>
  );
}
