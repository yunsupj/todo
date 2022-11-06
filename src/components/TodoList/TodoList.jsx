import React, { useState } from "react";
import { useEffect } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ curMenu }) {
	const [todos, setTodos] = useState(() => readTodos());

	const handleAdd = (todo) => {
		setTodos([...todos, todo]);
	};

	const handleDelete = (todo) => {
		setTodos(todos.filter((t) => t.id !== todo.id));
	};

	const handleUpdate = (todo) => {
		setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
	};

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const filteredTodos = getFilterTodos(todos, curMenu);

	return (
		<section className={styles.container}>
			<ul className={styles.list}>
				{filteredTodos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						onDelete={handleDelete}
						onUpdate={handleUpdate}
					/>
				))}
			</ul>
			<AddTodo onAdd={handleAdd} />
		</section>
	);
}

function getFilterTodos(todos, curMenu) {
	if (curMenu === "all") {
		return todos;
	}
	return todos.filter((todo) => todo.status === curMenu);
}

function readTodos() {
	return JSON.parse(localStorage.getItem("todos"));
}
