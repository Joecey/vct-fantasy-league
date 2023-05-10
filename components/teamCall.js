export default async function getTeam(teamName, pb) {
	// use SDK to get matching record from collection
	const record = await pb
		.collection("teams")
		.getFirstListItem(`team_name="${teamName}"`);
	console.log("here pb");
	return record;
}
