import { TabBar } from "@/components";
import { cookies } from "next/headers";
import { ImAirplane } from "react-icons/im";

export default function CookiesPage() {
  const cookieStore = cookies();
  const cookieTab = cookieStore.get("selectedTab")?.value ?? "1";
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-3xl">
        <span className="text-3xl my-3 justify-center w-full max-w-3xl pl-10">
          Stops on my trip
        </span>
        <div className="flex items-center justify-center gap-3">
          <ImAirplane className="flex" size={20} />
          <TabBar currentTab={+cookieTab} />
        </div>
      </div>
    </div>
  );
}
