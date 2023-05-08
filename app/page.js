import styles from "../styles/Home.module.css";
import "../styles/globals.css";
import Header from "../components/header";
import PlayerBanners from "../components/playerBanners";

export default function HomePage() {
	return (
		<>
			<Header />
			<PlayerBanners />
		</>
	);
}
