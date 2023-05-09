"use client";

import React, { useState } from "react";

import styles from "../styles/Home.module.css";
import "../styles/globals.css";
import Header from "../components/header";
import PlayerBanners from "../components/playerBanners";

export default function HomePage() {
	// create a useState for updating the teamName state whenever it is updated from Header
	// when query is called, we immediately update the state > which is then flown down into playerBanner child
	const [query, setQuery] = useState("test_team");

	const sendQuery = (data) => {
		setQuery(data);
	};

	return (
		<>
			<Header sendQuery={sendQuery} />
			<PlayerBanners teamName={query} />
		</>
	);
}
