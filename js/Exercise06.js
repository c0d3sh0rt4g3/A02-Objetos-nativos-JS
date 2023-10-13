const teamsData = [
    {team: "Barcelona", points: 20},
    {team: "Real Madrid", points: 19},
    {team: "Atlético de Madrid", points: 16}
]
const addNewTeam = () => {
    const teamName = document.getElementById("teamName").value
    const teamPoints = parseInt(document.getElementById("teamPoints").value)
    let teamExists = false

    for (let i = 0; i < teamsData.length; i++) {
        if (teamName === teamsData[i].team) {
            teamsData[i].points = teamPoints
            teamExists = true
        }
    }

    if (!teamExists) {
        // Team doesn't exist, so we add it to teamsData
        teamsData.push({ team: teamName, points: teamPoints })
    }
    // Clear the table
    removeTable()
    // Update the table with new data
    makeTable()
}

const removeTable = () => {
    const table = document.getElementById("resultsTable");
    const rowCount = table.rows.length

    // Start from the last row and remove rows in reverse order to avoid index issues
    for (let i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i)
    }
}


const makeTable = () => {
    const sortedTeamsData = teamsData.sort((a, b) => b.points - a.points)
    for (let i = 0; i < sortedTeamsData.length; i++) {
        const table = document.getElementById("resultsTable")
        const row = table.insertRow(-1);
        const positionCell = row.insertCell(0);
        const teamNameCell = row.insertCell(1);
        const pointsCell = row.insertCell(2);

        positionCell.innerHTML = (i + 1).toString();
        teamNameCell.innerHTML = sortedTeamsData[i].team;
        pointsCell.innerHTML = sortedTeamsData[i].points;
    }
};