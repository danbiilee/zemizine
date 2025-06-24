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
import { useState } from "react";
import NextButton from "./next-button";

import defaultProfileImage from "~/assets/images/my-notion-face-transparent.png";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "닉네임은 2글자 이상 10글자 이하여야 합니다.",
  }),
  profileImage: z.instanceof(File).optional(),
});

export default function OnboardingProfile() {
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
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
          내 프로필을 작성해주세요!
        </h2>
        <p className="lg:text-lg">나중에 언제든 수정할 수 있어요!</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-8 lg:gap-13"
        >
          <div className="flex flex-col gap-4 text-sm">
            {/* 프로필 이미지 */}
            <FormField
              control={form.control}
              name="profileImage"
              render={({ field }) => (
                <FormItem className="relative flex flex-col gap-0 items-center justify-center w-full border-2 border-foreground">
                  <img
                    src={preview || defaultProfileImage}
                    alt="미리보기"
                    className="size-fit object-cover border-b-2 border-foreground"
                  />
                  <FormControl>
                    {/* TODO: 커스텀 파일업로드 버튼 적용 */}
                    <Input
                      className="rounded-none border-none"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        field.onChange(file);
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () =>
                            setPreview(reader.result as string);
                          reader.readAsDataURL(file);
                        } else {
                          setPreview(null);
                        }
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* 닉네임 */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="px-3 md:px-5 py-5 md:py-6 border-2 border-foreground md:text-base placeholder:text-muted-foreground"
                      placeholder="어떤 이름으로 불리고 싶나요?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="mt-[-2px]" />
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
