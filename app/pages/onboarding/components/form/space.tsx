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
import { Input } from "~/components/ui/input";
import NextButton from "./button";
import { Textarea } from "~/components/ui/textarea";

const FormSchema = z.object({
  homepiTitle: z.string().min(2, {
    message: "잼 이름은 2글자 이상, 12글자 이하여야 해요!",
  }),
  homepiDescription: z.string().optional(),
});

export default function OnboardingSpace() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      homepiTitle: "",
      homepiDescription: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-8 lg:gap-13"
      >
        <div className="flex flex-col gap-4 w-full text-sm">
          {/* 홈피 타이틀 */}
          <FormField
            control={form.control}
            name="homepiTitle"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="px-3 md:px-5 py-5 md:py-6 border-2 border-foreground md:text-base placeholder:text-muted-foreground"
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
            name="homepiDescription"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    className="px-3 md:px-5 border-2 border-foreground md:text-base placeholder:text-muted-foreground"
                    placeholder="내 잼은 이런 공간이에요!"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <NextButton />
      </form>
    </Form>
  );
}
