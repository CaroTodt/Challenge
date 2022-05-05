
import React from "react"
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import OtherPage from "./components/OtherPage";
import MemberList from "./components/MemberList";

import loginService from "./services/LoginServices"
import membersServices from "./services/MembersServices";
function App() {

	const handleLogin = async (username, password) => {
		try {
			const user = await loginService.login({
				username, password,
			})

			window.localStorage.setItem(
				"loggedUser", JSON.stringify(user)
			)

			membersServices.setToken(user.token)
		} catch (exception) {
			console.log("Login Error")
		}
	}

	handleLogin("sarah", "connor")

	return (
		<>
			<header>
				<nav className="navbar navbar-expand navbar-dark bg-dark">
					<Link to={" "} className="navbar-brand">
						&nbsp;Home
					</Link>
					<div className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to={"otherPage"} className="nav-link">
								Other Page
							</Link>
						</li>
					</div>
				</nav>
			</header>

			<main role="main" className="container">
				<div className="container mt-3">
					<Routes>
						<Route path="/" element={<MemberList />} />
						<Route path="/otherPage" element={<OtherPage />} />
					</Routes>
				</div>
			</main>
			<footer id="footer" className="bg-light text-center text-lg-start">
				<div className="text-center p-3" >
					<div className="row">
						<div className="col">
							©  Copyright
						</div>
						<div className="col">
							All rights reserved.
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
export default App;
