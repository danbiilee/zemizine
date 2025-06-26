import PrivateLayout from "~/components/layouts/private-layout";
import Guestbook from "./components/guestbook";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import notionFace from "~/assets/images/my-notion-face-transparent.png";

export default function Guestbooks() {
  return (
    <PrivateLayout>
      <div className="flex-1 flex flex-col min-h-0 bg-primary-foreground">
        <ScrollArea type="auto" className="h-full pr-3.5">
          <div className="flex flex-col gap-10 m-4">
            {/* 방명록 작성 영역 */}
            <div className="p-4 bg-zinc-200">
              <div className="flex gap-4">
                <img src={notionFace} alt="profile" className="size-30" />
                <Textarea
                  placeholder="친구에게 하고 싶은 말을 입력해주세요"
                  className="min-h-16 border-none bg-primary-foreground shadow-none text-sm lg:text-base placeholder:text-foreground-muted placeholder:text-sm lg:placeholder:text-base resize-none"
                />
              </div>
              <div className="flex justify-end mt-4">
                <Button className="ml-2 px-3.5 py-1 rounded-md border-2 border-foreground font-semibold transition-all-300 hover:bg-accent">
                  등록
                </Button>
              </div>
            </div>

            {/* 방명록 목록 영역 */}
            <Guestbook />
            {/* <div className="flex flex-col gap-8">
              {Array.from({ length: 15 }).map((_, idx) => (
                <Guestbook key={idx} />
              ))}
            </div> */}

            {/* 페이지네이션 영역 */}
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </ScrollArea>
      </div>
    </PrivateLayout>
  );
}
