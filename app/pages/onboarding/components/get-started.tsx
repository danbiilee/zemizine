import NextButton from "./next-button";

export default function GetStarted() {
  return (
    <>
      <div className="text-center">
        <h2 className="mb-5 text-xl md:text-2xl lg:text-3xl font-bold">
          시작해볼까요?
        </h2>
        <p className="lg:text-lg">나중에 언제든 수정할 수 있어요!</p>
      </div>
      <NextButton />
    </>
  );
}
