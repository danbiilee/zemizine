import { useMemo } from "react";
import { Link, useLocation, useParams } from "react-router";

import { LNB_MENUS } from "~/constants/menu";
import { cn } from "~/lib/utils";

export default function LocalNavigation() {
  const location = useLocation();
  const { slug } = useParams();

  const formattedLNB_MENUS = useMemo(
    () =>
      LNB_MENUS.map((menu) => ({
        ...menu,
        to: `/${slug}${menu.to}`,
        selected: location.pathname.includes(menu.to),
      })),
    [slug, location.pathname]
  );

  return (
    <nav className="bg-primary-foreground border-b-2">
      <ul className="flex-center-y gap-10 h-12 px-5">
        {formattedLNB_MENUS.map((menu) => (
          <li
            key={menu.name}
            className={cn([
              "btn-ghost-accent text-sm",
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
