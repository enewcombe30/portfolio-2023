import Link from "next/link";
import { MenuItems } from "../../constants/menu";

export default function MobileMenu() {
  return (
    <nav>
      {MenuItems.menu.map((item, index) => (
        <Link
          key={index}
          href={item.route}
          className="block px-4 py-2 text-[#878686] hover:text-[#b1afaf]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
