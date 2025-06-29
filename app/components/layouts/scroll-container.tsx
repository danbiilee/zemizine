import { cn } from "~/lib/utils";

interface ScrollContainerProps {
  children: React.ReactNode;
  scrollable?: boolean;
  className?: string;
}

export default function ScrollContainer({
  children,
  scrollable = true,
  className,
}: ScrollContainerProps) {
  return (
    <div
      className={cn(
        "flex-1",
        scrollable ? "overflow-y-auto scrollbar" : "overflow-y-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
