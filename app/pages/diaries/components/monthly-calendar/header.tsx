import { FaRegPenToSquare, FaRegPaperPlane } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Button } from "~/components/ui/button";

interface MonthlyCalendarHeaderProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MonthlyCalendarHeader({
  setOpen,
}: MonthlyCalendarHeaderProps) {
  return (
    <div className="flex-center-y flex-col-reverse md:flex-row md:justify-between w-full my-10 md:my-12 px-5 md:px-12">
      <div className="flex-center-y">
        {/* Title */}
        <div className="flex-center-y flex-col md:flex-row md:items-start gap-0.5 order-2 md:order-1">
          {/* TODO: 타이틀 없으면 UNTITLED 노출 */}
          {/* TODO: 타이틀 설정 팝업? */}
          <Button
            className="text-3xl md:text-4xl font-extrabold transition-all-300 hover:text-secondary"
            onClick={() => setOpen(true)}
          >
            UNTITLED
          </Button>
          <span className="md:text-lg">2025.06</span>
        </div>
        {/* Navigation */}
        {/* TODO: 회원가입 날짜 기준 이전달로 못넘어가게 + 오늘날짜 기준 다음달로 못넘어가게 처리 */}
        {/* TODO: 타이틀 없으면 날짜 노출 */}
        <Button className="order-1 md:order-2 mr-3 md:mr-5 md:ml-6">
          <IoIosArrowBack className="w-7 h-7 stroke-5 md:stroke-10 md:w-8 md:h-8" />
        </Button>
        <Button className="order-3 ml-3 md:ml-0">
          <IoIosArrowForward className="w-7 h-7 stroke-5 md:stroke-10 md:w-8 md:h-8" />
        </Button>
      </div>
      {/* TODO: 햄버거 버튼으로 기록, 발행, 커버설정까지 */}
      {/* Action Buttons (MO ~ PC) */}
      <div className="lg:hidden flex justify-end gap-8 mb-8 md:mb-0">
        <Button>
          <FaRegPenToSquare className="w-6 h-6" />
        </Button>
        <Button>
          <FaRegPaperPlane className="w-6 h-6" />
        </Button>
      </div>
      {/* Action Buttons (PC) */}
      <div className="hidden lg:flex gap-5">
        <Button className="btn-outline px-9 py-1.5">기록하기</Button>
        <Button className="btn-outline px-9 py-1.5">발행하기</Button>
      </div>
    </div>
  );
}
