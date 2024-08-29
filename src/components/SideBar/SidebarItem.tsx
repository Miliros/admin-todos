"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiBookmarkCheck } from "react-icons/ci";

interface Props {
  icon: React.ReactNode;
  path: string;
  title: string;
}

export const SidebarItem = ({ icon, path, title }: Props) => {
  const pathName = usePathname();

  {
    /* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */
  }
  return (
    <li>
      <Link
        href={path}
        className={`
        px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group
        hover:bg-gradient-to-r hover:bg- from-rose-100 to-teal-100 hover:text-black
        ${
          path === pathName
            ? "text-black bg-gradient-to-r from-rose-100 to-teal-100"
            : ""
        }
      `}
      >
        {icon}
        <span className="group-hover:text-white-700">{title}</span>
      </Link>
    </li>
  );
};
