import { cn } from "~/lib/utils";

interface AutoScrollContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function AutoScrollContainer({
  children,
  className,
}: AutoScrollContainerProps) {
  return (
    <div className={cn("overflow-y-auto scrollbar flex-1", className)}>
      {children}
    </div>
  );
}
