import DiaryComments from "./comments";

export default function DiaryContent() {
  return (
    <div className="border-x-2 border-foreground text-sm lg:text-base">
      <div className="p-4 sm:p-8">
        {/* TLDR */}
        <div className="flex items-center gap-1 md:gap-2 pb-4 sm:pb-8 mb-4 sm:mb-8 border-b-1 border-dashed border-muted-foreground">
          <span className="text-2xl lg:text-3xl">😉</span>
          <span className="md:text-base lg:text-lg font-semibold">
            오늘 하루 맑음
          </span>
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
      </div>
      <DiaryComments />
    </div>
  );
}
