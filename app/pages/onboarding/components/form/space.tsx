import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "~/components/ui/form";
import NextButton from "./button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

import type { OnboardingState } from "../..";

const FormSchema = z.object({
  zemTitle: z.string().min(2, {
    message: "잼 이름은 2글자 이상, 12글자 이하여야 해요!",
  }),
  zemDescription: z.string().optional(),
});

interface OnboardingSpaceProps {
  zemTitle: string;
  zemDescription: string;
  handleClick: (data: Partial<OnboardingState["data"]>) => void;
}

export default function OnboardingSpace({
  zemTitle,
  zemDescription,
  handleClick,
}: OnboardingSpaceProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      zemTitle,
      zemDescription,
    },
  });

  const onSubmit = ({
    zemTitle,
    zemDescription,
  }: z.infer<typeof FormSchema>) => {
    handleClick({ zemTitle, zemDescription });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-10 w-full"
      >
        <div className="flex flex-col gap-4">
          {/* 홈피 타이틀 */}
          <FormField
            control={form.control}
            name="zemTitle"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="input-outline px-3 md:px-5 py-5 md:py-6"
                    placeholder="잼에 어울리는 이름을 붙여주세요"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="mt-[-2px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zemDescription"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    className="input-outline px-3 md:px-5"
                    placeholder="내 잼은 이런 공간이에요!"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <NextButton title="다음" />
      </form>
    </Form>
  );
}
