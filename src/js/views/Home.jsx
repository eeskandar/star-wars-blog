import React from "react";
import "../../styles/home.css";
import { Characters } from "../component/Characters.jsx";
import { Footer } from "../component/Footer.jsx";
import { Planets } from "../component/Planets.jsx";

export const Home = () => {
	return (
	<div className="mt-5">
		<Characters/>
		<Planets/>
		<Footer/>
	</div>
	)
};
