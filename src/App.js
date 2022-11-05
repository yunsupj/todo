import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { DarkModeProvider } from "./context/DarkModeContext";

const menus = ["all", "active", "completed"];
function App() {
	const [curMenu, setCurMenu] = useState(menus[0]);

	return (
		<DarkModeProvider>
			<Header menus={menus} curMenu={curMenu} setCurMenu={setCurMenu} />
			<TodoList curMenu={curMenu} />
		</DarkModeProvider>
	);
}

export default App;
