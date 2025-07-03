import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import ZemiDialog from "~/components/zemi/zemi-dialog";
import ZemiLableField from "~/components/zemi/zemi-lable-field";
import ZemiFileUpload from "~/components/zemi/zemi-file-upload";
import defaultPreviewImage from "~/assets/images/my-notion-face-transparent.png";
import { Form, FormControl, FormField, FormItem } from "~/components/ui/form";

const FormSchema = z.object({
  title: z.string().min(1, {
    message: "타이틀은 1글자 이상, 16글자 이하여야 해요!",
  }),
  description: z.string().optional(),
  coverImage: z.instanceof(File).optional(),
});

interface ThemeModalProps {
  monthlyTheme: {
    title?: string;
    description?: string;
    coverImage?: string;
  };
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ThemeModal({
  monthlyTheme,
  open,
  onOpenChange,
}: ThemeModalProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: monthlyTheme.title ?? "",
      description: monthlyTheme.description ?? "",
    },
  });

  useEffect(() => {
    form.reset({
      title: monthlyTheme.title ?? "",
      description: monthlyTheme.description ?? "",
    });
  }, [monthlyTheme, form]);

  return (
    <ZemiDialog
      open={open}
      onOpenChange={onOpenChange}
      title="이번달 테마 설정하기"
      description="테마에 맞는 사진과 자료를 모아 나만의 먼슬리북을 만들어보세요!"
    >
      <Form {...form}>
        <form className="flex flex-col gap-4">
          {/* 타이틀 */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ZemiLableField name="title" label="타이틀">
                    <Input
                      className="input-outline h-10!"
                      id="title"
                      placeholder="타이틀을 입력해주세요"
                      {...field}
                    />
                  </ZemiLableField>
                </FormControl>
              </FormItem>
            )}
          />

          {/* 설명 */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ZemiLableField name="description" label="설명">
                    <Textarea
                      className="input-outline max-h-30"
                      id="description"
                      placeholder="테마에 대해 설명해주세요"
                      {...field}
                    />
                  </ZemiLableField>
                </FormControl>
              </FormItem>
            )}
          />

          {/* 커버 이미지 업로드 */}
          <FormField
            control={form.control}
            name="coverImage"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ZemiLableField name="coverImage" label="커버 이미지">
                    <ZemiFileUpload
                      id="coverImage"
                      defaultPreviewImage={
                        monthlyTheme.coverImage ?? defaultPreviewImage
                      }
                      {...field}
                    />
                  </ZemiLableField>
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </ZemiDialog>
  );
}
