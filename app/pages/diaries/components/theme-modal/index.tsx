import { useState } from "react";
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
  coverTitle: z.string().min(1, {
    message: "타이틀은 1글자 이상, 20글자 이하여야 해요!",
  }),
  coverDescription: z.string().min(1, {
    message: "설명은 1글자 이상, 100글자 이하여야 해요!",
  }),
  coverImage: z.instanceof(File).optional(),
});

interface ThemeModalProps {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ThemeModal({ open, onOpenChange }: ThemeModalProps) {
  const [monthlyBook, setMonthlyBook] = useState({
    coverTitle: "",
    coverDescription: "",
    coverImage: null,
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      coverTitle: monthlyBook.coverTitle,
      coverDescription: monthlyBook.coverDescription,
    },
  });

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
            name="coverTitle"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ZemiLableField name="coverTitle" label="타이틀">
                    <Input
                      className="input-outline h-10!"
                      id="coverTitle"
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
            name="coverDescription"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ZemiLableField name="coverDescription" label="설명">
                    <Textarea
                      className="input-outline max-h-30"
                      id="coverDescription"
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
                      defaultPreviewImage={defaultPreviewImage}
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
