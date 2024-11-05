import React from "react";
import "../../styles/home.css";
import ContactList from "../component/ContactList.jsx";


const fakeData = [

];




export const Home = () => {
	return (
	<>
		<div className="row mt-5">
			<div className="col-3"></div>
			<div className="col-6">
				<ContactList />
			</div>
			<div className="col-3"></div>

		</div>
		
	</>
	);
};
