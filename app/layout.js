import "../styles/globals.css";
import Footer from "../components/footer";

export const metadata = {
	title: "Valorant Champions Tour Fantasy League",
	description: "Create your dream pro VCT team!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className=" body-image w-full h-screen">
				<div className="w-full h-full bg-cyan-950/70 backdrop-blur-sm ">
					<main>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
