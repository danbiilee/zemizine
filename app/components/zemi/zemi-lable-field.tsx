import { Label } from "~/components/ui/label";

interface ZemiLableFieldProps {
  name: string;
  label: string;
  children: React.ReactNode;
}

export default function ZemiLableField({
  name,
  label,
  children,
}: ZemiLableFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={name} className="ml-1 text-sm md:text-base">
        {label}
      </Label>
      {children}
    </div>
  );
}
