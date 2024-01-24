export async function onRequest(context) {
    return await fetch("https://mechabellum.wiki/index.php?title=Template:UnitData&action=edit");
}