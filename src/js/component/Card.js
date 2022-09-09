import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Card = (props) => {
	return (
	<div className="rounded bg-white border ms-5 char-card">
		<img src="https://res.cloudinary.com/teepublic/image/private/s--uRRMpMxL--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1591539839/production/designs/11082438_0.jpg" className="card-img-top img-sizing" alt="..." />
		<div className="card-body char-card">
			<h5 className="card-title">{props.name}</h5>
			<div className="d-flex justify-content-between mt-3">
				<Link to={props.url} className="btn btn-primary">Learn more!</Link>
				<button className="btn btn-outline-warning rounded"><i className="fa-regular fa-heart"></i></button>
			</div>
		</div>
	</div>
	)
};
