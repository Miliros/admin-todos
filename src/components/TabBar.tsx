"use client";

import { useState } from "react";
import { setCookie } from "cookies-next";

interface Props {
  currentTab?: number;
  tabOptions?: number[];
}

export const TabBar = ({
  tabOptions = [1, 2, 3, 4],
  currentTab = 1,
}: Props) => {
  const [selected, setSelected] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setSelected(tab);
    setCookie("selectedTab", tab.toString());
  };

  return (
    <div
      className={`
      grid w-full space-x-2  bg-gray-200 p-3
      grid-cols-4 
    `}
    >
      {tabOptions.map((tab) => (
        <div key={tab}>
          <input
            checked={selected === tab}
            onChange={() => {}}
            type="radio"
            id={tab.toString()}
            className="peer hidden"
          />
          <label
            onClick={() => onTabSelected(tab)}
            className="block cursor-pointer select-none rounded-xl p-2 text-center  to-teal-100 peer-checked:font-bold peer-checked:text-amber-950"
          >
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
};
