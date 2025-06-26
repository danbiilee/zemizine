import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "~/components/ui/form";
import ZemiRadioGroup from "~/components/zemi/zemi-radio-group";
import NextButton from "./button";
import { VISIBILITY_OPTIONS } from "../../constants";

import type { OnboardingState } from "../..";

const FormSchema = z.object({
  zemVisibility: z.enum(["PUBLIC", "FRIEND", "PRIVATE"], {
    required_error: "세 가지 중 하나의 타입을 선택해주세요.",
  }),
});

interface OnboardingVisibilityProps {
  zemVisibility: OnboardingState["data"]["zemVisibility"];
  handleLastClick: (data: Partial<OnboardingState["data"]>) => void;
}

export default function OnboardingVisibility({
  zemVisibility,
  handleLastClick,
}: OnboardingVisibilityProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      zemVisibility,
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    handleLastClick(data);
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-10 w-full"
      >
        <FormField
          control={form.control}
          name="zemVisibility"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <ZemiRadioGroup
                  options={VISIBILITY_OPTIONS}
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <NextButton title="이걸로 완성할게요" />
      </form>
    </Form>
  );
}
