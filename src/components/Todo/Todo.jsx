import React from "react";
import styles from "./Todo.module.css";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onDelete, onUpdate }) {
	const { id, text, status } = todo;
	const handleClickDelete = () => {
		onDelete(todo);
	};

	const handleChange = (e) => {
		const status = e.target.checked ? "completed" : "active";
		onUpdate({ ...todo, status });
	};

	return (
		<li className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				id={id}
				onChange={handleChange}
			/>
			<label htmlFor={id} className={styles.text}>
				{text}
			</label>
			<span className={styles.icon}>
				<button onClick={handleClickDelete} className={styles.button}>
					<FaTrashAlt />
				</button>
			</span>
		</li>
	);
}
