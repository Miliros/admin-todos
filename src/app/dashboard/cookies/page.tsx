import { TabBar } from "@/components";
import { cookies } from "next/headers";
import React from "react";

export default function CookiesPage() {
  const cookieStore = cookies();
  const cookieTab = cookieStore.get("selectedTab")?.value ?? "1";
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3  justify-center">
      <div className="flex flex-col ">
        <span className="text-3xl my-3">Trip of the year</span>
        <TabBar currentTab={+cookieTab} />
      </div>
    </div>
  );
}
