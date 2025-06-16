import { useMemo } from "react";
import { Link, useLocation, useParams } from "react-router";
import { cn } from "~/lib/utils";

const menus = [
  {
    name: "대문",
    to: "/",
  },
  {
    name: "다이어리",
    to: "/diary",
  },
  {
    name: "방명록",
    to: "/guestbook",
  },
  {
    name: "설정",
    to: "/setting",
  },
];

export default function LocalNavigation() {
  const location = useLocation();
  const { userId } = useParams();

  const formattedMenus = useMemo(
    () =>
      menus.map((menu) => ({
        ...menu,
        to: `/space/${userId}${menu.to}`,
        selected: location.pathname === `/space/${userId}${menu.to}`,
      })),
    [userId, location.pathname]
  );

  return (
    <nav className="border-b-2 border-foreground">
      <ul className="flex items-center gap-10 h-12 px-5">
        {formattedMenus.map((menu) => (
          <li
            key={menu.name}
            className={cn([
              "rounded-full border-2 border-transparent text-sm font-semibold hover:bg-accent hover:border-foreground transition-all-300",
              menu.selected && "bg-accent border-foreground",
            ])}
          >
            <Link to={menu.to} className="block px-3.5 py-1">
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
