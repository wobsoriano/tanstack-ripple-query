interface Todo {
	id: number;
	todo: string;
	completed: boolean;
}

export const fetchTodos = async () => {
	const resp = await fetch('https://dummyjson.com/todos');
	const data = await resp.json();
	return data.todos as Array<Todo>;
};

export const fetchSingleTodo = async (id: number) => {
	const resp = await fetch(`https://dummyjson.com/todos/${id}`);
	const data = await resp.json();
	return data as Todo;
};
