import { useState } from "react";

import "../styles/globals.css";
import "../styles/fonts.css";
import "../styles/Tailwind.css";
import Image from "next/image";
import JETT from "../public/valorant-go-vol-1-jett-player-card.png";
import VALORANT from "../public/vct-logo.png";

export default function Header(props) {
	const [team, setTeam] = useState("");

	// we will be passing this function back up towards the parent page
	function handleInput(e) {
		// prevent page refresh
		e.preventDefault();
		const adj_team = team.toLowerCase();
		props.sendQuery(adj_team);
		console.log("form submitted ", adj_team);
		// onQuery(adj_team);
	}

	return (
		<div className="flex justify-between items-center h-32  ">
			<div className="ml-4 flex justify-center items-center group">
				<Image
					src={VALORANT}
					className="valorant-icon group-hover:rotate-0"
					alt="White Valorant Logo"
				/>
				<h1 className="text-3xl uppercase vct-font font-bold text-white">
					VCT Fantasy League
				</h1>
			</div>

			<div className="ml-28">
				{/* here we're going to use the form to handle the onClick event */}
				<form
					className="flex flex-col items-center"
					onSubmit={handleInput}
				>
					<input
						type="text"
						placeholder="Enter team here..."
						value={team}
						onChange={(e) => setTeam(e.target.value)}
						className="text-5xl font-bold text-center uppercase text-white vct-font bg-white/20 shadow-xl focus:outline-none
					focus:shadow-white focus:shadow-md transition-shadow duration-500 mt-4"
					/>
					<button
						type="submit"
						className="w-1/4  text-lg uppercase text-center text-white mt-4 vct-font-normal transition-colors duration-300 transform
						bg-blue-600/20 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
					>
						Find team!
					</button>
				</form>
			</div>

			<div className="flex justify-center h-16 mr-8 ">
				<SmallPlayer />
				<SmallPlayer />
				<SmallPlayer />
				<SmallPlayer />
				<SmallPlayer />
			</div>
		</div>
	);
}

function SmallPlayer() {
	return (
		<div className="h-full aspect-square border-2 border-white drop-shadow-lg mr-4 hover:rounded-3xl transition-all ease-in-out group">
			<Image
				src={"https://owcdn.net/img/6416950ce6638.png"}
				// src={JETT}
				width={500}
				height={500}
				className="overflow-hidden w-full h-full object-cover object-top group-hover:rounded-3xl transition-all ease-in-out bg-white"
				alt={"TenZ, Sentinels"}
			/>
		</div>
	);
}
