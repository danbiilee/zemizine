import { NavLink } from "react-router";

const menu = [
  {
    section: "프로필",
    items: [{ label: "프로필", to: "/settings/profile" }],
  },
  {
    section: "홈피",
    items: [
      { label: "노출 설정", to: "/settings/home/visibility" },
      { label: "글 관리", to: "/settings/home/posts" },
      { label: "방명록 관리", to: "/settings/home/guestbook" },
      { label: "댓글 관리", to: "/settings/home/comments" },
    ],
  },
  {
    section: "먼슬리북",
    items: [
      { label: "커버 관리", to: "/settings/monthlybook/cover" },
      { label: "책장 관리", to: "/settings/monthlybook/shelf" },
    ],
  },
  {
    section: "잼메이트",
    items: [{ label: "잼메이트", to: "/settings/jam-mate" }],
  },
  {
    section: "스티커함",
    items: [{ label: "스티커함", to: "/settings/sticker" }],
  },
];

export default function SideMenu() {
  return (
    <aside className="w-60 h-full px-8 py-6 border-r-2 border-foreground">
      <nav>
        {menu.map(({ section, items }) => (
          <section key={section || items[0].label} className="mb-8">
            {items.length > 1 ? (
              <>
                <div className="mb-2 font-semibold">{section}</div>
                <ul className="pl-3">
                  {items.map(({ label, to }) => (
                    <li key={label} className="mb-2">
                      <NavLink to={to} className="">
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <NavLink to={items[0].to} className="mb-2 font-semibold">
                {items[0].label}
              </NavLink>
            )}
          </section>
        ))}
      </nav>
    </aside>
  );
}
