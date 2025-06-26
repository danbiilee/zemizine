import { cn } from "~/lib/utils";
import { forwardRef } from "react";

interface CustomScrollAreaProps {
  children: React.ReactNode;
  className?: string;
  orientation?: "vertical" | "horizontal" | "both";
  scrollHideDelay?: number;
  type?: "auto" | "always" | "scroll" | "hover";
}

const CustomScrollArea = forwardRef<HTMLDivElement, CustomScrollAreaProps>(
  ({ children, className, orientation = "vertical", type = "auto" }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-auto",
          {
            "overflow-y-auto overflow-x-hidden": orientation === "vertical",
            "overflow-x-auto overflow-y-hidden": orientation === "horizontal",
            "overflow-auto": orientation === "both",
          },
          {
            "scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400":
              type === "hover",
            "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent":
              type === "always",
            "scrollbar-none": type === "auto",
          },
          className
        )}
      >
        {children}
      </div>
    );
  }
);

CustomScrollArea.displayName = "CustomScrollArea";

export { CustomScrollArea };
