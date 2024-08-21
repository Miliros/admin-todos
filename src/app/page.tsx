import Image from "next/image";
import list from "./images/list.jpg";
import { IoAirplane } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col text-center items-center p-6 justify-around">
      <span className="mb-4 text-5xl font-roboto">My travel guide</span>
      <Image
        src={list}
        width={720}
        height={550}
        alt="list"
        className="flex border border-black m-6"
      />
      <div className="flex flex-row items-center">
        <Link href="/dashboard">
          <IoAirplane size={50} />
        </Link>
        <p className="text-xs ml-1"> click</p>
      </div>
    </div>
  );
}
