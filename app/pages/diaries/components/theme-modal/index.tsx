import { Dialog } from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import {
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { useState } from "react";

interface ThemeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ThemeModal({ open, onOpenChange }: ThemeModalProps) {
  const [cover, setCover] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setCover(file ?? null);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>이번달 테마 설정하기</DialogTitle>
            <DialogDescription>
              테마에 맞는 사진과 자료를 모아 나만의 먼슬리북을 만들어보세요!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            {/* 타이틀 */}
            <div className="grid gap-3">
              <Label htmlFor="title">타이틀</Label>
              <Input id="title" name="title" defaultValue="UNTITLED" />
            </div>
            {/* 설명 */}
            <div className="grid gap-3">
              <Label htmlFor="description">설명</Label>
              <Textarea
                id="description"
                name="description"
                defaultValue="테마에 대해 설명해주세요"
              />
            </div>
            {/* 커버 이미지 업로드 */}
            <div className="grid gap-3">
              <Label htmlFor="cover-upload">커버 이미지</Label>
              <input
                id="cover-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <label htmlFor="cover-upload">
                <Button type="button" className="mb-2">
                  이미지 선택
                </Button>
              </label>
              {preview && (
                <img
                  src={preview}
                  alt="커버 미리보기"
                  className="w-full h-32 object-cover rounded border"
                />
              )}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
