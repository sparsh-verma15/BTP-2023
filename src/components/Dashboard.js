import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import "./GlobalStyles.css";
import "./Dashboard.css";

import ChartComponent from "./ChartComponent";

const Dashboard = () => {
	return (
		<Container className="outerContainer">
			<div className="pageHeading">Dashboard</div>
			<Container className="menuContainer">
				<Row md={5} className="align-items-center">
					<Col className="d-flex justify-content-around" md={4}>
						<DropDownMenu label="Index" />
						<DropDownMenu label="Expiry Date" />
						<DropDownMenu label="Strike Price" />
					</Col>
					<Col md={4}>
						<RadioButtonMenu />
					</Col>
					<Col md={4}>
						<CheckBoxMenu />
					</Col>
				</Row>
				<Row>
					<ChartComponent/>
				</Row>
			</Container>
		</Container>
	);
};



const DropDownMenu = (props) => {
	return (
		<Dropdown>
			<Dropdown.Toggle variant="success" id="dropdown-basic">
				{props.label}
			</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
				<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

const RadioButtonMenu = (props) => {
	return (
		<Form>
			<Form.Check inline name="group1" type="radio" label="Call" />
			<Form.Check inline name="group1" type="radio" label="Put" />
		</Form>
	);
};

const CheckBoxMenu = (props) => {
	return (
		<Form>
			<Form.Check inline label="OI" />
			<Form.Check inline label="IV" />
			<Form.Check inline label="VWAP" />
		</Form>
	);
};

export default Dashboard;
