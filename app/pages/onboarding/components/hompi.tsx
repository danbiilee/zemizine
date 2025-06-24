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
import NextButton from "./next-button";
import { Textarea } from "~/components/ui/textarea";

const FormSchema = z.object({
  homepiTitle: z.string().min(2, {
    message: "홈피 타이틀은 1글자 이상 12글자 이하여야 합니다.",
  }),
  homepiDescription: z.string().optional(),
});

export default function OnboardingHomepi() {
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
    <div className="flex-1 w-full">
      <div className="mb-8 lg:mb-13 text-center">
        <h2 className="mb-5 lg:mb-10 text-xl md:text-2xl lg:text-3xl font-bold">
          내 홈피에 대해 작성해주세요!
        </h2>
        <p className="lg:text-lg">나중에 언제든 수정할 수 있어요!</p>
      </div>
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
                      placeholder="타이틀은 무엇인가요?"
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
                      placeholder="내 홈피에 대해 설명해주세요"
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
    </div>
  );
}
