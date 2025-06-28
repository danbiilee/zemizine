import PrivateLayout from "~/components/layouts/private-layout";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import GuestbookWriter from "./components/guestbook-writer";
import GuestbookItem from "./components/guestbook-item";

export default function Guestbooks() {
  return (
    <PrivateLayout>
      <div className="flex flex-col gap-8 md:gap-10 m-4">
        {/* 방명록 작성 영역 */}
        <GuestbookWriter />

        {/* 방명록 목록 영역 */}
        <div className="flex flex-col gap-6 md:gap-8">
          {Array.from({ length: 15 }).map((_, idx) => (
            <GuestbookItem key={idx} />
          ))}
        </div>

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
    </PrivateLayout>
  );
}
