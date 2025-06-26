import { useRef } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FormControl, FormItem } from "../ui/form";

import type { ControllerRenderProps } from "react-hook-form";

interface ZemiFileUploadProps {
  field: ControllerRenderProps<
    {
      myNickname: string;
      myProfileImage?: File | undefined;
    },
    "myProfileImage"
  >;
  preview: string;
  setPreview: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function ZemiFileUpload({
  field,
  preview,
  setPreview,
}: ZemiFileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <FormItem className="relative flex-center flex-col gap-0 w-full border-2">
      <FormControl>
        <div>
          <Input
            ref={inputRef}
            className="hidden"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              field.onChange(file);
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => setPreview(reader.result as string);
                reader.readAsDataURL(file);
              } else {
                setPreview(null);
              }
            }}
          />
          <Button
            className="w-full px-4 py-2 text-center font-semibold"
            onClick={() => inputRef.current?.click()}
          >
            업로드
          </Button>
        </div>
      </FormControl>
      <img
        src={preview}
        alt="미리보기"
        className="size-fit object-cover border-t-2"
      />
    </FormItem>
  );
}
