import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { MenuItems } from "../../constants/menu";
import MenuIcon from "../../constants/Svgs/MenuIcon";
import CrossIcon from "../../constants/Svgs/CrossIcon";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Hamburger/Close Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-[#878686] hover:text-[#b1afaf] focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <div className="w-6 h-6">
            <CrossIcon />
          </div>
        ) : (
          <div className="w-6 h-6">
            <MenuIcon fill="fill-[#878686]" stroke="stroke-[#878686]" />
          </div>
        )}
      </button>

      {/* Menu Items */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
          />

          {/* Menu */}
          <nav className="absolute top-full left-0 mt-2 bg-[#061c03] border border-green-600 border-opacity-20 rounded-lg shadow-lg z-50 min-w-[12rem]">
            {MenuItems.menu.map((item, index) => {
              const isActive = router.pathname === item.route;
              return (
                <Link
                  key={index}
                  href={item.route}
                  className={`block px-4 py-3 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                    isActive
                      ? "text-green-600 bg-[#21551b] bg-opacity-20 border-l-2 border-green-600"
                      : "text-[#878686] hover:text-[#b1afaf] hover:bg-[#091a09]"
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </>
      )}
    </div>
  );
}
