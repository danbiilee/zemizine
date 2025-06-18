import sidePanelImage from "~/assets/images/auth-side-panel.jpg";

export default function AuthSidePanel() {
  return (
    <div className="flex-1 border-l-2 border-foreground">
      <img
        src={sidePanelImage}
        alt="zemizine"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
