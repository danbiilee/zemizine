import { Textarea } from "../ui/textarea";

export default function ZemiTextarea(props: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      className="px-3 md:px-5 border-2 border-foreground  text-sm md:text-base placeholder:text-muted-foreground placeholder:text-sm md:placeholder:text-base"
      {...props}
    />
  );
}
