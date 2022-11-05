import React, { useContext } from "react";
import styles from "./Header.module.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Header({ menus, curMenu, setCurMenu }) {
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

	const handleClick = (e) => {
		e.preventDefault();
		setCurMenu(e.target.value);
	};

	const handleDarkMode = () => {
		// console.log("element>>", element[0].classList.value);
		// document.documentElement.setAttribute("mode", "dark");
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
