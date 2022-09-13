import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext"

export const Card = (props) => {
	const { store, actions } = useContext(Context)
	const setFavorites = actions.setFavorites

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
				{/*           here I think I have to use a conditional like favorites[props.name] ? "active" but need to ask more to know               */}
				<button className="btn btn-outline-warning rounded" data-bs-toggle="button" onClick={(event) => {setFavorites(props.name)}}><i className="fa-regular fa-heart"></i></button>
			</div>
		</div>
	</div>
	)
};
Card.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string
}