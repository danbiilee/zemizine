export const FUNNEL_STEPS = [
  {
    id: 0,
    title: "재미진 여정의 첫 잼-스텝!",
    description: (
      <>
        <div>
          <p>단 세 걸음이면 나만의 잼이 생겨요.</p>
          <p className="-mt-1 text-xs md:text-sm text-secondary font-semibold italic">
            <span className="text-[15px]">🦄잼🦄</span>은 내 취향, 추억을 담는
            개인 공간이에요!
          </p>
        </div>
        <div>
          <p className="mb-1">부담 없이, 내 느낌대로 채워보세요.</p>
          <p>나중에 언제든 다시 바꿀 수 있어요.</p>
        </div>
      </>
    ),
    button: "시작하기",
  },
  {
    id: 1,
    title: "내 소개부터 해볼까요?",
    button: "다음 단계로 가기",
  },
  {
    id: 2,
    title: "이제 내 잼을 소개해볼까요?",
    description: (
      <>
        <p>내 공간에서 가장 먼저 보이는 정보예요.</p>
      </>
    ),
    button: "다음 단계로 가기",
  },
  {
    id: 3,
    title: "내 먼슬리북 테마를 정해볼까요?",
    description: (
      <>
        <p>작성한 정보는 먼슬리북 표지에 사용돼요. 비워둬도 괜찮아요.</p>
      </>
    ),
    button: "완성할게요",
  },
];

export const VISIBILITY_OPTIONS = [
  {
    value: "PUBLIC",
    label: "누구나 볼 수 있어요",
  },
  {
    value: "FRIEND",
    label: "잼메이트에게만 보여줄래요",
  },
  {
    value: "PRIVATE",
    label: "나만 볼 수 있어요",
  },
];
