import { Input } from "../ui/input";

export default function ZemiInput(props: React.ComponentProps<"input">) {
  return (
    <Input
      className="px-3 md:px-5 py-5 md:py-6 border-2 border-foreground text-sm md:text-base placeholder:text-muted-foreground placeholder:text-sm md:placeholder:text-base"
      {...props}
    />
  );
}
