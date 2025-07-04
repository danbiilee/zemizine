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
import ZemiFileUpload from "~/components/zemi/zemi-file-upload";
import { Input } from "~/components/ui/input";
import defaultPreviewImage from "~/assets/images/my-notion-face-transparent.png";

import type { OnboardingState } from "../..";

const FormSchema = z.object({
  myNickname: z.string().min(2, {
    message: "이름은 2글자 이상, 10글자 이하여야 해요!",
  }),
  myProfileImage: z.instanceof(File).optional(),
});

interface OnboardingProfileProps {
  myNickname: string;
  myProfileImage?: File;
  handleClick: (data: Partial<OnboardingState["data"]>) => void;
}

export default function OnboardingUser({
  myNickname,
  myProfileImage,
  handleClick,
}: OnboardingProfileProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      myNickname,
    },
  });

  const onSubmit = ({
    myNickname,
    myProfileImage,
  }: z.infer<typeof FormSchema>) => {
    // 부모 컴포넌트에 데이터 업데이트
    handleClick({
      myNickname,
      myProfileImage,
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-center-x flex-col gap-10 w-full"
      >
        <div className="flex flex-col gap-4">
          {/* 닉네임 */}
          <FormField
            control={form.control}
            name="myNickname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="input-outline px-3 md:px-5 py-5 md:py-6"
                    placeholder="어떤 이름으로 불리고 싶나요?"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="-mt-[4px]" />
              </FormItem>
            )}
          />
          {/* 프로필 이미지 */}
          <FormField
            control={form.control}
            name="myProfileImage"
            render={({ field }) => (
              <ZemiFileUpload
                defaultPreviewImage={defaultPreviewImage}
                buttonLabel="프로필 이미지 업로드"
                field={field}
              />
            )}
          />
        </div>
      </form>
    </Form>
  );
}
