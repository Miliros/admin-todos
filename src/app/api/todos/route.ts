import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: Request) {
  // your function here
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}
