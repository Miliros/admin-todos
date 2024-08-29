// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { Profile } from "@/components";

export default async function DashboardPage() {
  // const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-center md:grid-cols-2 lg:grid-cols-3">
      <Profile />
    </div>
  );
}
