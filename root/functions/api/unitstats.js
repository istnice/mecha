export async function onRequest(context) {
    const data_raw = await fetch("https://mechabellum.wiki/index.php?title=Template:UnitData&action=edit");
	const parser = new DOMParser();
	const data_parsed = parser.parseFromString(data_raw, "text/html")
	return data_parse.getElementById("wpTextbox1");
}