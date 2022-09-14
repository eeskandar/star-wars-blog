import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext"

export const Card = (props) => {
	const { store, actions } = useContext(Context)
	const [ active, setActive ] = useState(false)
	const favorites = store.favorites
	const setFavorites = actions.setFavorites
	const setNewFavorites = actions.setNewFavorites


	function deleteFav (name) {
		const newList = favorites.filter((item, index)=> {
			if (name == item.name) { 
				return false
			}
			return true
		})
		setNewFavorites(newList)
	}

	return (
	<div className="rounded bg-white border ms-5 char-card">
			<img src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`} className={props.styles}
			alt="..." onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}/>
		<div className="card-body char-card">
			<h5 className="card-title">{props.name}</h5>
			<div className="d-flex justify-content-between mt-3">
				<Link to={props.url} className="btn btn-outline-primary">Learn more!</Link>
				<button className={`btn btn-outline-warning rounded ${active ? "active" : ""}`} 
				onClick={(event) => {
					if(!active) {
						setFavorites(props.name, props.url)
						setActive(true)
					} if(active) {
						deleteFav(props.name)
						setActive(false)
					}}}>
					<i className="fa-regular fa-heart"></i>
				</button>
			</div>
		</div>
	</div>
	)
};
Card.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string
}