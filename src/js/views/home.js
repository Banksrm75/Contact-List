import React from "react";
import "../../styles/home.css";
import ContactList from "./ContactList.jsx";

export const Home = () => {
	return (
	<>
		<div className="row mt-5">
			<div className="col-2"></div>
			<div className="col-8">
				<ContactList />
			</div>
			<div className="col-2"></div>

		</div>
		
	</>
	);
};
