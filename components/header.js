import "../styles/globals.css";
import "../styles/fonts.css";
import "../styles/Tailwind.css";
import Image from "next/image";
import JETT from "../public/valorant-go-vol-1-jett-player-card.png";
import VALORANT from "../public/vct-logo.png";

export default function Header() {
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

			<div className=" ml-28">
				<h1 className="text-5xl font-bold text-center uppercase text-white  mb-0 vct-font">
					Team Name
				</h1>
				<p className="text-lg uppercase text-center text-white mt-0 vct-font-normal">
					searching...
				</p>
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
