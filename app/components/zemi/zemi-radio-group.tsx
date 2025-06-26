import { FormControl, FormLabel, FormItem } from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface Option {
  value: string;
  label: string;
}

interface ZemiRadioGroupProps extends React.ComponentProps<typeof RadioGroup> {
  options: Option[];
}

export default function ZemiRadioGroup({
  options,
  ...props
}: ZemiRadioGroupProps) {
  return (
    <RadioGroup className="flex-center-y! flex-col gap-4" {...props}>
      {options.map((option) => (
        <ZemiRadioGroupItem key={option.value} {...option} />
      ))}
    </RadioGroup>
  );
}

function ZemiRadioGroupItem({ value, label }: Option) {
  return (
    <FormItem className="flex">
      <FormControl>
        <RadioGroupItem value={value} />
      </FormControl>
      <FormLabel className="font-normal md:text-base">{label}</FormLabel>
    </FormItem>
  );
}
