import {
  DialogClose,
  DialogFooter,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import ScrollContainer from "../layouts/scroll-container";

interface ZemiDialogProps {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;

  title: string;
  description?: string;
  cancelText?: string;
  submitText?: string;
  children: React.ReactNode;
}

export default function ZemiDialog({
  open,
  onOpenChange,
  title,
  description,
  cancelText = "취소",
  submitText = "저장",
  children,
}: ZemiDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent forceMount className="sm:max-w-[450px]">
        {/* 헤더 */}
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {/* 컨텐츠 */}
        <div className="flex max-h-[550px] mx-4 border-2 bg-primary-foreground">
          <ScrollContainer className="p-4">{children}</ScrollContainer>
        </div>
        {/* 푸터 */}
        <DialogFooter>
          <DialogClose asChild>
            <Button className="btn-outline-muted px-8 py-1.5 text-muted-foreground">
              {cancelText}
            </Button>
          </DialogClose>
          <Button className="btn-accent px-8 py-1.5">{submitText}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
