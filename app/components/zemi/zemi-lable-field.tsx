import { Label } from "~/components/ui/label";
import { cn } from "~/lib/utils";
interface ZemiLableFieldProps {
  name: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}

export default function ZemiLableField({
  name,
  label,
  children,
  className,
}: ZemiLableFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <Label htmlFor={name} className="ml-1 text-sm md:text-base">
        {label}
      </Label>
      {children}
    </div>
  );
}
