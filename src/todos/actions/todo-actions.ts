"use server";
import prisma from "@/lib/prisma";
import { updateTodo } from "../helpers/todos";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    throw `todo con id ${id} no encontrado`;
  }

  const updateTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });
  revalidatePath("/dashboard/server-todo");
  return updateTodo;
};
