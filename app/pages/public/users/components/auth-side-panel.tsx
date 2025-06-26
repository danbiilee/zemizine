import sidePanelImage from "~/assets/images/auth-side-panel.jpg";

export default function AuthSidePanel() {
  return (
    <div className="hidden lg:flex flex-1 border-l-2">
      <img
        src={sidePanelImage}
        alt="zemizine"
        className="size-full object-cover"
      />
    </div>
  );
}
