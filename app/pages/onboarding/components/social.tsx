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
  FormLabel,
} from "~/components/ui/form";
import { RadioGroupItem, RadioGroup } from "~/components/ui/radio-group";
import NextButton from "./next-button";

const FormSchema = z.object({
  socialType: z.enum(["PUBLIC", "FRIEND", "PRIVATE"], {
    required_error: "세 가지 중 하나의 타입을 선택해주세요.",
  }),
});

export default function OnboardingHomepi() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
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
          내 홈피의 공개 범위를 선택해주세요!
        </h2>
        <p className="lg:text-lg">나중에 언제든 수정할 수 있어요!</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-8 lg:gap-13"
        >
          <FormField
            control={form.control}
            name="socialType"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col items-center "
                  >
                    <FormItem className="flex">
                      <FormControl>
                        <RadioGroupItem value="PUBLIC" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        낯선 사람들과 소통할게요
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <RadioGroupItem value="FRIEND" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        친구들과 함께 할게요
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <RadioGroupItem value="PRIVATE" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        나만 볼 수 있어요
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage className="mt-[-2px]" />
              </FormItem>
            )}
          />
          <NextButton />
        </form>
      </Form>
    </div>
  );
}
