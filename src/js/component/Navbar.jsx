import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
import starWars from "../../img/pngwing.com.png"

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const favorites = store.favorites
	const setNewFavorites = actions.setNewFavorites

	const FavsMapping = favorites.map((fav, i) => {
		return (
			<div key={i}>
				<Link to={`/${fav.type}/${fav.uid}`} className="px-2 py-1 text-decoration-none text-wawa fw-bold">{fav.name}</Link>
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
		<nav className="navbar navbar-light bg-light p-0 sticky-top">
			<Link to="/">
				<img src={starWars} alt="Star Wars" width="130" height="65" className="ms-5"/>
			</Link>
			<div className="dropdown">
				<button className="btn btn-dark dropdown-toggle me-5" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
					Favorites ({favorites.length})
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
					{
						favorites.length > 0 ? (
							FavsMapping
						) : (
							<li className="px-2 fst-italic text-muted">Favs you don't have!</li>
						)
					}
				</ul>
			</div>
		</nav>
	);
};
