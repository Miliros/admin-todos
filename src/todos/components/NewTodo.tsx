"use client";

import { IoTrashOutline } from "react-icons/io5";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import * as todoApi from "@/todos/helpers/todos";

export const NewTodo = () => {
  const [description, setDescription] = useState("");
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (description.trim().length === 0) return;

    await todoApi.createTodo(description);
    setDescription("");
    router.refresh();
  };
  const deleteCompleted = async () => {
    await todoApi.deleteTodo();
    router.refresh();
  };
  return (
    <form className="flex w-full p-2" onSubmit={onSubmit}>
      <input
        type="text"
        className="w-6/12 -ml-10 pl-3  py-2 rounded outline-none focus:border-sky-200 transition-all"
        placeholder="¿Qué necesita ser hecho?"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <button
        type="submit"
        className="bg-white hover:bg-gray-400 text-gray-800 p-1.5 rounded m-1 ml-4"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={() => deleteCompleted()}
        type="button"
        className="p-1.5  text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline size={22} color="red" />
      </button>
    </form>
  );
};
