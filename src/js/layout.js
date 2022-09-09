import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";

import { Home } from "./views/Home.jsx";
import { SingleChar } from "./views/SingleChar.jsx";
import { SinglePlanet } from "./views/SinglePlanet.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/people/:uid">
							<SingleChar />
						</Route>
						<Route exact path="/planets/:uid">
							<SinglePlanet />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
