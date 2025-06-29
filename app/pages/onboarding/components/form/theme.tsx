import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Form, FormField, FormItem, FormControl } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import ZemiFileUpload from "~/components/zemi/zemi-file-upload";
import defaultPreviewImage from "~/assets/images/my-notion-face-transparent.png";

import type { OnboardingState } from "../..";

const FormSchema = z.object({
  monthlyTitle: z.string().optional(),
  monthlyDescription: z.string().optional(),
  monthlyCoverImage: z.instanceof(File).optional(),
});

interface OnboardingThemeProps {
  monthlyTitle?: string;
  monthlyDescription?: string;
  monthlyCoverImage?: File;
  handleLastClick: (data: Partial<OnboardingState["data"]>) => void;
}

export default function OnboardingTheme({
  monthlyTitle,
  monthlyDescription,
  monthlyCoverImage,
  handleLastClick,
}: OnboardingThemeProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      monthlyTitle,
      monthlyDescription,
      monthlyCoverImage,
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
        className="flex flex-col gap-4 w-full"
      >
        {/* 타이틀 */}
        <FormField
          control={form.control}
          name="monthlyTitle"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="input-outline px-3 md:px-5 py-5 md:py-6"
                  placeholder="먼슬리북에 제목을 붙여주세요 (예: 고영희 콜렉션)"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* 설명 */}
        <FormField
          control={form.control}
          name="monthlyDescription"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="input-outline px-3 md:px-5"
                  placeholder="먼슬리북을 소개해주세요 (예: 고양이와 함께 하는 6월 한 달)"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* 커버 이미지 */}
        <FormField
          control={form.control}
          name="monthlyCoverImage"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <ZemiFileUpload
                  defaultPreviewImage={defaultPreviewImage}
                  buttonLabel="커버 이미지 업로드"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
