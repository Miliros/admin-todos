import Image from "next/image";
import { SidebarItem } from "./SidebarItem";
import {
  IoCartSharp,
  IoCheckboxOutline,
  IoListOutline,
  IoPerson,
} from "react-icons/io5";
import { PiCookieLight } from "react-icons/pi";
import { getServerSession } from "next-auth";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";
import { LogOutButton } from "./LogoutButton";

const menuItems = [
  {
    icon: <IoPerson />,
    title: "Profile",
    path: "/dashboard",
  },
  {
    icon: <IoCheckboxOutline />,
    title: "Rest TODOS",
    path: "/dashboard/rest-todos",
  },
  {
    icon: <IoListOutline />,
    title: "Server Actions",
    path: "/dashboard/server-todos",
  },
  {
    icon: <PiCookieLight />,
    title: "Cookies",
    path: "/dashboard/cookies",
  },
  {
    icon: <IoCartSharp />,
    title: "Products",
    path: "/dashboard/products",
  },
];

export const Sidebar = async () => {
  // Aquí está la corrección
  const session = await getServerSession(authOptions);
  const name = session?.user?.name || "Usuario Anónimo";
  const image = session?.user?.image || "/default-avatar.png"; // Ruta a una imagen predeterminada

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4"></div>

        <div className="mt-8 text-center">
          <Image
            src={image}
            width={150}
            height={150}
            alt=""
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            {name}
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {menuItems.map((item) => (
            <SidebarItem key={item.path} {...item} />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <LogOutButton />
      </div>
    </aside>
  );
};
