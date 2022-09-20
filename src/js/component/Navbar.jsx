import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const favorites = store.favorites
	const setNewFavorites = actions.setNewFavorites

	const FavsMapping = favorites.map((fav, i) => {
		return (
			<div key={i}>
				<Link to={`/${fav.type}/${fav.uid}`} className="px-2 py-1">{fav.name}</Link>
				<button type="button"
				className="btn-close btn-close-dark float-end px-2"
				onClick={(event) => deleteFav(i)}></button>
			</div>
			)
	})

	function deleteFav (i) {
		const newList = favorites.filter((item, index)=> {
			if (i == index) { 
				return false
			}
			return true
		})
		setNewFavorites(newList)
	}

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5">Estar Guars</span>
			</Link>
			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle me-5" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites ({favorites.length})
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
					{
						favorites.length > 0 ? (
							FavsMapping
						) : (
							<li className="px-2 py-1 fst-italic text-muted">You don't have Favs!</li>
						)
					}
				</ul>
			</div>
		</nav>
	);
};
