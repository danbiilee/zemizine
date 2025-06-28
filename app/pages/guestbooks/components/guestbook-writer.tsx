import notionFace from "~/assets/images/my-notion-face-transparent.png";
import ZemiTextarea from "~/components/zemi/zemi-textarea";

export default function GuestbookWriter() {
  return (
    <div className="flex gap-4 p-2 bg-zinc-200">
      <img src={notionFace} alt="profile" className="hidden md:block size-40" />
      <ZemiTextarea
        placeholder="친구에게 하고 싶은 말을 입력해주세요"
        hasSecretMode
      />
    </div>
  );
}
