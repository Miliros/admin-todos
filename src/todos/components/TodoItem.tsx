import { Todo } from "prisma/prisma-client";
import styles from "./TodoItem.module.css";

interface Props {
  todo: Todo;
}
export const TodoItem = ({ todo }: Props) => {
  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4"></div>
    </div>
  );
};
