import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { NewTodo } from "@/todos";
export const metadata = {
  title: "Listado de Todos",
  description: "SEO Title",
};

export default async function ServerToDosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <>
      <span className="text-3xl mb-10">Server actions</span>
      <div className="w-full px-3 mx-5 mb-5">{<NewTodo />}</div>

      <TodosGrid todos={todos} />
    </>
  );
}
