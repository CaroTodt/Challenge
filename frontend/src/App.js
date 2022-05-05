
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
		<div>
			<header>
				<nav className="navbar navbar-expand navbar-dark bg-dark">
					<Link to={" "} className="navbar-brand">
						Home
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
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-sm" ><span className="text-muted">coprigth</span></div>
						<div className="col-sm" ><span className="text-muted">All rights reserved.</span></div>
					</div>
				</div>
			</footer>
		</div >
	);
}
export default App;
