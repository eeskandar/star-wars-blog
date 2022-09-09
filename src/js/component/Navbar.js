import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5">Estar Guars</span>
			</Link>
			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle me-5" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites (aqui va el .length del array favs)
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
					<li><button className="dropdown-item" type="button">Aqui va el .map de Favs</button></li>
				</ul>
			</div>
		</nav>
	);
};
