import { useEffect, useState } from "react";
import getTeam from "./teamCall";
import "../styles/globals.css";
import "../styles/fonts.css";
import "../styles/Tailwind.css";
import Image from "next/image";

// pocketbase
import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

// make this a server component, render on the server and data fetch inside of them
// using data from pocketbase, map data accordingly

// from here, we will call from PB using the Javascript SDK
// we're going to be mapping the players and team name from here

export default function PlayerBanners(props) {
	const [team, setTeam] = useState({});

	let team_name = props.teamName;

	useEffect(() => {
		// console.log(getTeam(team_name, pb));
		getTeam(team_name, pb).then(function (recordGet) {
			const test = recordGet.player1;
			console.log(test);
			setTeam(recordGet);
		});
		// setTeam(getTeam(team_name, pb));
	}, [team_name]);

	const { player1, player2, player3, player4, player5 } = team;

	return (
		<div className="flex justify-center">
			<SingleBanner_out player={player1} />
			<SingleBanner player={player2} />
			<SingleBanner_mid player={player3} />
			<SingleBanner player={player4} />
			<SingleBanner_out player={player5} />
		</div>
	);
}

// pass in notes as a prop
function SingleBanner(props) {
	return (
		<div
			key={props.player}
			className="grid w-64 h-128 bg-gradient-to-b from-white/30 mx-4 mt-12 border-t-4 border-t-white hover:from-teal-500/30
            hover:border-teal-300/50 hover:scale-105 transition-all duration-500 ease-in-out shadow-lg 
            hover:shadow-white/50 hover:shadow-xl fade-in-mid"
		>
			<div className="overflow-hidden object-cover w-full h-full p-4 object-top ">
				<Image
					src={
						"https://static.wikia.nocookie.net/valorant/images/c/c4/Cosmic_Origin_Card_Large.png/revision/latest?cb=20210316171610"
					}
					width={500}
					height={500}
					alt={"Astra Valorant Player Banner"}
				/>
			</div>

			<div
				id="bannerContent"
				className="relative align-middle z-10 bottom-0"
			>
				<div id="name_team_info" className="">
					<h1 className="text-center vct-font text-3xl bg-amber-100 uppercase">
						{props.player}
					</h1>
					<h2 className="text-center vct-font-normal text-white text-bold uppercase bg-black/10">
						original team
					</h2>
				</div>
			</div>
		</div>
	);
}

function SingleBanner_out(props) {
	return (
		<div
			key={props.player}
			className="grid w-64 h-128 bg-gradient-to-b from-white/30 mx-4 mt-12 border-t-4 border-t-white hover:from-teal-500/30
            hover:border-teal-300/50 scale-95 hover:scale-100 transition-all duration-500 ease-in-out shadow-lg 
            hover:shadow-white/50 hover:shadow-xl fade-in-end bg-"
		>
			<div className="overflow-hidden object-cover w-full h-full p-4 object-top ">
				<Image
					src={
						"https://static.wikia.nocookie.net/valorant/images/c/c4/Cosmic_Origin_Card_Large.png/revision/latest?cb=20210316171610"
					}
					width={500}
					height={500}
					alt={"Astra Valorant Player Banner"}
				/>
			</div>

			<div
				id="bannerContent"
				className="relative align-middle z-10 bottom-0"
			>
				<div id="name_team_info" className="">
					<h1 className="text-center vct-font text-3xl bg-amber-100 uppercase">
						{props.player}
					</h1>
					<h2 className="text-center vct-font-normal text-white text-bold uppercase bg-black/10">
						original team
					</h2>
				</div>
			</div>
		</div>
	);
}

function SingleBanner_mid(props) {
	return (
		<div
			key={props.player}
			className="grid w-64 h-128 bg-gradient-to-b from-white/30 mx-4 mt-12 border-t-4 border-t-white hover:from-teal-500/30
            hover:border-teal-300/50 scale-105 hover:scale-110 transition-all duration-500 ease-in-out shadow-lg 
            hover:shadow-white/50 hover:shadow-xl fade-in-start"
		>
			<div className="overflow-hidden object-cover w-full h-full p-4 object-top ">
				<Image
					src={
						"https://static.wikia.nocookie.net/valorant/images/c/c4/Cosmic_Origin_Card_Large.png/revision/latest?cb=20210316171610"
					}
					width={500}
					height={500}
					alt={"Astra Valorant Player Banner"}
				/>
			</div>

			<div
				id="bannerContent"
				className="relative align-middle z-10 bottom-0"
			>
				<div id="name_team_info" className="">
					<h1 className="text-center vct-font text-3xl bg-amber-100 uppercase">
						{props.player}
					</h1>
					<h2 className="text-center vct-font-normal text-white text-bold uppercase bg-black/10">
						original team
					</h2>
				</div>
			</div>
		</div>
	);
}
