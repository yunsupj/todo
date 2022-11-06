import React from "react";
import styles from "./Header.module.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDarkMode } from "../../context/DarkModeContext";

export default function Header({ menus, curMenu, setCurMenu }) {
	const { darkMode, toggleDarkMode } = useDarkMode();

	const handleClick = (e) => {
		e.preventDefault();
		setCurMenu(e.target.value);
	};

	const handleDarkMode = () => {
		toggleDarkMode();
	};

	return (
		<header className={styles.header}>
			<button className={styles.mode} onClick={handleDarkMode}>
				{darkMode && <BsFillSunFill />}
				{!darkMode && <BsFillMoonFill />}
			</button>
			<ul className={styles.menus}>
				{menus.map((menu, idx) => (
					<li key={idx}>
						<button
							className={`${styles.menu} ${menu === curMenu && styles.cur}`}
							value={menu}
							onClick={handleClick}
						>
							{menu}
						</button>
					</li>
				))}
			</ul>
		</header>
	);
}
