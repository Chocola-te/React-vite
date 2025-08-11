import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete }) => {
  // 우선순위: 숫자가 낮을수록 높음
  const sortedTodos = [...todos].sort((a, b) => a.priority - b.priority);
  // a - b는 오름차순
  // b - a는 내림차순

  return (
    <div>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;