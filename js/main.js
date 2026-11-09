/** 
Name: Anusha Dhamera
Date: November 8, 2026
Assignment: Favorite Singers
*/

// List of favorite singers with their date of birth and best songs
const favoriteSingers = [
    {
        name: "Lana Del Rey",
        dob: "1985-06-21",
        bestSongs: "Summertime Sadness, Video Games"
    },
    {
        name: "Noah Kahan",
        dob: "1997-01-01",
        bestSongs: "Stick Season, Dial Drunk"
    },
    {
        name: "Taylor Swift",
        dob: "1989-12-13",
        bestSongs: "Love Story, Cruel Summer"
    },
    {
        name: "Billie Eilish",
        dob: "2001-12-18",
        bestSongs: "Bad Guy, Birds of a Feather"
    },
    {
        name: "Rihanna",
        dob: "1988-02-20",
        bestSongs: "Umbrella, Diamonds"
    }
];

// Turns a YYYY-MM-DD string into a short date like "12/13/1989"
function formatDate(isoDateString) {
    const parsedDate = new Date(isoDateString);
    return parsedDate.toLocaleDateString("en-US");
}

// Builds one table row for a singer
function buildSingerRow(singer) {
    const tableRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = singer.name;

    const dobCell = document.createElement("td");
    dobCell.textContent = formatDate(singer.dob);

    const songsCell = document.createElement("td");
    songsCell.textContent = singer.bestSongs;

    tableRow.appendChild(nameCell);
    tableRow.appendChild(dobCell);
    tableRow.appendChild(songsCell);

    return tableRow;
}

// Loops through the singers list and adds a row for each one
function renderSingersTable(singers) {
    const tableBody = document.getElementById("singers-table-body");

    if (!tableBody) {
        return;
    }

    singers.forEach(function (singer) {
        const row = buildSingerRow(singer);
        tableBody.appendChild(row);
    });
}

// Populates the table once the page has loaded
document.addEventListener("DOMContentLoaded", function () {
    renderSingersTable(favoriteSingers);
});
