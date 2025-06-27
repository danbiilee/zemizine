import { Button } from "~/components/ui/button";
import DiaryComments from "./comments";

export default function DiaryContent() {
  return (
    <div className="text-sm md:text-base">
      <div className="p-4 md:p-8">
        {/* TLDR */}
        <div className="flex-center-y gap-1 md:gap-2 pb-4 md:pb-8 mb-4 md:mb-8 border-b-1 border-dashed-muted">
          <span className="text-2xl md:text-3xl">😉</span>
          <span className="md:text-lg font-semibold">오늘 하루 맑음</span>
        </div>
        {/* 내용 */}
        <div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
          rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
          semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
          blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
          et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
          faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
          tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
          sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit
          cursus nunc,
        </div>
        {/* 버튼 */}
        <div className="flex-between pt-4 mt-4 border-t-1 border-dashed-muted">
          <Button className="btn-text-ghost">스티커</Button>
          <div className="flex-center-y gap-1">
            <Button className="btn-text-ghost">수정</Button>
            <span className="divider" />
            <Button className="btn-text-ghost">삭제</Button>
          </div>
        </div>
      </div>
      <DiaryComments />
    </div>
  );
}
