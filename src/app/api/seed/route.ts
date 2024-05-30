import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // delete * from todo

  await prisma.todo.createMany({
    data: [
      { description: "Chequear emails", complete: true },
      { description: "Hacer calls programadas" },
    ],
  });

  return NextResponse.json({ message: "Seed Executed" });
}
