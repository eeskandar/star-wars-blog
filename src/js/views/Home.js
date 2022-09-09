import React from "react";
import "../../styles/home.css";
import { Characters } from "../component/Characters";
import { Planets } from "../component/Planets";

export const Home = () => {
	return (
	<div className="mt-5">
		<Characters/>
		<Planets/>
	</div>
	)
};
