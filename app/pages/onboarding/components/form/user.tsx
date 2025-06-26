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
import { Input } from "~/components/ui/input";
import { useState, useEffect } from "react";
import NextButton from "./button";

import defaultProfileImage from "~/assets/images/my-notion-face-transparent.png";

import type { OnboardingState } from "../..";

const FormSchema = z.object({
  nickname: z.string().min(2, {
    message: "이름은 2글자 이상, 10글자 이하여야 해요!",
  }),
  profileImage: z.instanceof(File).optional(),
});

interface OnboardingProfileProps {
  myNickname?: string;
  myProfileImage?: File;
  handleClick: (data: Partial<OnboardingState["data"]>) => void;
}

export default function OnboardingUser({
  myNickname,
  myProfileImage,
  handleClick,
}: OnboardingProfileProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nickname: myNickname,
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    // 부모 컴포넌트에 데이터 업데이트
    handleClick({
      myNickname: data.nickname,
      myProfileImage: data.profileImage,
    });
  };

  // 프로필 이미지 미리보기 설정
  useEffect(() => {
    if (myProfileImage) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(myProfileImage);
    } else {
      setPreview(null);
    }
  }, [myProfileImage]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-8 lg:gap-13"
      >
        <div className="flex flex-col gap-4 text-sm">
          {/* 프로필 이미지 */}
          {/* 잼 주인은 어떤 이미지인가요? */}
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
            name="nickname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="px-3 md:px-5 py-5 md:py-6 border-2 border-foreground md:text-base placeholder:text-sm placeholder:text-muted-foreground"
                    placeholder="어떤 이름으로 불리고 싶나요?"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="mt-[-2px]" />
              </FormItem>
            )}
          />
        </div>
        <NextButton title="다음" onClick={() => {}} />
      </form>
    </Form>
  );
}
